

var _util = require('util');
//调用_util的request方法向后台发送请求
var _user = {
	logout:function(success,error){
		//alert('logout')
		_util.request({
			url:'user/logout',
			success:success,
			error:error
		})	
	},
	login:function(data,success,error){
        _util.request({
        	method:'post',
        	url:'/user/login',
        	data:data,
        	success:success,
        	error:error
        })
	},
	register:function(data,success,error){
        _util.request({
        	method:'post',
        	url:'/user/register',
        	data:data,
        	success:success,
        	error:error
        })
	},
	getUserInfo:function(success,error){
        _util.request({
        	url:'/user/userInfo',
        	success:success,
        	error:error
        })
	},
	checkUsername:(username,success,error){
        _util.request({
        	method:'post',
        	url:'/user/checkUsername',
        	data:{
                username:username
        	},
        	success:success,
        	error:error
        })
	},
	updatePassword:(data,success,error){
        _util.request({
        	method:'post',
        	url:'/user/updatePassword',
        	data:data,
        	success:success,
        	error:error
        })
	},
}


module.exports = _user;