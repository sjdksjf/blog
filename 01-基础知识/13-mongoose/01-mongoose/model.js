const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/file',{useNewUrlParser: true });

var db = mongoose.connection;
db.on('error',(err)=>{
    console.log("err add...");
   //throw err
});
db.once('open',()=>{
   console.log("open add...");
  var kittySchema = new mongoose.Schema({
       name: String,
       age: Number,
       sex: String
	});
var KittenModel = mongoose.model('user', kittySchema);
/*
var silence = new KittenModel({name:'Kit',age:20,sex:"nan"});
//console.log(silence);
 */
 /*
KittenModel.insertMany([{name:'Olty',age:23,sex:"nv"},{name:'Kit',age:25,sex:"nv"},{name:'fil',age:20,sex:"nv"},{name:'Lit',age:30,sex:"nan"},{name:'Pit',age:50,sex:"nv"},{name:'Oit',age:50,sex:"nan"},{name:'Pit',age:60,sex:"nan"},{name:'Lit',age:28,sex:"nan"}],(err,docs)=>{
  if(!err){
    console.log(docs);
  }else{
    console.log("error::",err);
  }
})
*/
/*
 KittenModel.find({age:{$gt:22}},'name -_id',{skip:1},(err,docs)=>{
  if(!err){
    console.log(docs);
  }else{
    console.log(" find error::",err);
  }
 })
 */
 /*
 //{ multi: true } 默认false 更新第一条 ，true更新所有符合条件的
 KittenModel.update({age:{$gt:30}},{age:30},{ multi: true },(err,result)=>{
    if(!err){
        console.log(result);
      }else{
        console.log("updata error::",err);
      }
 })
*/

// remove 删除所有符合条件的 deleteOne 删除第一条符合条件的
KittenModel.remove({age:{$gt:28}},(err,result)=>{
    if(!err){
        console.log(result);
      }else{
        console.log("updata error::",err);
      }
    })
 
/*  
KittenModel.deleteOne({age:{$gt:20}},(err,result)=>{
    if(!err){
        console.log(result);
      }else{
        console.log("updata error::",err);
      }
    })
*/
});