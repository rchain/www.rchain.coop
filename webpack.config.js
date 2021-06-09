const path = require("path");

module.exports = {
  entry: "./navAndFooter/index.js",
  output: {
    filename: "navAndFooter.js",
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
