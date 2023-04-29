require('dotenv').config();
const http = require('http');
const app = require('./app');
const PORT = process.env.PORT_DEV || 8000;
const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log(`App running on PORT ${PORT}...`);
  });
}
startServer();
