 
(function($){
 
    function getRandom(min,max) {   
        return Math.round(min + (max-min)*Math.random());
    }
 
    $wool = $('.wool');
    $wish = $('.yuanwang');
     
 
    $wish.pep({  constrainTo: '.wool' });
 
    //获取墙的宽高和卡片的宽高
    var woolWidth = parseInt($wool.css('width'));
    var woolHeight = parseInt($wool.css('height'));
    var wishWidth = parseInt($wish.css('width'));
    var wishHeight = parseInt($wish.css('height'));
 
    //随机显示卡片
    $wish.each(function(){
        $(this).css({
            transform:'matrix(1, 0, 0, 1, '+getRandom(0,woolWidth-wishWidth) +','+getRandom(0,woolHeight-wishHeight) +')'
        });
    });
    //改变显示顺序
    $wish.hover(function(){
        $(this).css({
            zIndex:999
        })
    },function(){
        $(this).css({
            zIndex:0
        })
    });
     
    //监听删除事件
    $wool.on('click','.close',function(){
        // console.log(this);
        var $this = $(this);
        // console.log($this.data('id'));
        $.ajax({
            url:'/del',
            data:'id='+$this.data('id'),
            dataType:'json'
        })
        .done(function(data){
 
        })
 
    });
 
    //增加许愿卡
    $('.sub-btn').on('click',function(){
        let val = $('#content').val();
        $.ajax({
            url:'/add',
            data:{content:val},
            dataType:'json',
            method:'POST'
        })
        .done(function(data){
 
        })      
    });
 
 
})(jQuery); 