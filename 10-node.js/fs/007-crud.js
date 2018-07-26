const fs =require('fs');
const uuidv1 = require('uuid/v1');//随机唯一值
const rdCrud = './data.json';

let add =(name,callback)=>{
   fs.readFile(rdCrud,(err,data)=>{
   	   if(!err){
   	   	   let obj = JSON.parse(data);
   	   	   //console.log(obj);
   	   	   obj.push({
   	   	   	   "id": uuidv1(),
   	   	   	    "name":name
   	   	   });
          let str = JSON.stringify(obj);
   	   	  fs.writeFile(rdCrud,str,(err)=>{
   	   	  	 if(!err){
   	   	  	 	callback(null,obj);
   	   	  	 }else{
   	   	  	 	console.log(err);
   	   	  	 }
   	   	  })
   	   }else{
   	   	  callback(err);
   	   }
   })
    
}

let get=(id,callback)=>{
    fs.readFile(rdCrud,(err,data)=>{
         if(!err){
            //
            let obj = JSON.parse(data);

            let result =null;
         /*
            obj.some((val)=>{
                if(val['id'] == id){
                    result = var;  
                	return true;
                }
               //console.log("in",obj) 
            })

  */
            for(key in obj){
            	if(obj[key]['id'] == id){
                   result = obj[key];
                   // console.log("in",result);
            	   break;
            	}
            	//console.log("out2",obj);
            } 
        
           callback(null,result);
         }else{
             callback(err);
         }


    });      
 }

let updata =(id,name,callback)=>{
    fs.readFile(rdCrud,(err,data)=>{
         if(!err){
            //
            let obj = JSON.parse(data);

            let result = null;
            let newObj = obj.filter((val)=>{
                val['id']['name'] = name;
            	return val['id'] != id;
            	 val['name'] = name;
            })

          // console.log("out::",newObj);
         
           let str = JSON.stringify(newObj);
   	   	  fs.writeFile(rdCrud,str,(err)=>{
   	   	  	 if(!err){
   	   	  	 	callback(null,newObj);
   	   	  	 }else{
   	   	  	 	console.log(err);
   	   	  	 }
   	   	  })
     
         }else{
             callback(err);
         }


    });      
}

let remove =(id,callback)=>{
   fs.readFile(rdCrud,(err,data)=>{
         if(!err){
            //
            let obj = JSON.parse(data);

            let result = null;
            let newObj = obj.filter((val)=>{
                //val['id']['name'] = name;
            	 return val['id'] != id;
            	 val['name'] = name;
            })

          // console.log("out::",newObj);
         
           let str = JSON.stringify(newObj);
   	   	  fs.writeFile(rdCrud,str,(err)=>{
   	   	  	 if(!err){
   	   	  	 	callback(null,newObj);
   	   	  	 }else{
   	   	  	 	console.log('err::');
   	   	  	 }
   	   	  })
     

           callback(null,result);
         }else{
             callback(err);
         }


    })      
}



/*
remove(11,(err,data)=>{
    if(!err){
    	  console.log("data",data); 
    	}else{
    	   callback("err",err); 
    	}
})
*/
updata(12,"Jio",(err,data)=>{
	 if(!err){
    	  console.log("data",data); 
    	}else{
    	   callback("err",err); 
     }
})


/*
get(2,(err,data)=>{
    if(!err){
    	  console.log("data",data); 
    	}else{
    	   callback("err",err); 
    	}
})
*/

/*
add(11,"Sit",(err,data)=>{
     if(!err){
        console.log("data",data); 
     }else{
        callback("err",err); 
     }

});
*/