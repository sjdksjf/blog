
const fs = require('fs');
const ws = fs.createWriteStream('./op.txt');

ws.on('finish',()=>{
	console.log("dd");
})
ws.on('end',()=>{
	console.log("dd");
})
/*
const rs = fs.createReadStream('./ip.txt');
rs.on('data',(curser)=>{
	console.log(curser.toString());
})

rs.pipe(ws);
*/