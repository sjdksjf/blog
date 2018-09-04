const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const CleanWebpackPlugin = require('clean-webpack-plugin');

//单独对css文件打包
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const ShowHtmlWebpack=(name)=>({
      template:'./src/view/'+name+'.html',
      filename:name+'.html',
      chunks:['common',name]
})

module.exports = {
  mode:'development',

  entry: {
    //入口js文件的名字和对应的路径
    'common':'./src/pages/common/index.js',
    'index':'./src/pages/index/index.js',
    'user-login':'./src/pages/user-login/index.js',
  },  
  //引入额外的模块
  // externals: {
  //  jquery: "window.jQuery",
  // },
  output: {
    //[name]为entry入口文件的前缀名(index,login)
    //输出的js为js文件夹下的index.js,login.js
    filename: 'js/[name].js',
    publicPath:'/',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    alias: {
      'pages': path.resolve(__dirname, "./src/pages"),
      'serice': path.resolve(__dirname, "./src/serice/user"),
      'layout': path.resolve(__dirname, "./src/common/layout"),
      'common': path.resolve(__dirname, "./src/common"),
      'node_modules': path.resolve(__dirname, "./node_modules"),
    }
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        //加载css 的配置文件
        // use: [ 'style-loader','css-loader']

        //单独打包css文件的配置
        use: [ 
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader"
        ] 
      },
      {
        //加载图片的配置文件
        test: /\.(png|jpg|gif|ttf|woff2|woff|eot|svg)\??.*$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:100, //小于该值打包成base64
              name:'resource/[name].[ext]',//文件打包后的目录
            }
          }
        ] 
      },
      {
//安装react react-dom
//安装 babel npm i babel-core babel-loader babel-preset-env babel-preset-react --save-dev
//添加webpack配置loader
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: { 
          loader: 'babel-loader',
          options: {
            //配置ES6扩展 babel
            presets: ['env','es2015','stage-3'],
            //antd按需加载
            plugins: [
              ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]
            ]
          }
        }
      }
    ]
  },

  plugins:[
  	// new HtmlWebpackPlugin({
   //    //入口html的路径
	  // 	template:'./src/view/index.html',
   //    //输出HTML的名字
	  // 	filename:'index.html',
   //    //引用js的名字
        // inject:'head'//脚本写在那个标签里,默认是true(在body结束后)
        // hash:true//给生成的js/css文件添加一个唯一的hash
	  // 	chunks:['common','index']
	  // }),
   //  new HtmlWebpackPlugin({
   //    template:'./src/view/user-login.html',
   //    filename:'user-login.html',
   //    chunks:['common','user-login']
   //  }),
    new HtmlWebpackPlugin(ShowHtmlWebpack('index')),
    new HtmlWebpackPlugin(ShowHtmlWebpack('user-login')),
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    })
  ],

  devServer:{
//webpack-dev-server提供了一个简单的基于node express的web服务器,能够实时重新加载页面
  	contentBase:'./dist',
    //启用的端口
    port:3002,
    proxy:{
      '/user':{
         target:'http://localhost:3000',
         securt:true
      }
    }
  }
};