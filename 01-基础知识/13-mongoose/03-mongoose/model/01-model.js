
const mongoose = require('mongoose');

var kittySchema = new mongoose.Schema({
       name:{
         type:String
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
var KittenModel = mongoose.model('user', kittySchema);
module.exports = KittenModel;

