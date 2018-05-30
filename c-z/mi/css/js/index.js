fct();
flt();



function fct(){
	var oGwc=document.getElementById('gouwuche');
	var oGw=document.getElementById('gouwu');
    var oImg=oGwc.getElementsByTagName('img');
    var oNev=document.getElementsByTagName('ul')[0];
    var oLi = oNev.getElementsByTagName('li');
    //console.log(oNev);
    	//console.log(oLi);
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
};
function flt(){
	var oBs=document.getElementsByTagName('h4');
	var oHs=document.getElementsByTagName('h2');
	var oBd=document.getElementById('baide');
	var oHd=document.getElementById('heide');
	var oBsd=document.getElementById('baise');
	var oHsd=document.getElementById('heise');
       console.log(oBs[0]);
    var oHs1= oHs[0];    
    var oBs1= oBs[0];
    var oHs2= oHs[1];    
    var oBs2= oBs[1];  
       oBs1.onclick=function(){
       	oBd.style.display='block';
       	oHd.style.display='none';
       };
       oHs1.onclick=function(){
       	oHd.style.display='block';
       	oBd.style.display='none';
       }
       oBs2.onclick=function(){
       	oBsd.style.display='block';
       	oHsd.style.display='none';
       };
       oHs2.onclick=function(){
       	oHsd.style.display='block';
       	oBsd.style.display='none';
       }
} 
