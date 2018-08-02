
class Index{
     index(req,res,...args){
     	let template = swig.compileFile(__dirname+'/../View/Wish/file.html');
				let html = template({
				   data:data
				});
				res.setHeader('Content-Type','text/html;charset=UTF-8');
				res.end(html);
     }
}

module.exports = new Index();