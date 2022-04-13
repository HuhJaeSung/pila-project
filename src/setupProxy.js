const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://naveropenapi.apigw.ntruss.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/api/": "/",
      },
    })
  );
  app.use(
    "/search",
    createProxyMiddleware({
      target: "https://openapi.naver.com/",
      changeOrigin: true,
      pathRewrite: {
        "^/search/": "/",
      },
    })
  );
};
