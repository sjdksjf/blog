const mongoose = require('mongoose');
const kittySchemal = require('./model/model.js');
const moment = require('moment')
mongoose.connect('mongodb://localhost:27017/file',{useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
    console.log("err add...");
   //throw err
});

db.once('open',()=>{
 

 /*  
kittySchemal.insertMany({ 
    name:'Klllllll',
    age:22,
    sex:"nan",
    createdAt: Date(),
    friends: ["Aime","Yiue","Jioc"]
  },(err,docs)=>{
  if(!err){
    console.log(docs);
  }else{
    console.log("error::",err);
  }

})
*/

});