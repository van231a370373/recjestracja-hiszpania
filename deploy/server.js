const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

// Forzar modo producción para cPanel
const dev = false;
const hostname = '127.0.0.1';  // Cambiado a localhost
const port = process.env.PORT || 3000;  // Puerto por defecto 3000

console.log('🌐 Starting Next.js Application');
console.log(`🖥️ Host: ${hostname}`);
console.log(`🔌 Port: ${port}`);
console.log(`🏠 Environment: production`);

const app = next({ dev });  // Simplificado
const handle = app.getRequestHandler();

app.prepare().then(() => {
  console.log('🚀 Next.js app prepared successfully');

  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('❌ Error occurred handling request:', req.url, err);
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Internal Server Error', message: err.message }));
    }
  }).listen(port, (err) => {
    if (err) {
      console.error('❌ Failed to start server:', err);
      throw err;
    }
    console.log(`✅ Ready on http://${hostname}:${port}`);
    console.log(`🌍 Open your browser to http://localhost:${port} or your domain`);
  });
}).catch((err) => {
  console.error('❌ Failed to prepare Next.js app:', err);
  process.exit(1);
});
