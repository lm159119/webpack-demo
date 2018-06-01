const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry:  './app/index.js', // 入口文件
    output: {
      path: path.resolve(__dirname, 'build/js'), 
      filename: "bundle.js" 
    },
 module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader",
          options: { importLoaders: 1 }
        }, {
          loader: 'postcss-loader'
        },{
          loader: "sass-loader"
        }]
      }
    ]
  }
};