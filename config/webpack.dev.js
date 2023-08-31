const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const ForkTsChekerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  plugins: [
    new ForkTsChekerWebpackPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: false,
    }),
  ],
  devServer: {
    hot: true,
    host: "0.0.0.0",
    compress: true,
    historyApiFallback: true,
    open: true,
  },
});
