const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const templateFiles = glob.sync(`./src/**/*.html`);
const htmlPlugins = templateFiles.map((filePath) => new HtmlWebpackPlugin({
	filename: filePath.split(path.sep).pop(),
	template: filePath,
}));

const MODE = 'development';

module.exports = {
  mode: MODE,
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.js',
  },
  optimization: {
    minimize: false,
  },
  devtool: false,
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'src'),
    },
    port: 5500,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
		new MiniCssExtractPlugin({filename: 'styles.css'}),
		...htmlPlugins
	],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        use: [ 
					MiniCssExtractPlugin.loader, 
					'css-loader', 
					'postcss-loader'
				],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]',
        },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },
}