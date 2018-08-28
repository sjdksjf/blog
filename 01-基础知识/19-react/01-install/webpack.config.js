
var HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const path = require('path');

module.exports = {
  //测试development 开发 production
  mode:'development',
  //入口文件地址  
  entry: {
          index: './src/index/index.js'
      },
  output: {
    //出口文件名称
    filename: '[name].[chunkhash].bundle.js',
    //出口文件路径
    path: path.resolve(__dirname, 'dist'),
    
    },
   module: {
    rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader'
            ]
          }
          
        ]
     },
     plugins: [
       new CleanWebpackPlugin(['dist']),
       new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/html/index.html',
        inject:true,
        hash:true
       })
      ],
      devServer: {
                  contentBase: './dist',
                  compress: true,
                  port: 9000
                }   
};