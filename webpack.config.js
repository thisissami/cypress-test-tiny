
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: `${__dirname}/src`,
  resolve: {
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}/dist`,
    filename: 'test.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(css|less)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    ]
  },
  plugins: [
    // The HtmlWebpackPlugin works seemlessly with HotModuleReplacement.
    // See https://www.npmjs.com/package/html-webpack-plugin
    // See also https://stackoverflow.com/a/33519539/1108891
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  mode: 'development',
  devServer: {
    contentBase: `${__dirname}/dist`,
    port: 8765,
    hotOnly: true,
    // lets any URL work
    historyApiFallback: true
  },
};
