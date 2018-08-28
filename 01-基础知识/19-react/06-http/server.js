/*
* @Author: TomChen
* @Date:   2018-07-26 16:08:46
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 09:12:55
*/
const http = require('http');


const server = http.createServer((req,res)=>{
	
	res.setHeader("Access-Control-Allow-Origin","*");
	let data = ['learn react','learn nodejs']
	
	res.end(JSON.stringify(data));
});

server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on 127.0.0.1:3000');
})