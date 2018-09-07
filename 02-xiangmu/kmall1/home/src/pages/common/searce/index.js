require('./index.css');

var _util = require('util');

var searce = {
    init: function(){
    	this.bindEvent();
    	this.loadUserInfo();
    	this.loadCaterInfo();
        return this;
    }
    /*
    bindEvent:function(){
    	$('#login').on('click',function(){
    		_user.logout(function(result){
                window.location.reload();
            },function(message){
                 _util.showErrorMsg();  
            });
    	})
    },
    loadUserInfo:function(){

    },
    loadCaterInfo:function(){

    }
    */
}

module.exports = searce.init();