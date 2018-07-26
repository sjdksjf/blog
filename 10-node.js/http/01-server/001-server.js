
const http = require('http');
const server = http.createServer((req,res)=>{
	// req 可读流 res 可写流
    console.log(req.url);
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	 console.log(req.url);
	//res.write('hello'); 
	res.end('<h1>hello 你好<h1>');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})