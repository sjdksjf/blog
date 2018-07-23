
const fs = require('fs');

//打开文件
fs.openSync('001.txt','r');
//写入文件
fs.writeSync('aaa','w');
//保存并推出
fs.closeSync(fd)