const path = require("path");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devtool: "source-map",
  entry: "./electron/preload.ts",
  target: "electron-preload",
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "preload.js",
  },
  plugins: [
    new ESLintPlugin({
      extensions: ["js", "ts", "jsx", "tsx"],
    }),
  ],
};
