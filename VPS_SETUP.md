# Setup inicial en el VPS (solo la primera vez)

## 1. Clonar el repo
```bash
cd /var/www
git clone https://github.com/nriv3rag/nargtecweb.git
chmod +x /var/www/nargtecweb/deploy.sh
```

## 2. Crear el .env de producción
```bash
cp /var/www/nargtecweb/.env.example /var/www/nargtecweb/.env
nano /var/www/nargtecweb/.env
```
Rellenar:
- `RESEND_API_KEY` → la API key de Resend (misma cuenta que Onbility, remitente `noreply@mail.onbility.com`). Con esto configurado no hace falta tocar las variables SMTP_*.
- `CONTACT_TO_EMAIL=info@nargtec.com` (ya viene así por defecto) — es el único correo que recibe las solicitudes del formulario.

## 3. Verificar que el puerto 3006 esté libre
```bash
pm2 list
```
Si ya hay algo corriendo en el puerto 3006 (por otra app en el VPS), cambia el puerto en `deploy.sh` (línea `PORT=3006`) y en el bloque de Nginx del paso 4, a uno libre.

## 4. Configurar Nginx para nargtec.com
```bash
nano /etc/nginx/sites-available/nargtec
```

Contenido:
```nginx
server {
    listen 80;
    server_name nargtec.com www.nargtec.com;

    client_max_body_size 10M;

    location / {
        proxy_pass http://localhost:3006;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
ln -s /etc/nginx/sites-available/nargtec /etc/nginx/sites-enabled/
nginx -t
systemctl reload nginx
```

## 5. Apuntar el DNS del dominio
En el panel donde tengas registrado `nargtec.com` (Hostinger u otro), crea/edita los registros:
- `A` → `nargtec.com` → IP del VPS
- `A` → `www.nargtec.com` → IP del VPS (o `CNAME` a `nargtec.com`)

## 6. SSL con Certbot
```bash
certbot --nginx -d nargtec.com -d www.nargtec.com
```

## 7. Primer deploy manual
```bash
bash /var/www/nargtecweb/deploy.sh
```

## 8. Verificar que el proceso está corriendo
```bash
pm2 list
pm2 logs nargtec-web --lines 20
```

## 9. Agregar secrets en GitHub
En https://github.com/nriv3rag/nargtecweb/settings/secrets/actions
agregar (son los mismos que usan las otras apps en este VPS):
- `VPS_HOST` → IP del VPS
- `VPS_USER` → root (o el usuario SSH)
- `VPS_SSH_KEY` → contenido de la clave privada SSH

## Flujo de deploy de ahí en adelante
```
editar código → git commit → git push origin main → GitHub Actions despliega automáticamente
```
