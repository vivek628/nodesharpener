const path= require('path')
const express=require('express')
const route=express.Router()
const rootdir=require('../utils/path.js')
route.get('/add-product',(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','add-product.html'))
})
route.post('/add-product',(req,res,next)=>{
    res.redirect('/')
})
module.exports=route