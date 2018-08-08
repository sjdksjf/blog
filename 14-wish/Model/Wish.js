//服务器内部验证，不符合规范报错

const mongoose = require('mongoose');
//mongoose里的静态方法
var WishSchema = new mongoose.Schema({
     content:String,
     color: String



});



}




var wishModel = mongoose.model('users', kittySchema);
module.exports = KittenModel;

