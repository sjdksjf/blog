const express = require('express');
const app = express();

app.use(express.static('02-publi'));

/*
app.get('/',(req,res)=>{
    res.send('<h1>hello 你好</h1>');
})
*/

//模块化第一个参数引入JS名字，第二个文件地址
app.use('/blog',require('./routes/blog.js'));

app.listen(3000,'127.0.0.1',()=>{
	console.log('app is running on 127.0.0.1:3000');
})


