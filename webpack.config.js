const path = require('path');
const glob = require('glob');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templateFiles = glob.sync(`./src/**/*.html`);
const htmlPlugins = templateFiles.map((filePath) => {
  let chunks = ["main"];
  const filename = filePath.split(path.sep).pop();
  if(filename === "index.html") {
    chunks.push("home");
  } else {
    chunks.push(filename.split(".")[0]);
  }
  
  return new HtmlWebpackPlugin({
    filename: filename,
    template: filePath,
    chunks: chunks
  }
)});

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', 
    home: './src/scripts/pages/home.js', 
    flights: './src/scripts/pages/flights.js', 
    journey: './src/scripts/pages/journey.js', 
    book: './src/scripts/pages/book.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'scripts/[name].bundle.js',
  },
  optimization: {
    minimize: true,
  },
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
    new MiniCssExtractPlugin({ 
      filename: 'styles/[name].bundle.css',
    }),
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
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
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