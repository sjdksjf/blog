//方法

const swig = require('swig');
const querystring = require('querystring');

class Wish{
 
	//显示许愿墙页面
	index(req,res,...args){
        //console.log('add..')
		Wish.get((err,data)=>{
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
	
		
	}
 index(req,res,...args){
   console.log(args);
		Wish.remove(args,(err)=>{
			if(!err){
				let resultJson = JSON.stringify({
					status:0
				});
				res.end(resultJson);					
			}
		});


 }
   index(req,res,...args){
   	 let obj = querystring.parse(body);
			//2.存储到文件
			Wish.add(obj,(err,data)=>{
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
   }

};

module.exports = new Wish();