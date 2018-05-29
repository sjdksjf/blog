fct();




function fct(){
	var oGwc=document.getElementById('gouwuche');
	var oGw=document.getElementById('gouwu');
    var oImg=oGwc.getElementsByTagName('img');
    var oNev=document.getElementsByTagName('ul')[0];
    var oLi = oNev.getElementsByTagName('li');
    //console.log(oNev);
    	console.log(oLi);
   /* oNev.onmouseenter=function(){
        oLi[2].style.opacity='0.6'; 	
    };
    oNev.onmouseleave=function(){
        oLi[2].style.opacity='0.9'; 	
    };*/
    oGwc.onmouseenter=function(){
    	oGw.style.display='block';
    };
    oGwc.onmouseleave=function(){
    	oGw.style.display='none';
    };
}