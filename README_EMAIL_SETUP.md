# 🚀 CONFIGURACIÓN PARA TU SERVIDOR

Basado en tus datos de email, configura así:

```env
# Configuración para tu hosting
SMTP_HOST=mail.rejestracjahiszpania.com
SMTP_PORT=465  # Usa 465 para SSL o 587 para TLS
SMTP_USER=info@rejestracjahiszpania.com
SMTP_PASS=TU_CONTRASEÑA_DEL_HOSTING_AQUI
SMTP_FROM=info@rejestracjahiszpania.com

# Email donde recibirás las notificaciones
ADMIN_EMAIL=info@rejestracjahiszpania.com
```

## 📧 **¿CUÁL ES TU CONTRASEÑA Y Puerto?**

Para completar la configuración necesito:
✅ **Contraseña del email** (del panel de hosting)
🔸 **Puerto** - Normalmente 465 (SSL) o 587 (TLS)
🚀 **¿Qué puerto uso?** 465 es el más común en hosting

Una vez me des esta info, el sistema estará **100% automático** y listo para producción!

---

## 📂 CONFIGURACIÓN DE GOOGLE CLOUD STORAGE (Para fotos automáticas)

### **1. Instala dependencias adicionales:**
```bash
npm install @google-cloud/storage uuid
```

### **2. Ve a Google Cloud Console:**
```
https://console.cloud.google.com
```
- Crea proyecto nuevo: `registro-hiszpania`

### **3. Activa servicios:**
- Ve a "APIs y servicios" → "Biblioteca"
- Busca **"Cloud Storage"** → Activa la API
- Busca **"Cloud Storage JSON API"** → Activa

### **4. Crea un bucket:**
- Ve a "Cloud Storage" → "Buckets"
- **Crear bucket**: `registro-hiszpania-uploads`
- Tipo: **Estándar**
- **Habilita acceso público** para obtener objetos

### **5. Credenciales:**
- Ve a "APIs y servicios" → "Credenciales"
- **Crear credenciales** → "Cuenta de servicio"
- **Roles requeridos:**
  - `Storage Object Admin`
  - `Storage Object Creator`
- **Descarga** el archivo JSON de credenciales
- Nombralo `gcp-service-account.json` en tu proyecto

### **6. Variables de entorno para Vercel:**
Agrega en **Environment Variables** de Vercel:
```
# Credenciales de Google Cloud
GCP_PROJECT_ID=tu-project-id-de-google-cloud
GCP_EMAIL=tu-servicio-account@tu-proyecto-xxx.iam.gserviceaccount.com
GCP_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nTU_CLAVE_PRIVADA_COMPLETA\n-----END PRIVATE KEY-----\n"
GCP_BUCKET_NAME=registro-hiszpania-uploads

# Variables de email
SMTP_HOST=mail.rejestracjahiszpania.com
SMTP_PORT=465
SMTP_USER=info@rejestracjahiszpania.com
SMTP_PASS=Kocham647
SMTP_FROM=info@rejestracjahiszpania.com
ADMIN_EMAIL=info@rejestracjahiszpania.com
```

### **EFECTO FINAL:**
- ✅ Cliente sube fotos por formulario
- ✅ Fotos se almacenan automáticamente en Google Cloud
- ✅ Email incluye enlaces de descarga únicos
- ✅ Usuario puede descargar fotos desde su email por 30 días
- ✅ Sistema 100% automático sin intervención manual

## 💰 **COSTOS:**
- **5GB gratis** al mes (suficiente para 500+ clientes)
- **$0.023/GB** encima del límite
- Email gratuito incluido

**¿Quieres implementar esto o prefieres esperar un poco más?** 🚀