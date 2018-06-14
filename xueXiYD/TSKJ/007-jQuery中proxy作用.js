;(function(){
  Search.prototype = {
		constructor:Search,
		_init:function(){
			//绑定提交事件
			this.$searchBtn.on('click',$.proxy(this.submit,this));
			//$.proxy(this.submit,this) 描述：接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境。以后面的函数为准，若后面中this不存在，执行前面的函数。
		},
		submit:function(){
			if(this.getInputVal() == ''){
				return false;
			}
			this.$searchFrom.trigger('submit');
		},
		getInputVal:function(){
			return $.trim(this.$searchInput.val());
		}
	}	
})(window)
