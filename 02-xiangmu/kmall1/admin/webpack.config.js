const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const publicPath ='/' 
//导出配置
module.exports = {
	//模式
	mode:'development',
	//指定入口文件
	entry:'./src/index.js',	
	//指定出口
	output:{
		//出口文件名称
		filename:'bundle.js',
    publicPath:publicPath,
		//出口文件存储路径
		path:path.resolve(__dirname,'dist')
	},
  resolve: {
    alias: {
      pages: path.resolve(__dirname, 'src/pages/'),
      api: path.resolve(__dirname, 'src/api/'),
      util: path.resolve(__dirname, 'src/util/'),
      common: path.resolve(__dirname, 'src/common/'),
      error:  path.resolve(__dirname, 'common/error-page'),
    }
  }, 
	//配置loader
  module: {
    rules: [
    	//处理css文档的loader
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {   
             }
          },
          "css-loader"
        ]
      },
      //处理图片loader
	    {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader'
          }
        ]
    	},
      {
        test:/\.js$/,
        exclude: /(node_modules)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env','es2015','react','stage-3'],
                //antd 按需加载
                plugins: [
                  ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] 
                ]                
            }
        }               
      }              
    ]
  },
  plugins: [
  	new HtmlWebpackPlugin({
  		template:'./src/index.html',
  		filename:'index.html',
  		inject:true,
  		hash:true
  	}), 
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  	new CleanWebpackPlugin(['dist'])
  ],
  devServer: {
    contentBase: './dist',
    port:3001,
    historyApiFallback:true
  }
}