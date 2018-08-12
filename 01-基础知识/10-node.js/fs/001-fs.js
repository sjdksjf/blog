
const fs = require('fs');

//打开文件
let fd = fs.openSync('./001.txt','a');
//写入文件
fs.writeSync(fd,'aaa');
//保存并推出
fs.closeSync(fd);