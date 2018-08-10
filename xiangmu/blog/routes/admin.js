
const Router = require('express').Router;

const UserModel = require('../models/user.js');
const pagination = require('../util/pagination.js');

const multer = require('multer');
var  upload = multer({ dest: 'public/uploads/' });


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
    res.render('admin/index',{
         userInfo:req.userInfo
    }); 

})


//显示用户列表

router.get('/users',(req,res)=>{
  
  let options = {
		page: req.query.page,//需要显示的页码
		model:UserModel, //操作的数据模型
		query:{},//查询条件
		projection:'_id username isAdmin', //投影，
		CategoryModel:{_id:-1} //排序
	};
 pagination(options)
	.then((data)=>{
		res.render('admin/user_list',{
			userInfo:req.userInfo,
			users:data.docs,
			page:data.page,
			list:data.list,
			pages:data.pages,
			url:'/admin/users'
		});	
    })

})

router.post('/uploadImages', upload.single('upload'),(req, res)=>{
     let path = "/uploads/"+req.file.filename;   
     res.json({
     	    uploaded:true,
     	 url:path  
     })


})

   /*
     
	
	//获取所有用户的信息,分配给模板
	
	//需要显示的页码
	let page = req.query.page || 1;

	if(page <= 0){
		page = 1;
	}

	//每页显示条数
	let limit = 2;


	
	分页:
	假设: 每页显示 2 条  
	limit(2)
	skip()//跳过多少条
	第 1 页 跳过 0 条
	第 2 页 跳过 2 条
	第 3 也 跳过 4 条
	综上发现规律:
	(page - 1) * limit
	

	UserModel.estimatedDocumentCount({})
	.then((count)=>{
		let pages = Math.ceil(count / limit);
		if(page > pages){
			page = pages;
		}
		let list = [];

		for(let i = 1;i<=pages;i++){
			list.push(i);
		}
		
		let skip = (page - 1)*limit;

		UserModel.find({},'_id username isAdmin')
		.skip(skip)
		.limit(limit)
		.then((users)=>{
			res.render('admin/user_list',{
				userInfo:req.userInfo,
				users:users,
				page:page*1,
				list:list
			});			
		})

	})

*/









 module.exports = router;






