const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/zhang',{useNewUrlParser: true });

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
var Kitten = mongoose.model('Kitten', kittySchema);
var silence = new Kitten({name:'Kit',age:20,sex:"nan"});
//console.log(silence);
 /*
 //插入
 silence.save((err,doc)=>{
 	if(!err){
       console.log(doc.toString())
 	}else{
       console.log("save error",err);   
 	}
 })
 */
 silence.find({name:"Kit"},(err,docs)=>{
 	if(!err){
       console.log(docs.toString())
 	}else{
       console.log("save error",err);   
 	}
 })


});