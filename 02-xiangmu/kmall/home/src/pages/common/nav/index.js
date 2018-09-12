
require('./index.css');
var _user = require('service/user')
var _util = require('util');

var nav = {
	init:function(){
		this.bindEvent();
		this.loadUsername();
		this.loadeCartInfo();
		return this;
	},
	bindEvent:function(){
		$('#logout').on('click',function(){
			_user.logout(function(result){
				window.location.reload();
			},function(message){
				_util.showErrorMsg(message)
			});
		});
	},
	loadUsername:function(){
		_user.getUsername(function(user){
			$('.not-login').hide();
			$('.login')
			.show()
			.find('.username')
			.text(user.username)
		})
	},
	loadeCartInfo:function(){

	}
}

module.exports = nav.init();