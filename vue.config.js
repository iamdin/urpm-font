module.exports = {
  // 文件打包后 在index.html中引用的位置，与 process.env.BASE_URL相同
  publicPath: process.env.NODE_ENV === "production" ? "/urpm-font/" : "/",
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugins.delete("prefetch");
  },
  productionSourceMap: false,
  css: {
    sourceMap: false
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8088",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
