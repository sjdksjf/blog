/*
const EventEmitter = require('events');
console.log(EventEmitter);
*/
const EventEmitter = require('events');
class  MyEmitter extends EventEmitter {};
const myEmitter =new MyEmitter();

//当一个普通的监听器函数被 EventEmitter 调用时，标准的 this 关键词会被设置指向监听器所附加的 EventEmitter。
//每个事件默认可以注册最多 10 个监听器。 单个 EventEmitter 实例的限制可以使用 emitter.setMaxListeners(n) 方法改变。
myEmitter.setMaxListeners(12);
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello1');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello2');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello3');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello4');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello5');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello6');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello7');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello8');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello9');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello10');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello11');
});
myEmitter.on('events',()=>{
	//console.log(a,b,this);
	console.log('hello12');
});

myEmitter.emit('events','a','b');