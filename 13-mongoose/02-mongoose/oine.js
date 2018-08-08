const mongoose = require('mongoose');
const kittySchemal = require('./model/model.js');
const BokitSchemal = require('./model/bokit.js');
const moment = require('moment');
mongoose.connect('mongodb://localhost:27017/file',{useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
    console.log("err add...");
   //throw err
});

db.once('open',()=>{

/*
kittySchemal.findById('5b62fceb66cf9726049749ea',(err,docs)=>{
      if(!err){
        console.log(docs);
      }else{
        console.log("error::",err);
      }
})
*/
/*
kittySchemal.findPhone('13781257163',(err,doc)=>{
     if(!err){
        console.log(doc);
      }else{
        console.log("findPhone error::",err);
      }
})

*/

/*
 BokitSchemal.insertMany({
      author:'5b62fceb66cf9726049749ea',
      Sicrec:"今天不开心",
      Hiyeer:"学到了好多新知识都没掌握"
      },(err,docs)=>{
      if(!err){
        console.log(docs);
      }else{
        console.log("error::",err);
      }
  })
*/
 /*
  kittySchemal.insertMany({ 
    name:'Klll',
    age:22,
    sex:"nan",
    phone:"13781257163",
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