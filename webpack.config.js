const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');

const templateFiles = glob.sync(`./src/**/*.html`);
const htmlPlugins = templateFiles.map((filePath) => new HtmlWebpackPlugin({
  filename: filePath.split(path.sep).pop(),
  template: filePath
}));

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts.js',
  },
  // optimization: {
  //   minimize: false,
  // },
  // devtool: false,
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
    new MiniCssExtractPlugin({ filename: 'styles.css' }),
    ...htmlPlugins
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, 'src'),
        exclude: /unused\//,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        exclude: /unused\//,
        type: 'asset/resource',
        generator: { filename: 'public/images/[name][ext]' },
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        exclude: /unused\//,
        type: 'asset/resource',
        generator: { filename: 'public/fonts/[name][ext]' },
      },
      {
        test: /\.(mp4)$/,
        exclude: /unused\//,
        type: 'asset/resource',
        generator: { filename: 'public/videos/[name][ext]' },
      }
    ],
  },
}