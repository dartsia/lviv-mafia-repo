const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3001', // адреса зовнішнього сервера
    changeOrigin: true,
    pathRewrite: {
      '^/': '', // Якщо запити мають префікс /api, ви можете його вилучити
    },
  }));
};
