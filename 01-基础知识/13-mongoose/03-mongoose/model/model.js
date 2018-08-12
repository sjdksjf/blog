//服务器内部验证，不符合规范报错

const mongoose = require('mongoose');
//mongoose里的静态方法
var kittySchema = new mongoose.Schema({
       name:{
         type:String,
         required:[true,'请输入用户名'],
         maxlength:[10,'请小于十个字符'],
         minlength:[2,'不得少于两个字符']
       }, 
       age:{
         type:Number  
       }, 
       sex:{
         type:String
       },
       phone:{
         type:String
       },
       loched:{
       	 type: Boolean
       },
       createdAt:{
       	 type: Date
       },
       friends:{
       	 type: Array
       }
});
/*
//自定义实例方法
kittySchema.methods.findMyBlogs = function(callBack){
  //this是一个实例，谁调用this就是谁
  console.log(this)


}
*/
//自定义静态方法
kittySchema.statics.findPhone = function(phone,callBack){
  this.findOne({phone:phone},(err,doc)=>{
    //this 是 一个对象
    //console.log(this === this.model('users'));
    callBack(err,doc);

  })
}








var KittenModel = mongoose.model('users', kittySchema);
module.exports = KittenModel;

