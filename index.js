const express=require('express')
const bodyparser=require('body-parser')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    
    res.send('<form action="/product" method="POST"><input name="title" placeholder="enter the title"></input><input name="quantity" placeholder="enter the quantity"></input><button type="submit">add</button></form>')
})
app.post('/product',(req,res,next)=>{
    console.log(req.body.title)
    console.log(req.body.quantity)
    res.redirect('/')
})

app.use('/',(req,res,next)=>{
    res.send("<h1>Welcome to express</h1>")
    
})
app.listen(3000,()=>{
    console.log("server done")
})