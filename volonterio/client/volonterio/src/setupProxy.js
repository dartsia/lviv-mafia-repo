const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:3001', // Вкажіть адресу вашого зовнішнього сервера
    changeOrigin: true,
    pathRewrite: {
      '^/': '', // Якщо ваші запити мають префікс /api, ви можете його вилучити
    },
  }));
};
