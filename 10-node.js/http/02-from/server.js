
const http = require('http');
const url  = require('url');
const server = http.createServer((req,res)=>{

	res.setHeader('Content-Type','text/html;charset=UTF-8');

	const myURL = url.parse(req.url,true);
	let buost = '';
	req.on('data',(chunk)=>{
		buost += chunk;
		console.log(buost);
	});
	req.on('end',()=>{
		console.log(buost);
		console.log('页面走丢了');
	});

	console.log(myURL.query);
	//res.write('hello'); 
	res.end('ok');
})

server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})