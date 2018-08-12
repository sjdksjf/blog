
const http = require('http');
const url  = require('url');
const server = http.createServer((req,res)=>{
    //接收前台发送的数据
	res.setHeader('Content-Type','text/html;charset=UTF-8');

	const myURL = url.parse(req.url,true);//把前台发送的数据转化为对象拿到相应的值

	console.log(myURL.query); //获取一个对象，里面是前台传回的值
	console.log(myURL.query.name); //获取对象里面的name属性
	res.end('ok');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})