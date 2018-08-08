
const Router = require('express').Router;
const UserModel = require('../models/user.js');

const router = Router();

//权限设置
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.end('<h2>请使用管理员账号管理</h2>')
	}
})

//获取管理员页面
router.get("/",(req,res)=>{
    res.render('admin/category_list',{
         userInfo:req.userInfo
    }); 

})
/*
//处理添加请求
router.post("/add",(req,res)=>{

  console.log(req.body);

})
*/





 module.exports = router;






