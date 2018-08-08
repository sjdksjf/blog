const mongoose = require('mongoose');
const kittySchemal = require('./model/model.js');
const BokitSchemal = require('./model/bokit.js');
const moment = require('moment');
mongoose.connect('mongodb://localhost:27017/file',{useNewUrlParser: true });
var db = mongoose.connection;

db.on('error',(err)=>{
    //console.log("err add...");
      throw err
});

db.once('open',()=>{

BokitSchemal
.findOne({Sicrec:"今天不开心"})
.populate('author','name -_id')
.then((doc)=>{
  console.log(doc);
})

BokitSchemal.

});