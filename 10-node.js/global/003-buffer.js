//废弃的
/*
const buf = new Buffer('hello');
console.log(buf);
*/
/*
 1. 8bit= 1B(字节);
 2. 1KB=1028B , 1MB=1024KB ,1GB =1024MB.

*/
//最新用法
const buf =Buffer.from('hello');
const buf1 =Buffer.from('你好');
const buf2 =Buffer.from(10);
console.log(buf);
console.log(buf1);
console.log(buf2);
