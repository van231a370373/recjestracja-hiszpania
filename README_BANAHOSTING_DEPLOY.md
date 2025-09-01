# 🚀 DESPLIEGUE EN BANAHOSTING - DOCUMENTACIÓN COMPLETA

## 📋 PASOS PARA SUBIR TU PROYECTO NEXT.JS

### **PASO 1: Preparar Build de Producción**

En tu computadora antes de subir:

```bash
# 1. instalar dependencias (si no están instaladas)
npm install nodemailer @types/nodemailer

# 2. crear build de producción
npm run build

# 3. verificar que se creó la carpeta .next/
dir .next
# Debe mostrar: static/ server/ ...
```

### **PASO 2: Preparar Archivos para Subida**

```bash
# Excluye estas carpetas/archivos (NO subir):
node_modules/      # demasiado grande
.next/             # se genera en servidor
.env.local         # sensible - subir manualmente
```

### **PASO 3: Subida a BanaHosting**

#### **OPCION A: FTP (Sencillo)**
1. Ve al panel de BanaHosting → **ARCHIVOS** → **Gestor de Archivos**
2. Crea carpeta `app_registro` en `public_html/`
3. Sube TODOS los archivos del proyecto EXCEPTO:
   - ❌ `node_modules/`
   - ❌ `.next/`
   - ❌ `.git/`
   - ❌ `.env.local`

#### **OPCION B: Git (Más Profesional)**
```bash
# En tu repositorio Git
git add .
git commit -m "Ready for Banahosting deploy"
git push origin main

# En BanaHosting → SSH Terminal:
cd /home/tu_usuario/public_html/
mkdir app_registro
cd app_registro
git clone TU_REPOSITORIO ./
```

### **PASO 4: Configurar en Servidor SSH**

Conecta por SSH desde panel de BanaHosting:

```bash
# 1. Ir al directorio de la app
cd /home/tu_usuario/public_html/app_registro

# 2. Instalar dependencias
npm install --production

# 3. Instalar las necesarias (si no instaló todas)
npm install nodemailer @types/nodemailer

# 4. Crear archivo de variables de entorno
nano .env.local
```

### **PASO 5: Configurar Variables de Entorno**

Crea `.env.local` con:

```env
# Copia estas líneas exactas:
SMTP_HOST=mail.rejestracjahiszpania.com
SMTP_PORT=465
SMTP_USER=info@rejestracjahiszpania.com
SMTP_PASS=Kocham647
SMTP_FROM=info@rejestracjahiszpania.com
ADMIN_EMAIL=info@rejestracjahiszpania.com

# Configurar puerto para Next.js (usualmente 3000)
PORT=3001
```

### **PASO 6: Generar Build en Servidor**

```bash
# Generar build (solo en servidor)
npm run build
```

### **PASO 7: Iniciar la Aplicación**

#### **OPCION A: PM2 (Recomendado para producción)**
```bash
# Instalar PM2 si no está
npm install -g pm2

# Iniciar aplicación
pm2 start npm --name "app_registro" -- start

# Guardar configuración
pm2 startup
pm2 save

# Verificar que funciona
pm2 status
```

#### **OPCION B: Simply Node (directo)**
```bash
# Iniciar normalmente
npm start
```

### **PASO 8: Configurar Dominio/Subdominio**

En panel de BanaHosting:
1. **DOMINIOS** → **Subdominios**
2. Crear `registro.rejestracjahiszpania.com`
3. Apuntar a: `/home/tu_usuario/public_html/app_registro`
4. O crear carpeta en dominio principal

### **PASO 9: Probar**

1. Ve a `registro.rejestracjahiszpania.com`
2. Envía un formulario de prueba
3. ✅ Debes recibir emails reales!

---

## 🆘 **SOLUCIÓN DE PROBLEMAS:**

### **Mi página no carga:**
```bash
# Revisar logs
pm2 logs app_registro

# Reinicar
pm2 restart app_registro
```

### **Error de puerto:**
- Asegurate que el puerto configurado es correcto
- En BanaHosting puede necesitar configuración específica

### **No envía emails:**
- Revisar el archivo `.env.local` esté bien configurado
- Revisar que `SMTP_PASS=Kocham647` (sin comillas)

### **Error "build not found":**
```bash
# Hacer rebuild en servidor
npm run build
pm2 restart app_registro
```

### **502 / Error del servidor:**
- Esperar 2-3 minutos (primera compilación)
- Revisar que Node.js versión ≥ 18.17.0
- Revisar límites de memoria

---

## ✅ **LISTA DE VERIFICACIÓN PRE-SUBIDA:**

- ✅ `npm run build` exitoso localmente
- ✅ Email configurado correctamente
- ✅ Puertos acordados con hosting
- ✅ Todos archivos subidos (excepto node_modules/.next)
- ✅ `.env.local` creado/creado en servidor

¡Una vez subido, funciona automáticamente sin mantenimiento! 🚀