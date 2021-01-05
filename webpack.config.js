const path = require("path");

module.exports = {
  entry: "./nav/index.js",
  output: {
    filename: "nav.js",
    path: path.resolve(__dirname, "js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [],
  externals: {},
};
