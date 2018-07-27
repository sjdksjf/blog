
const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	let  pathName = req.url;
	console.log(req.url);
    	if(pathName === '/index.html'){
    	
    		if(!err){
    			fs.readFile('./index.html',(err,data)=>{
	    		res.setHeader('Content-Type','text/html;charset=UTF-8'); 
				res.end(data);
			   })
    		}else{
                fs.readFile('./index.html',(err,data)=>{
	    		res.setHeader('Content-Type','text/html;charset=UTF-8'); 
				res.end('页面走丢了');
			   })
    		}
           
    	}

     
     });
    /*
	res.setHeader('Content-Type','text/html;charset=UTF-8');
	//res.write('hello'); 
	res.end('<h1>hello 你好<h1>');
	*/


server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})