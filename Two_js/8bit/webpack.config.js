const NodemonPlugin = require("nodemon-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  watch: true,
  watchOptions: {
    aggregateTimeout: 20,
    poll: 1000,
    ignored: '**/node_modules',
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new NodemonPlugin()],
};
