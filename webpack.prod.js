const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PACKAGE = require("./package.json");
const version = PACKAGE.version;
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
  devtool: "source-map",
  mode: "production",
  output: {
    path: path.join(__dirname, "build"),
    filename: `bundle-${version}.js`,
    publicPath: '/'
  },
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
  plugins: [
    new Dotenv({
      path: "./.env.production",
      safe: true,
      allowEmptyValues: true,
    }),
    new HtmlWebpackPlugin({
      title: "Form Builder",
      template: "./public/index.html",
      minify: false,
    }),
  ],
});