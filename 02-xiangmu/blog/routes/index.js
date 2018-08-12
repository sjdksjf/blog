
const Router = require('express').Router;
const CategoryModel = require('../models/category.js');
const ArticleModel = require('../models/article.js');
const pagination = require('../util/pagination.js');
const getCommonData = require('../util/getCommonData.js');
const router = Router();

//显示首页
router.get('/',(req,res)=>{
	/*
	CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
		//2.拿到数据库中的categories数据
         let options = {
            page: req.query.page,//需要显示的页码
			model:ArticleModel, //操作的数据模型
			query:{}, //查询条件
			projection:'-__v', //投影，
			sort:{_id:-1}, //排序
			populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
         } 
        pagination(options)
        .then((data)=>{
              //3.把数据返回给模板
              res.render('main/index',{
			        userInfo:req.userInfo,
					articles:data.docs,
					page:data.page,
					list:data.list,
					pages:data.pages,
					categories:categories,
					url:'/articles'
	      });  
        }) 
	})
*/
  ArticleModel.getPaginationArticles(req)
  .then(pageData=>{
  	   getCommonData()
  	   .then(data=>{
  	   	    res.render('main/index',{
			        userInfo:req.userInfo,
					articles:pageData.docs,
					page:pageData.page,
					list:pageData.list,
					pages:pageData.pages,
					categories:data.categories,
					topArticles:data.topArticles,
					url:'/articles'
	      });  
  	   })
  })
	
})
//aiax请求获取文章列表的分页数据
router.get("/articles",(req,res)=>{
    let category = req.query.category;
	let query = {};
	if(category){
		query.category = category;
	}
	ArticleModel.getPaginationArticles(req,query)
	.then((data)=>{
		res.json({
			code:'0',
			data:data
		})
	})

 });

//显示详情页面
router.get("/view/:id",(req,res)=>{
    let id = req.params.id; 
    CategoryModel.findByIdAndUpdate(id,{$inc:{click}},{new:true})
    .populate('category',name)
    .then((articles)=>{//获取分类
    	ArticleModel.find({},'_id title click')
    	.sort({click:-1})
    	.limit(10)
    	.then((topArticles)=>{        
              res.render('main/detail',{
			        userInfo:req.userInfo,
					articles:article,
					categories:categories,
					topArticles:topArticles
	         })

       })

     })  
})

//显示博文页面
router.get("/list/:id",(req,res)=>{
    let id = req.params.id; 
    console.log(id);
    CategoryModel.find({},'_id name')
	.sort({order:1})
	.then((categories)=>{
         let options = {
            page: req.query.page,//需要显示的页码
			model:ArticleModel, //操作的数据模型
			query:{}, //查询条件
			projection:'-__v', //投影，
			sort:{_id:-1}, //排序
			populate:[{path:'category',select:'name'},{path:'user',select:'username'}]
         } 
        pagination(options)
        .then((data)=>{
            
              res.render('main/list',{
			        userInfo:req.userInfo,
					articles:data.docs,
					page:data.page,
					list:data.list,
					pages:data.pages,
					categories:categories,
					url:'/articles'
	      });  


        }) 
	})



})

module.exports = router;