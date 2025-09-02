# 🚀 CONFIGURACIÓN DEL SERVIDOR - cPANEL

## ⚠️ **PROBLEMA RESUELTO**

El error que te dieron en soporte fue porque configuraste **"npm"** como archivo de inicio en **Aplicaciones Node.js** → **Configurar Aplicación**. Esto no funcionaba porque:

- ❌ `npm` no es un archivo - es un comando
- ✅ Debes usar `app.js` (que creamos específicamente para cPanel)

## 🔧 **PASOS PARA CORREGIR cPanel**

### **PASO 1: Acceder a cPanel**
1. Ve a tu panel de cPanel
2. Busca **"Aplicaciones Node.js"** (o **"Setup Node.js App"** en inglés)

### **PASO 2: Configurar la Aplicación**
1. **Crear Nueva Aplicación** o **Editar** la existente
2. Configura así:

```
🔧 CONFIGURACIÓN DE cPanel:

📁 Directorio de aplicación: /home/tu_usuario/public_html/registro
🎯 Archivo de inicio: app.js
🌐 URL de aplicación: http://registro.rejestracjahiszpania.com
🔌 Puerto: 3001
🟢 Estado: ✓ Ejecutándose
📦 Versión de Node.js: ✓ 18.20.8 (autodetectada)
```

### **PASO 3: Reiniciar la Aplicación**
Después de configurar correctamente:
1. Presiona **"Guardar"**
2. Presiona **"Reiniciar"**
3. Espera a que aparezca ✅ **"Ejecutándose"** en verde

### **PASO 4: Verificar Logs**
Si algo falla:
1. Ve a **"Logs"** en la aplicación
2. Busca errores específicos
3. Usa la información para solucionar problemas

## 📋 **LISTA DE VERIFICACIÓN FINAL**

- ✅ Archivo de inicio configurado como `app.js`
- ✅ Puerto configurado en 3001
- ✅ Aplicación mostrando "Ejecutándose"
- ✅ URL apuntando al dominio correcto

## 🆘 **SOLUCIÓN DE PROBLEMAS**

### **Si vuelve el error "Cannot find module '/npm'"**
- ❌ Cambiaron el archivo de inicio de `app.js` a `npm`
- ✅ Regresalo a `app.js`

### **Si la aplicación no inicia**
1. Verifica que `NODE_ENV=production` esté en el `.env`
2. Verifica que la carpeta `.next` existe y está completa
3. Verifica que `app.js` existe en el directorio root

### **Si no puedes acceder a la aplicación**
- Verifica que el dominio esté apuntando correctamente
- Espera 5-10 minutos para propagación de DNS
- Limpia caché del navegador

## 📞 **CONTACTO**

Si tienes problemas, envíanos:
- Screenshot del panel de cPanel → Configuración Node.js
- Logs de la aplicación
- Tu configuración actual

¡Con `app.js` como punto de entrada, funcionará perfectamente! 🚀