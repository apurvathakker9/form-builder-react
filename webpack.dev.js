const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const webpack = require("webpack");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  output: {
    path: path.join(__dirname, "public/dist"),
    filename: `bundle.js`,
    publicPath: '/'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
    new HtmlWebpackPlugin({
      title: "Form Builder",
      template: "./public/index.html",
      minify: false,
    }),
    new Dotenv({
      path: "./.env.localhost",
      safe: true,
      allowEmptyValues: true,
    }), //in order for environment variable to work
  ],
});
