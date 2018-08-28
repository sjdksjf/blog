const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username:{
  	type:String
  },
  password:{
  	type:String
  },
  isAdmin:{
  	type:Boolean,
  	default:false//默认是普通用户
  },
  email:{
    type:String
  },
  phone:{
    type:Number
  }
});


const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;