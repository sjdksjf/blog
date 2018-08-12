const http = require('http');
 
const url = require('url');
const querystring = require('querystring')
 
const server = http.createServer((req,res)=>{
     
    console.log(req.url);//path
    console.log(req.method);
     
    if(req.method.toUpperCase() === 'POST'){
        let body = '';
        req.on('data',(chunk)=>{
            body += chunk;
        });
 
        req.on('end',()=>{
            // console.log(body);
            let obj = querystring.parse(body);//把字符串转化为对象
            console.log(obj);//可以拿到对象上属性
 
            res.setHeader('Content-Type', 'text/html;charset=UTF-8');
            res.end('<h1>hello 你好</h1>');       
        })      
    }
 
 
 
 
});
 
server.listen(3000,'127.0.0.1',()=>{
    console.log('server running at 127.0.0.1:3000');
});