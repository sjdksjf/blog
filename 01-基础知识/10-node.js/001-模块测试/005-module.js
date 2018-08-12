let str = 'abc' ;
var fn = ()=>{
  console.log('ddd');
};
/*
console.log(module);
console.log(exports);
*/
module.exports.str = str;
module.exports.fn = fn;