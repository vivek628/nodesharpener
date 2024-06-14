const express=require('express')
const route=express.Router()
route.get('/login',(req,res,next)=>{

    res.send('<form action="/" method="POST"><input placeholder="enter your name" name="username"></input><button>login</button></form>')
})
module.exports=route