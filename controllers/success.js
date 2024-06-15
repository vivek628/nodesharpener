const path= require('path')
const rootdir=require('../utils/path.js')
const successcontrollers=(req,res,next)=>{
    res.sendFile(path.join(rootdir,'views','success.html'))
}
module.exports=successcontrollers