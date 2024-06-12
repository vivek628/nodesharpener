const express=require('express')
const route=express.Router()
route.get('/add-product',(req,res,next)=>{
    res.send('<form action="/admin/add-product" method="POST"><input name="title" placeholder="enter the title"></input><input name="quantity" placeholder="enter the quantity"></input><button type="submit">add</button></form>')

})
route.post('/add-product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.quantity)
    res.redirect('/')
})
module.exports=route