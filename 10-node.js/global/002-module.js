/*
let t=setTimeout(()=>{
 console.log('aa');
},1000)
 clearTimeout(t);
*/
 let s=setInterval(()=>{
 console.log('bb');
 clearInterval(s);
},0)

 setImmediate(()=>{
   console.log('cc');
 })
 