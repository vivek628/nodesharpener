const express=require('express')
const bodyparser=require('body-parser')
const path=require('path')
const adminroute=require('./routes/adminRoute')
const shoproute=require('./routes/shopRoute')
const contactusroute=require('./routes/contactusRout')

const app=express()
app.use(express.static(path.join(__dirname,'public')))
app.use(bodyparser.urlencoded({extended:false}))
app.use(shoproute)
app.use(adminroute)
app.use(contactusroute)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
    
})
app.listen(3000,()=>{
    console.log("server running on lacalhost 3000")
})
