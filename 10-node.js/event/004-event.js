/*
const EventEmitter = require('events');
console.log(EventEmitter);
*/
const EventEmitter = require('events');
class  MyEmitter extends EventEmitter {};
const myEmitter =new MyEmitter();

//当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter。

myEmitter.on('newListener',(events,listener)=>{
    
   myEmitter.on('events',()=>{

	console.log('hello');
});

 myEmitter.on('events',()=>{
	console.log('hello1');
});
    console.log('kaixin');
});

//myEmitter.emit('events','a','b');
myEmitter.emit('events');