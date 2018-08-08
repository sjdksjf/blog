const express = require('express');
let  app = express();

app.use(express.static('02-publi'));


app.get('/',(req,res)=>{
    res.send('<h1>hello 你好</h1>');
})

app.get('/',(req,res)=>{
	res.send('GET 请求')
})
app.post('/',(req,res)=>{
	res.send('post 请求')
})
app.delete('/',(req,res)=>{
	res.send('delete 请求')
})
app.put('/',(req,res)=>{
	res.send('put 请求')
})

//app.use(express.static('02-publi'));

app.listen(3000,'127.0.0.1',()=>{
	console.log('app is running on 127.0.0.1:3000');
})