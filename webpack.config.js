const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');



const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  entry: {
    'index': PATHS.source + '/pages/index/index.js',
    'works': PATHS.source + '/pages/works/works.js',
    'about': PATHS.source + '/pages/about/about.js',
    'blog': PATHS.source + '/pages/blog/blog.js',

  },
  output: {
    path: PATHS.build,
    filename: './js/[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index', 'common'],
      template: PATHS.source + '/pages/index/index.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      chunks: ['blog', 'common'],
      template: PATHS.source + '/pages/blog/blog.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      chunks: ['about', 'common'],
      template: PATHS.source + '/pages/about/about.pug',
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      chunks: ['works', 'common'],
      template: PATHS.source + '/pages/works/works.pug',
    }),
    new CleanWebpackPlugin('build'),
    new ExtractTextPlugin('./css/[name].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: {removeAll: true } },
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new UglifyJSPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true,
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          publicPath: '../scss/',
          use: ['css-loader','sass-loader'],
        }),
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
          test: /\.js$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          options: {
              fix: true,
          },
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'file-loader',
        options: {
            name: '[name].[ext]',
            publicPath: '.',
            outputPath: './img/'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader : 'file-loader',
      },
    ],
  },
};
