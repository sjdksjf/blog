/*
Express 是一个基于 Node.js 平台的极简、灵活的 web 应用开发框架，它提供一系列强大的特性，帮助你创建各种 Web 和移动设备应用。
API
丰富的 HTTP 快捷方法和任意排列组合的 Connect 中间件，让你创建健壮、友好的 API 变得既快速又简单。
性能
Express 不对 Node.js 已有的特性进行二次抽象，我们只是在它之上扩展了 Web 应用所需的基本功能。
*/
//1.安装express和swig包Web 应用
const express = require('express');
const swig = require('swig');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const Cookies = require('cookies');
const session = require('express-session');
const MongoStore = require("connect-mongo")(session);



//启动数据库
mongoose.connect('mongodb://localhost:27017/blog',{ useNewUrlParser: true });

var db = mongoose.connection;

db.on('error',(err)=>{
      //console.log("err add...");
      throw err
});

db.once('open',()=>{
  console.log("DB........")

});


const app = express();

//默认是ture ，写入的HTML文件不会随刷新加入。测试时设false刷新加入
//配置模板
swig.setDefaults({
  cache: false
});
app.engine('html',swig.renderFile);
app.set('views','./views');
app.set('view engine','html');

//配置静态资源
app.use(express.static('public'));

//设置cookie的中间件，保存用户信息
/*
app.use((req,res,next)=>{
     req.cookies = new Cookies(req,res);
      
     req.userInfo = {}; 

     let userInfo = req.cookies.get('userInfo');
      if(userInfo){
          try{
             req.userInfo = JSON.parse(userInfo);
          }catch(e){
            
          }
      } 


    next();
})
*/
app.use(session({
  //session对cookie中的用户信息进行加密操作


  //设置cookie名称
  name:'wikut',
  //用它来对session cookie签名，防止篡改
  secret:'dsffsdsf',
  //强制保存session即使它并没有变化
  resave: true,
  //强制将未初始化的session存储
  saveUninitialized: true,
  //如果为true,则每次请求都更新cookie的过期时间
  rolling:true,
  //cookie过期时间 1天
  cookie:{maxAge:1000*60*60*24},    
  //设置session存储在数据库中
  store:new MongoStore({ mongooseConnection: mongoose.connection })   

}))


app.use((req,res,next)=>{

       
    req.userInfo = req.session.userInfo || {} ;

     next();
})

//添加处理post请求的中间件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//处理路由
//1.找到对应路由文件
app.use("/",require('./routes/index.js'));
app.use("/user",require('./routes/user.js'));
app.use("/admin",require('./routes/admin.js'));
app.use("/category",require('./routes/category.js'));
app.use("/article",require('./routes/article.js'));

app.listen(3000,()=>{
	console.log('app is running on 127.0.0.1:3000');
})