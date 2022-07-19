const path = require("path");
module.exports = {
  mode: "none",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    devMiddleware: {
      publicPath: "/assets/",
    },
  },
};
