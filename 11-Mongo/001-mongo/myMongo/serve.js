//拿到驱动
const MongoClient = require('mongodb').MongoClient;
//const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'zhang';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true },function(err, client) {
  //assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  //创建数据库名字
  const col = db.collection(dbName);
   /*
   //往数据库添加数据
  col.insertMany([{"content":"我要变强"},{"content":"栀子花开"}],function(err,result){
  	if(!err){
      console.log(result);
  	}else{
  		console.log(err);
  	}
  	 client.close();
  })
  */
  //删除数据
  col.deleteOne({"content":"栀子花开"},function(err,result){
  	if(!err){
      console.log(result);
  	}else{
  		console.log(err);
  	}
  	 client.close();
  })
  /*
  //查询数据
  col.find({"content":"我要变强"}).toArray(function(err,docs){
  	if(!err){
      console.log(docs);
  	}else{
  		console.log(err);
  	}
  	 client.close();

  })
  */
  /*
  //更新增加数据
  col.updateOne({"content":"我要变强"},{$set:{"color":"blue"}},function(err,result){
  	if(!err){
      console.log(result);
  	}else{
  		console.log(err);
  	}
  	 client.close();
  	})
  	*/

  //client.close();
});
