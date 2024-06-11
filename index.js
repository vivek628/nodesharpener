const express=require('express')
const app=express()
app.use((req,res,next)=>{
    console.log("i am first middlewares")
    res.send("<h1>hi bro </h1>")
    next()
})
app.use((req,res,next)=>{
    console.log("i am second middlewares")
})
app.listen(3000,()=>{
    
    console.log("server is running on port",3000)
})