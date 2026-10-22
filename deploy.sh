#!/usr/bin/env bash
set -euo pipefail
export PATH="/opt/node-v24.22.0-linux-x64/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
NODE="/opt/node-v24.22.0-linux-x64/bin/node"
if [[ "${1:-}" == "--check" ]]; then
  test -x "$NODE"
  systemctl is-active --quiet nargtec-web
  "$NODE" --version
  echo "Nargtec deployment preflight passed; no deployment performed."
  exit 0
fi
[[ "$EUID" -eq 0 ]] || { echo "Run this deployment through the existing administrator." >&2; exit 1; }
exec 9>/run/lock/nargtec-deploy.lock
flock -n 9 || { echo "Another deployment is running." >&2; exit 1; }
RELEASE_ROOT="/var/www/nargtec-releases"
install -d -m 755 "$RELEASE_ROOT"
RELEASE=$(mktemp -d "$RELEASE_ROOT/release-XXXXXXXX")
git clone --depth 1 --branch main github-nargtec:nriv3rag/nargtecweb.git "$RELEASE"
# The deployed website must not regain the mail handler or its credentials.
python3 - "$RELEASE" <<'PY'
import json,pathlib,sys
root=pathlib.Path(sys.argv[1])
package=json.loads((root/'package.json').read_text())
assert 'nodemailer' not in package.get('dependencies', {}), 'Mail sending dependency is forbidden'
route=(root/'app/api/contact/route.ts').read_text()
assert '410' in route and 'sendMail' not in route and 'resend' not in route.lower(), 'Contact route must remain disabled'
assert not [p for p in root.glob('.env*') if not p.name.endswith(('.example','.sample','.template'))], 'Keep environment files outside deployment releases'
PY
chown -R deploy:deploy "$RELEASE"
runuser -u deploy -- env PATH="$PATH" npm --prefix "$RELEASE" ci --include=dev --ignore-scripts
runuser -u deploy -- env PATH="$PATH" npm --prefix "$RELEASE" run build
runuser -u deploy -- env PATH="$PATH" npm --prefix "$RELEASE" prune --omit=dev --ignore-scripts
runuser -u deploy -- env PATH="$PATH" npm --prefix "$RELEASE" audit --omit=dev
mkdir -p "$RELEASE/.next/cache"
chown -R root:root "$RELEASE"
chmod 755 "$RELEASE"
python3 - "$RELEASE" <<'PY'
import pathlib,subprocess,sys,time,urllib.request,urllib.error
new=sys.argv[1]
p=pathlib.Path('/etc/systemd/system/nargtec-web.service')
previous=p.read_text()
old=next(line.split('=',1)[1] for line in previous.splitlines() if line.startswith('WorkingDirectory='))
updated=previous.replace(old,new)
p.write_text(updated)
def restart():
 subprocess.run(['systemctl','daemon-reload'],check=True)
 subprocess.run(['systemctl','restart','nargtec-web'],check=True)
try:
 restart()
 for attempt in range(20):
  try:
   with urllib.request.urlopen('http://127.0.0.1:3006/contacto',timeout=3) as response:
    body=response.read().decode()
    assert response.status==200 and '<form' not in body
   request=urllib.request.Request('http://127.0.0.1:3006/api/contact',data=b'{}',headers={'Content-Type':'application/json'})
   try: urllib.request.urlopen(request,timeout=3); raise RuntimeError('Mail route unexpectedly enabled')
   except urllib.error.HTTPError as error: assert error.code==410
   break
  except Exception:
   if attempt==19: raise
   time.sleep(1)
except Exception:
 p.write_text(previous)
 restart()
 raise
print('Nargtec deployment verified. Previous release retained.')
PY
