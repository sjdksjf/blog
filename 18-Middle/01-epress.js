const express = require('express');
let  app = express();

//app.use(express.static('02-publi'));

app.use((req,res,next)=>{
	console.log("TOP:: 1");
	next();
	console.log("TGL:: 1");
})
app.use((req,res,next)=>{
	console.log("TOP:: 2");
	next();
	console.log("TGL:: 2");
})
app.use((req,res,next)=>{
	console.log("TOP:: 3");
	next();
	console.log("TGL:: 3");
})
app.get('/',(req,res)=>{
	res.send('请求结束');
})


app.listen(3000,'127.0.0.1',()=>{
	console.log('app is running on 127.0.0.1:3000');
})