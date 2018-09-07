require('pages/common/nav');
require('pages/common/searce');
require('pages/common/footer');
require('pages/common/side');

require('./index.css');


//登陆页面逻辑
var page = {
	init:function(){
        this.bindEvent();
	},
	bindEvent:function(){
		$('#btn-submit').on('click',function(){
			alert('aa');
		})
	}
}


$(function(){
	page.init();
})

