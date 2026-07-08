#!/bin/bash
set -e

# Load NVM (needed for non-interactive SSH sessions like GitHub Actions)
export NVM_DIR="/root/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
export PATH="/root/.nvm/versions/node/v20.20.2/bin:$PATH"

REPO_DIR="/var/www/nargtecweb"

echo "=== Pulling latest code ==="
cd "$REPO_DIR"
git fetch origin main
git reset --hard origin/main

echo "=== Installing dependencies ==="
npm ci

echo "=== Building ==="
npm run build

echo "=== Restarting service ==="
PORT=3006 pm2 restart nargtec-web || PORT=3006 pm2 start npm \
  --name nargtec-web \
  --cwd "$REPO_DIR" \
  -- start

pm2 save

echo "=== Deploy complete ==="
