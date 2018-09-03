const Router = require('express').Router; 
const path = require('path');
const fs = require('fs');  
const ProductModel = require('../models/product.js');


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

//添加分类
router.post("/",(req,res)=>{
	       let body = req.body;
           console.log("aa",body)
			new ProductModel({
				category:body.category,
				describe:body.describe,
				name:body.name,
				price:body.price,
				stock:body.stock,
			})
			.save()
			.then((product)=>{
				if(product){
					 ProductModel
						.getPaginationProductes(page,{pid:pid})
						.then((result)=>{
							console.log(result.current)
							res.json({
								code:0,
								message:'添加分类成功',
								data:{
									current:result.page,
									total:result.total,
									pageSize:result.pageSize,
									list:result.list					
								}
							})	
						})					 				
					}else{
						res.json({
							code:10
						})
					}
					
			})
	.catch((e)=>{
		res.json({
		 	code:1,
		 	message:"添加分类失败,服务器端错误"
		})
	})
})

//编辑
router.put("/",(req,res)=>{
	        let body = req.body;
			let update ={
				category:body.category,
				describe:body.describe,
				name:body.name,
				price:body.price,
				stock:body.stock,

			}
			ProductModel
			.update({_id:body.id},update)
			.then((product)=>{
				if(product){
					 res.json({
								code:0,
								message:'编辑成功',
								data:{
									current:result.page,
									total:result.total,
									pageSize:result.pageSize,
									list:result.list					
								}
							})			 				
					}else{
						res.json({
							code:10
						})
					}
					
			})
	.catch((e)=>{
		res.json({
		 	code:1,
		 	message:"添加分类失败,服务器端错误"
		})
	})
})

//商品上下架
router.put("/updateStatus",(req,res)=>{
	       let body = req.body;

		    ProductModel
		    .update({_id:body.id},{status:body.status})
			.then((product)=>{
				if(product){
					 ProductModel
						.getPaginationProductes(body.page,{})
						.then((result)=>{
							res.json({
								code:0,
								message:'更新状态成功',
		
							})	
						})					 				
					}else{
						ProductModel
						.getPaginationProductes(body.page,{})
						.then((result)=>{
							console.log(result)
							res.json({
								code:1,
								message:'更新状态失败',
								data:{
									current:result.page,
									total:result.total,
									pageSize:result.pageSize,
									list:result.list					
								}
							})	
						})		
					}
					
			})
	.catch((e)=>{
		res.json({
		 	code:10,
		 	message:"添加分类失败,服务器端错误"
		})
	})
})


//获取分类
router.get("/",(req,res)=>{
	let page = req.query.page;
	
	if(page){
		ProductModel
		.getPaginationProductes(page)
		.then((result)=>{
			res.json({
				code:0,
				message:'获取分类成功',
				data:{
					current:result.page,
					total:result.total,
					pageSize:result.pageSize,
					list:result.list					
				}
			})	
		})
	}else{
		ProductModel.find("_id name pid order")
		.then((products)=>{
			res.json({
				code:0,
				data:products
			})	
		})
		.catch(e=>{
	 		res.json({
	 			code:1,
	 			message:"获取分类失败,服务器端错误"
	 		})		
		})		
	}

});
//获取商品信息
router.get("/details",(req,res)=>{
	let id = req.query.id;
	if(id){
		ProductModel
		.findById(id)
		.then((result)=>{
			console.log('aa',result)

		})
	}else{
		ProductModel.find("_id name pid order")
		.then((products)=>{
			res.json({
				code:0,
				data:products
			})	
		})
		.catch(e=>{
	 		res.json({
	 			code:1,
	 			message:"获取商品失败,服务器端错误"
	 		})		
		})		
	}

});

//获取搜索商品信息
router.get("/searchForGoods",(req,res)=>{
	let keyword = req.query.keyword;
	let page = req.query.page || 1;
		ProductModel
		.getPaginationProductes(page,{
			name:{$regex:new RegExp(keyword,'i')}
		})
		.then((result)=>{
			res.json({
				code:0,
				data:{
					current:result.page,
					total:result.total,
					pageSize:result.pageSize,
					list:result.list,
					keyword:keyword
				}
			})

		  })
		.catch(e=>{
	 		res.json({
	 			code:1,
	 			message:"获取商品失败,服务器端错误"
	 		})		
		})		

});
	
router.get("/edit",(req,res)=>{
	let id = req.query.id;
	
		ProductModel
		.findById(id,'-__v -order -updatedAt -createdAt')
		.populate({path:'category',select:'_id pid'})
		.then((products)=>{
			res.json({
				code:0,
				data:products
			})			
		})	

		});
	

module.exports = router;