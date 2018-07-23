
const EventEmitter = require('events');

class MyEventEmitter extends EventEmitter{//继承events中的方法
   constructor(data,offsetLength){//接收 new 这个函数传入的参数
   	   super();
       this.data =data;
       this.offsetLength = offsetLength;
       this.on('newListener',(eventName)=>{//new 的时候绑定事件，sit.on事件触发后执行该函数
          if(eventName === 'data'){ //判断是否传入了data
            console.log(this.listeners('data'));
            //添加异步执行函数，同步执行时。传出的是空数组
            setImmediate(()=>{//异步执行该方法
			   this._dispatch();
			 })
          }

       })

   }

   _dispatch(){
   	     // 获取文件的length
         let tentLength = this.data.length;
         let sentLength = tentLength;
         //按需要循环截取字符串 
         while(sentLength>0){
         	let sex =tentLength - sentLength;
         	let end = sex + this.offsetLength;

            let tmp = this.data.slice(sex,end);
            let buf = Buffer.from(tmp);
            this.emit('data',buf);
            sentLength -= this.offsetLength; 
         }
         this.emit('end');   
   }
   
}
let data=`aaaaaaaaaabbbbbbbbbb`;
const sit = new MyEventEmitter(data,10);

let body = '';
sit.on('data',(curser)=>{//绑定事件
	//console.log('data...');
    console.log(curser.toString());
    //body += curser;
})
sit.on('end',()=>{
	 console.log("end...");
});