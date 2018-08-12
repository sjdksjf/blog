//1.获取fs
const fs = require('fs');
//2.打开文件
fs.open('./001.txt','w',(err,fd)=>{
	if(!err){
		//写文件
		fs.write(fd,'bbb',(err)=>{
			if(!err){
				console.log("suffee");
				//关闭文件
				fs.close(fd,(err)=>{
					if(!err){
                        console.log("suffee");
					}else{
                        console.log(err);
					}
				})
			}else{
               //console.log("write file error":: err)
			}
		})
	}else{
		//console.log('open file error':: err)
	}

})