// Archivo de entrada principal para cPanel
// Equivalente al server.js pero simplificado para cPanel

const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({
  dev: false, // Forzar modo producción
  hostname: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3001
});

const handle = app.getRequestHandler();

console.log('🚀 Iniciando aplicación Next.js en cPanel...');

app.prepare().then(() => {
  console.log('✅ Aplicación preparada correctamente');

  const server = createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  });

  const PORT = process.env.PORT || 3001;
  server.listen(PORT, '0.0.0.0', (err) => {
    if (err) throw err;
    console.log(`🌐 Aplicación corriendo en puerto ${PORT}`);
  });

}).catch((err) => {
  console.error('❌ Error al preparar la aplicación:', err);
  process.exit(1);
});