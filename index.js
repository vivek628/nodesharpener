const express=require('express')
const bodyparser=require('body-parser')
const adminRoute=require('./Routes/admin')
const shopRoute=require('./Routes/shop')
const app=express()
app.use(bodyparser.urlencoded({extended:false}))

app.use('/admin',adminRoute)
app.use(shopRoute)


app.use('/',(req,res,next)=>{
    res.send("<h1>Welcome to express</h1>")
    
})
app.listen(3000,()=>{
    console.log("server done")
})