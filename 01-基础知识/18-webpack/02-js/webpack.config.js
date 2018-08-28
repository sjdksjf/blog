const path = require('path');

module.exports = {
  //入口文件
  entry: './src/index.js',
  output: {
  	module:'production',
    //出口文件
    filename:'main.js',  
  	//出口文件路径
    path: path.resolve(__dirname, 'dist')
  }
};