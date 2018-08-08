
const Router = require('express').Router;

const router = Router();

router.get('/',(req,res,next)=>{
	console.log("TOP:: 1");
	next();
	console.log("TGL:: 1");
})
router.get('/',(req,res,next)=>{
	console.log("TOP:: 2");
	next();
	console.log("TGL:: 2");
})
router.get('/',(req,res,next)=>{
	console.log("TOP:: 3");
	next();
	console.log("TGL:: 3");
})
router.get('/',(req,res,next)=>{
	res.send('请求结束')
})

module.exports =router;
