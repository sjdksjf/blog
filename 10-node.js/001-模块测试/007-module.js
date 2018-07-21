let str1 = "abc1";
let str2 = "abc2";
let str3 = "abc3";
let fn =() =>{
	console.log('fn ...')
}

/*exports.str2 = str2;

module.exports.str1 = str1;
*/
module.exports={
   str1 :str1,
   str2 :str2,
     fn :fn
}