(function(window, undefined){
    var 
         //kQuery的构造函数
         kQuery =function(selector){
         	return new kQuery.fn.init(selector);
         };
//kQuery的原型对象
kQuery.fn = kQuery.prototype = {
      	constructor: kQuery,
      	init: function(selector){
      		selector = kQuery.trim(selector);
            //布尔值是假的情况返回空的jquery对象
      		if(!selector){
      			return this;
      		}
      		//如是函数的话返回有document的jquery对象,当页面所有的DOM节点加载完毕后执行传入的函数
      	    else if(kQuery.isFunction(selector)){
      	    	  document.addEventListener('DOMContentLoaded',function(){
      	    		selector();
      	    	});
      	    	this[0] =document;
      	    	this.length = 1;
      	    	//处理字符串
      	    }else if(kQuery.isString(selector)){
      	    	//HTML代码处理
      	    	if(kQuery.isHTML(selector)){
      	    		var tmpDom=document.createElement('div');
      	    		tmpDom.innerHTML = selector;

      	    	// 接收document上的选择器
      	    	/*var doms = document.querySelectorAll(selector);
                // console.log(doms);
                //循环页面上获取的数组加入到创建的数组中，然后返回出新数组。
                for(var i =0; i<doms.length;i++){
                	this[i] =doms[i];
                }
                this.length =doms.length;
                return this;*/
                [].push.apply(this,tmpDom.children);
            //选择器处理     
      	    }else{
      	    	var doms = document.querySelectorAll(selector);
      	    	[].push.apply(this,doms);
      	    }
      	}  
      	else if(kQuery.isArray(selector)){
      		//由于apply转伪数组有兼容问题(IE8以下不兼容),所以把所有传入的数组转换成真数组
      		var tmpArr =[].slice.call(selector);
      	    //把转换后的真数组转换成伪数组	
      	    [].push.apply(this,tmpArr);
      	}else{
      		this[0] =selector;
      		this.length = 1;
      	}
      		return this;
      },
      selector: "",
  	  length: 0,
  	  jquery:'1.0.0',
  	  //以下方法在调用时是kquery对象调用,所以方法内部的this指向调用的kquery对象
  	  push: [].push,
  	  sort: [].sort,
  	  splice: [].splice,
      toArray: function(){
      	return [].slice.call(this);
      },
      get: function(num){
      	       if(arguments.length == 1){
      	       	//正数
      	       	if(num >= 0){
      	       		return this [num];
      	       	//负数 
      	       	}else{
      	       		return this[this.length +num]
      	       	}

      	    }else{
      	    	return this.toArray();
      	    }
      },
      eq: function(num){
            if(arguments.length == 1){
            	return kQuery(this.get(num));
            }else{
            	return new kQuery();
            }
      },
      first:function(){
      	return this.eq(0);
      },
      last:function(){
      	return this.eq(-1);
      },
      each:function(fn){
      	return kQuery(kQuery.map(this,fn));
      },
      map:function(fn){
      	return kQuery(kQuery.map(this,fn));
      }
 }


//静态方法调用kQuery.extend方法，原型上调用kQuery.fn.extend方法。
kQuery.extend =kQuery.fn.extend =function(obj){
	    //便利数组，把静态方法添加到原型上使原型上有这些方法。
         for(key in obj){
         	this[key] = obj[key];
         }
}
kQuery.fn.extend({
     html: function(content){
          //console.log('aa');
          if(content){
             this.each(function(){
              this.innerHTML=content;
             })
            return this; 
          }else{
            return this[0].innerHTML;
          }
     },
     text: function(content){
          if(content){
            this.each(function(){
              this.innerText=content;
            })
            return this;
          }else{
            var str='';
            this.each(function(){
              str +=this.innerText;
            })
            return str;
          }
     },
     css: function(arg1,arg2){
         if(kQuery.isString(arg1)){
                 if(arguments.length==1){
                     if(currentStyle){
                       return[0].currentStyle[arg1];
                     }else{
                       getComputedStyle(this[0],false,[arg1]);
                     }
                 }else if(arguments.length == 2){
                   this.each(function(){
                    this.style[arg1]=arg2;
                   });
                 }
         }else(kQuery.isObject(arg1)){
             this.each(function(){
               for( key in arg1){
                this[key]=arg1[key];
               }
             })
         } 
         return this;
     },
     addClass: function(str){
            this.each(function(){
               var $this =kQuery(this); 
               if(!$this.hasClass){
                 this.className = this.className+ ''+str;
               }
            })  
     },
     removeClass: function(str){
            this.each(function(){
              var $this =kQuery(this);
               if($this.hasClass){
                 this.className = '';
               }
            })
     }
        

})
//kQuery的静态方法
kQuery.extend({
       //判断是不是函数
		isFunction: function(str){
			return typeof str ==='function';
		},
		//判断是不是选择器
		isString: function(str){
			return typeof str ==='string';
		},
		//判断是不是字符串
		isHTML : function(str){
			//处理字符串
			return str.charAt(0) == '<' && str.charAt(str.length-1) =='>' && str.length>=3;
		},
		isArray :function(str){
			return kQuery.isObject(str) && length in str;
		},
		isObject:function(str){
			return typeof str ==='object';
		},
		trim :function(str){
			if(kQuery.isString(str)){
				//用正则去掉字符串的前后空格
				return str.replace(/^\s+|\s+$/g,'');
			}else{
				return str;
			}
		  },
		each : function(arr,fn){
     	     //判断是不是数组
             if(kQuery.isArray(arr)){
                 for(var i=0;i<arr.length;i++){
                    var res = fn.call(arr[i],i,arr[i]);
                    if(res == false){
                    	break;
                    }else if(res == true){
                    	continue;
                    }
                 }  
             }else{
             	for(key in arr){
             		var res = fn.call(arr[key],key,arr[key]);
             		if(res == false){
                    	break;
                    }else if(res == true){
                    	continue;
                    }
             	}
             } 
             return arr;
     },
     map:function(arr,fn){
          var retArr= [];
          if(kQuery.isArray(arr)){
               for(var i=0; i<arr.length;i++){
                    var res =fn(arr[i],i);
                    if(res){
                      retArr.push(res);
                    }
               }
          }else{
                for( key in arr){
                    var res =fn(arr[key],key);
                    if(res){
                        retArr.push(res);
                    }
                }
          }
          return retArr;
     }


});


    


kQuery.fn.init.prototype = kQuery.fn;

window.kQuery =window.$=kQuery;

})(window)