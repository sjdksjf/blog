/*
* @Author: TomChen
* @Date:   2018-07-27 10:29:02
* @Last Modified by:   TomChen
* @Last Modified time: 2018-07-28 11:23:23
*/
const fs = require('fs');
const uuidv1 = require('uuid/v1');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;


const url = 'mongodb://localhost:27017';
const dbName = 'zhang';

//const filePath = path.normalize(__dirname + '/../data/wish.json');

let getRandom = (min,max)=> {	
	return Math.round(min + (max-min)*Math.random());
}

const colorArr = ['#f10','#ff0','#ff5600','#0f1'];
//创建回调函数
let getDB = (callback)=>{
	MongoClient.connect(url,{useNewUrlParser: true },function(err, client){
  //assert.equal(null, err);
   console.log("Connected successfully to server");

   const db = client.db(dbName);
   callback(db,client);
  })
}

let add = (options,callback)=>{
        options._id = uuidv1();
		options.color = colorArr[getRandom(0,colorArr.length-1)];
  
	  getDB(function(db,client){
	    const col = db.collection('zhang');
	       col.insertOne(options,function(err,result){
			  	if(!err){
			  	  callback(null,options)	
			      console.log(result);
			  	}else{
			  		callback(err);
			  		console.log(err);
			  	}
			  	 client.close();
			  })

		})
  
 }

let get = (callback)=>{
		getDB(function(db,client){
	    const col = db.collection('zhang');
	        col.find().toArray(function(err,docs){
			  	if(!err){
			  	  callback(null)
			      //console.log(docs);
			  	}else{
			  		callback(err);
			  		//console.log(err);
			  	}
			  	 client.close();

			  })

		});
}

let remove = (id,callback)=>{
	getDB(function(db,client){
	    const col = db.collection('zhang');
	       col.deleteOne({_id:id},function(err,result){
			  	if(!err){
			  	  callback(null);
			      //console.log(result);
			  	}else{
			  		 callback(err);
			  		//console.log(err);
			  	}
			  	 client.close();
			  })

		})
}

module.exports = {
	add:add,
	get:get,
	remove:remove
}
