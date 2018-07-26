
const fs = require('fs');
fs.open('./001.txt','r',(err,fd)=>{
    if(!err){
         let buf = Buffer.alloc(100);
         fs.read(fd,buf,0,100,0,(err)=>{
         	if(!err){
         		console.log("suffer:::",buf);
                fs.close(fd,(err)=>{
                	if(!err){
                      console.log("suffer:::",buf);
                	}else{
                       console.log("err...",buf);
                	}
                })
         	}else{
               console.log("err:::",buf);
         	}
         })
    }else{

    }
}) 