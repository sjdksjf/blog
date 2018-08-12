/*
const EventEmitter = require('events');
console.log(EventEmitter);
*/
const EventEmitter = require('events');
class  MyEmitter extends EventEmitter {};
const myEmitter =new MyEmitter();

//当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter。
let fn1 =()=>{
	console.log('hello1');
};
let fn2 =()=>{
	console.log('hello2');
};
let fn3 =()=>{
	console.log('hello3');
};
//移除事件必须在绑定之后，注意顺序，第一个参数事件名，第二个要移除的函数。
//myEmitter.removeListener('events',fn1);
myEmitter.on('events',fn1);
myEmitter.on('events',fn2);
myEmitter.on('events',fn3);
//off要版本10以上
//myEmitter.off('events',fn2);
myEmitter.removeListener('events',fn1);
myEmitter.emit('events');