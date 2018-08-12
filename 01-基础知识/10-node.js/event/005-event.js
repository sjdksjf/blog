const EventEmitte = require('events');

console.log(EventEmitte);

class MyEmitter extends EventEmitte{

}

const myEmitter = new MyEmitter();

myEmitter.on('test',()=>{
	console.log('test event');

});
myEmitter.emit('test');
