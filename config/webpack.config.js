const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      title: "Christy & Rob's Wedding",
      template: 'src/pages/index.html'
    }),
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/',
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
        // Loads a SASS/SCSS file and compiles it to CSS
        test: /\.scss$/,
        use: [
          {
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
        ]
      },
       {
          test: /\.(woff(2)?|ttf|eot|svg|png|svg|jpg|gif)$/,
          options: {
            name: '[name].[ext]',
            outputPath: 'assets/',
            publicPath: '/assets/'
          },
          loader: 'file-loader',
        }
     ],
   },
};
