const path = require('path');

module.exports = {
  //测试development 开发 production
  mode:'development',
  //入口文件地址	
  entry: './src/index.js',
  output: {
  	//出口文件名称
    filename: 'bundle.js',
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
		      },
		      {
		        test:/\.(png|jpg|gif)$/,
		        use:[
		          'url-loader'
		        ]
		      }
		    ]
     }  
};