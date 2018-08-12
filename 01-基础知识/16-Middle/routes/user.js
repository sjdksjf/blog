
const Router = require('express').Router;

const router = Router();

router.get('/',(req,res)=>{
	res.send('GET 请求')
})
router.post('/',(req,res)=>{
	res.send('post 请求')
})
router.delete('/:id',(req,res)=>{
    console.log(req.params.id);
	res.send('delete 请求')
})
router.put('/',(req,res)=>{
	res.send('put 请求')
})

module.exports =router;