const mongoose = require('mongoose');
const pagination = require('../util/pagination.js');


const ProductSchema = new mongoose.Schema({
  category:{
  	type:mongoose.Schema.Types.ObjectId,
    ref:'Category'
  },
  describe:{
  	type:String
  },
  name:{
    type:String
  },
  price:{
    type:String
  },
  stock:{
    type:Number,
    default:0
  }
},{
  timestamps:true
});
ProductSchema.statics.getPaginationProductes = function(page,query={}){
    return new Promise((resolve,reject)=>{
      let options = {
        page: page,//需要显示的页码
        model:this, //操作的数据模型
        query:query, //查询条件
        projection:'', //投影，
        sort:{_id:-1}, //排序
      }
      pagination(options)
      .then((data)=>{
        resolve(data); 
      })
    })
 }

const ProductModel = mongoose.model('Product', ProductSchema);

module.exports = ProductModel;