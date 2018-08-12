var str1 = 'abc';

//global相当于windo 属于全局，可省略
global.str1 = str1;
console.log(str1);//等于console.log(global.str1)；