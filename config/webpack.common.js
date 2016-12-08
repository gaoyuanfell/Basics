var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'rxjs': './src/rxjs.ts',
    'ng2': './src/ng2.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.(woff|woff2|ttf|eot|svg)$/,
        loader: 'file?name=static/font/[name].[ext]'
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/,
        loader: 'file?name=static/img/[name].[ext]'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'ng2', 'rxjs', 'vendor', 'polyfills'],
      chunksSortMode:'dependency'
    }),

    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};
