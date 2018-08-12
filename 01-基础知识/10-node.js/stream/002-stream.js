

const { Writable } = require('stream');
class MyWritable extends Writable{
	_write(chunk, encoding, callback){
		console.log(chunk.to);
		callback();
	}
}
const str = new MyWritable();
console.log(str.write('aa'));
console.log(str.write('bb'));

process.stdin.pipe(str);
