(function($){
    //用户推出

    //此处ajax请求需终点记住过程
    $('#logout').on('click',function(){
      
         $.ajax({
            url:"/user/logout",
            dataType:'json',
            type:'get'
         })   
         .done(function(result){
              if(result.code == 0){
                //window.location.reload();
                //用户推出返回主页面
              	window.location.href = '/'
              }
         })
         .file(function(err){
             console.log(err);
         })   

    })
  


})(jQuery)