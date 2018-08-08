//服务器内部验证，不符合规范报错

const mongoose = require('mongoose');
//mongoose里的静态方法
var kittySchema = new mongoose.Schema({
    author:{
      type:mongoose.Schema.Types.ObjectId
    }, 
    Sicrec:String,
    Hiyeer:String    
      
});

kittySchema.statics.findBokit = function(){
  
  


}



/*
kittySchema
.findOne(query={},callback)
.populate('author')
.then((doc)=>{
  callback(doc)
})
.catch((e)=>{
  callback(e)
})
*/

var KittenModel = mongoose.model('user', kittySchema);
module.exports = KittenModel;

