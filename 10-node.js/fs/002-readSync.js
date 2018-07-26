 //1.获取fs
 const fs =require('fs');
 //2.打开文件，第一个参数文件地址，第二个读文件‘r’；
 let fd = fs.openSync('./001.txt','r');
 //3.调用buffer
 let buf = Buffer.alloc(100);
 console.log(buf);
 //读文件，第一个参数fd，第二个buf，第三，四个从那开始和结束。第五个从哪开始读
 fs.readSync(fd,buf,0,100,0);
 console.log(buf);
 //保存并推出  
 fs.closeSync(fd);