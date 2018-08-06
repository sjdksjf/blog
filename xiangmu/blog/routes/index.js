
const Router = require('express').Router;
//const WishModel = require('../models/wish.js');
const router = Router();

router.get('/',(req,res)=>{
	//去默认文件夹找main/index的html
    res.render('main/index',{
        userInfo:req.userInfo
    });  
	
})


module.exports = router;