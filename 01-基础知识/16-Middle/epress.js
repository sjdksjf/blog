const express = require('express');
const app = express();
//默认先去找根目录的index.html 

app.use(express.static('02-publi'));
/*
//虚拟路径
app.use('/express',express.static('02-publi'));
*/

//模块化第一个参数引入html名字，第二个文件地址

app.use('/blog',require('./routes/blog.js'));
app.use('/user',require('./routes/user.js'));

app.listen(3000,'127.0.0.1',()=>{
	console.log('app is running on 127.0.0.1:3000');
})


