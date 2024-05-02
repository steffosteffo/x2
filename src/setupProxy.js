// src/setupProxy.js

/// OBS DETTA MÅSTE SKRIVAS I !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!C:\Dev\invoice-app-frontend> ($env:PORT = 5000) -and (npm start)
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Specify the endpoint you want to proxy
    createProxyMiddleware({
      target: 'http://localhost:5000', // Specify the target host (your backend server)
      changeOrigin: true, // Add this option to handle the target host's origin
    })
  );
};
