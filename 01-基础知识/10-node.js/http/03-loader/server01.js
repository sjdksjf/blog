
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const http = require('http');
const util = require('util');
const server = http.createServer((req,res)=>{
	let  pathName = req.url;
	console.log(req.url);
      if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
		    // parse a file upload
		    var form = new formidable.IncomingForm();
		       form.uploadDir = "/node";

		    form.parse(req, function(err, fields, files) {
		      res.writeHead(200, {'content-type': 'text/plain'});
		      res.write('received upload:\n\n');
		      res.end(util.inspect({fields: fields, files: files}));
		    });

		  
		  }
    	
     
     })
	


server.listen(3000,'127.0.0.1',()=>{
	console.log('server running at 127.0.0.1');
})