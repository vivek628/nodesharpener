const path= require('path')
const express=require('express')
const route=express.Router()
const rootdir=require('../utils/path.js')
route.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'))
})
route.post('/success', (req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
})
module.exports=route