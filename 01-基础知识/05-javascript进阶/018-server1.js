
var http =require('http');
var fs =require('fs');
var server = http.createServer(function(req,res){
  res.setHeader("content-Type","text/html;charset=UTF-8")
  //res.end('Hello nodejs');
   console.log(req.url);
   var filePath='./'+req.url;
   fs.readFile(filePath,function(err,date){
   	    if(err){
            res.statusCode = 404;
            res.end('file not fpund');
   	    }else{
   	    	res.statusCode = 200;
   	    	res.end(date);
   	    }
   })
});
 server.listen(3000,'127.0.0.1',function(){
 	console.log('server running at http://127.0.0.1:3000');
 })