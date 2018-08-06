//1.安装express和swig包
const express = require('express');
const swig = require('swig');
const app = express();
//默认是ture ，写入的HTML文件不会随刷新加入。测试时设false刷新加入
swig.setDefaults({
  cache: false
})

//1. 配置应用模板 
//第一个参数是模板名称,同时也是模板文件的扩展名
//第二个参数是解析模板的方法
app.engine('html',swig.renderFile);
//2.配置模板的存放目录
//第一参数必须是views
//第二个参数是模板存放的目录
app.set('views','./views');

app.set('view engine','html');

app.get('/',(req,res)=>{
    //4.渲染模板
    //第一个参数是相对于模板目录的文件
    //第二个参数是传递给模板的数据
    res.render('index',{
        title:'渊源阁',
        content:'六名将',
        obj:{
          name: 'Tom',
          age: 18  
        },
        name: 'K',
        arr:['Tom','Lio','Mike','Pik','Wiyel']
    })
})

app.get('/liot',(req,res)=>{
	res.render('liot',{
		title:"购物",
		content:'你要买什么'
	})
})

app.get('/user',(req,res)=>{
	res.render('user',{
		title:"游戏",
		content:'你要玩什么'
	})
})

app.listen(3000,'127.0.0.1',()=>{
	console.log('app is running on 127.0.0.1:3000');
})