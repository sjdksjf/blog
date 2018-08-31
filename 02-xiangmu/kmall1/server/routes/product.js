const Router = require('express').Router; 
const path = require('path');
const fs = require('fs');   

const router = Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/product-image/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+path.extname(file.originalname))
  }
})

const upload = multer({ storage: storage });

//权限控制
router.use((req,res,next)=>{
	if(req.userInfo.isAdmin){
		next()
	}else{
		res.json({
			code: 10
		});
	}
})

router.post("/image",upload.single('file'),(req,res)=>{

	const loadPath = __dirname+'product/image'+req.file.filename;
	
		res.json({
			uploaded:true,
			url:loadPath
		})			
	

})

router.post("/details",upload.single('upload'),(req,res)=>{

	const loadPath = __dirname+'product/image'+req.file.filename;
	
		res.json({
			  "success": true,
			  "msg": "上传成功", 
			  "file_path": loadPath
		})			
	

})


module.exports = router;