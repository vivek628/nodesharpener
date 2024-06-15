const path= require('path')
const rootdir=require('../utils/path.js')
const contactuscontroller=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','contactus.html'))
}
module.exports=contactuscontroller    