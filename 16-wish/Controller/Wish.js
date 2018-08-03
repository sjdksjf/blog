/*
* @Author: TomChen
* @Date:   2018-07-28 10:11:52
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 11:26:59
*/
const WishModel = require('../Model/Wish.js');
const swig = require('swig');
const querystring =require('querystring');
class Wish{
	
	//显示许愿墙页面
	index(req,res,...args){

		/*
        //console.log('add..')
		wish.get((err,data)=>{
			if(!err){
				//获取文件路径
				let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}

		});	
		*/
		WishModel.find({},(err,data)=>{
			if(!err){
				//获取文件路径
				let template = swig.compileFile(__dirname+'/../View/Wish/index.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);	
			}else{
				console.log(err);
			}

		})	
	}
	
del(req,res,...args){
	     /*
			wish.remove(args[0],(err)=>{
				if(!err){
					let resultJson = JSON.stringify({
						status:0
					});
					res.end(resultJson);					
				}
			});
        */
        WishModel.remove({_id:args[0]},(err)=>{
        	if(!err){
					let resultJson = JSON.stringify({
						status:0
					});
					res.end(resultJson);					
				}
        })

	 }
	 
add(req,res,...args){
   	    let body = '';
		req.on('data',(chunk)=>{
			body += chunk;
		});
		req.on('end',()=>{
			let obj = querystring.parse(body);
			//2.存储到文件
			/*
			wish.add(obj,(err,data)=>{
				let result = {};
				if(!err){
					//3.返回结果到前端
					result = {
						status:0,//成功
						data:data
					}
				}else{
					result = {
						status:10,//成功
						message:'添加失败'
					}
					console.log(err);
				}
				let resultJson = JSON.stringify(result);
				res.end(resultJson);				
			});
			*/
			WishModel.insertMany(obj,(err,data)=>{
				let result = {};
				if(!err){
					//3.返回结果到前端
					result = {
						status:0,//成功
						data:data
					}
				}else{
					result = {
						status:10,//成功
						message:'添加失败'
					}
					console.log(err);
				}
				let resultJson = JSON.stringify(result);
				res.end(resultJson);
			});
	})
  }		
   
}	

module.exports = new Wish();