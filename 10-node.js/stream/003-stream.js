

const { Readable } = require('stream');
class MyReadable extends Readable{//继承父类中的方法
	constructor(){
		super();
		this.index=0;

	}
	_read(index){
		const i =this.index++;
		if(i>5){
			this.push(null);
		}else{
		  const str =''+i;
		  const buf =Buffer.from(str,'ascii');
		  this.push(buf);	
		}
	}
}
const str = new MyReadable();

console.log(str.read(2));

//process.stdin.pipe(str);
