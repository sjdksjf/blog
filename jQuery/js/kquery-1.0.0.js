(function(window, undefined){
    var 
         //kQuery的构造函数
         kQuery =function(selector){
         	return new kQuery.fn.init(selector);
         };
     //kQuery的原型对象
      kQuery.fn =kQuery.prototype = {
      	constructor:kQuery,
      	init: function(selector){
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
      	    	return this;
      	    	//选择器处理
      	    }else{
      	    	// 接收document上的选择器
      	    	var doms = document.querySelectorAll(selector);
                // console.log(doms);
                //循环页面上获取的数组加入到创建的数组中，然后返回出新数组。
                for(var i =0; i<doms.length;i++){
                	this[i] =doms[i];
                }
                this.length =doms.length;
                return this;
      	    }
      	}
      }   
//判断是不是函数
kQuery.isFunction = function(str){
	return typeof str ==='function';
}
//判断是不是选择器
kQuery.isString = function(str){
	return typeof str ==='string';
}
//判断是不是字符串
kQuery.isHTML = function(str){
	//处理字符串
	return str.charAt(0) == '<' && str.charAt(str.length-1) =='>' && str.length>=3;
}

kQuery.fn.init.prototype = kQuery.fn;

window.kQuery =window.$=kQuery;

})(window)