const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Christy & Rob's Wedding",
      template: './src/pages/index.html'
    }),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath:'./'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: 8080
  },
  module: {
     rules: [
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
       {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader',
          ],
        },
     ],
   },
};
