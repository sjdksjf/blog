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
//自定义实例方法
kittySchema.methods.findMyBlogs = function(callBack){
  console.log(this)


}



var KittenModel = mongoose.model('user', kittySchema);
module.exports = KittenModel;

