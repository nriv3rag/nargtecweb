# Security remediation — 2026-10-16

This change preserves the security updates already deployed on the VPS.
Use Node.js 24.22.0 and the committed lockfiles. Backend and frontend production dependency audits passed with zero advisories after remediation.

Environment files, database passwords, JWT secrets, SSH keys, PM2 dumps, logs and incident evidence must remain outside Git. Existing access credentials are unchanged by this change.

The deployment scripts use the existing deploy PM2 account rather than starting a second root PM2 instance. Database migrations retain the existing deployment behavior and may require separately approved database privileges; this change does not grant privileges.

Nargtec uses the isolated nargtec-web systemd service. The contact page offers the published phone number; the contact endpoint returns HTTP 410. Mail dependencies and runtime mail credentials were removed. nginx also blocks the contact endpoint. Install deploy.sh as /usr/local/sbin/deploy-nargtec before using the GitHub deployment workflow. The script keeps the old release for rollback and preserves the existing systemd sandbox and external environment file. It does not modify SSH or provider credentials.

GitHub Actions invokes the root-owned deployment script at /usr/local/sbin/deploy-nargtec. Update that installed script explicitly when changing deployment logic.
