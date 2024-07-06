const User= require('../model/user')
exports.getUserDetails=(req,res,next)=>{
    console.log(req.method)
    const edit=false
    if(req.method=='POST')
        {
            const userName=req.body.username
            console.log(userName)
            const mobileNumber=req.body.mobile
            const email=req.body.email
            User.create({userName:userName,mobileNumber:mobileNumber,email:email,edit:edit}).then((result)=>console.log(result)).catch((e)=>console.log(e))
            res.render('index.ejs',{cssfile:'style.css'})
        }
    
    res.render('index.ejs',{cssfile:'style.css'})
}
exports.showUserDetails=(req,res,next)=>{
    User.findAll().then(data=>{
        
        res.render('details.ejs',{cssfile:'List.css',users:data})
    }).catch(e=>console.log(e))
    
}
exports.deleteUserDetails=(req,res,next)=>{
    const userId=req.body.userId
    User.findAll(({where:{id:userId}})).then(user=>{
        return user[0].destroy()
      }).then((result)=>{
        console.log("product is deleted")
        res.redirect('/products')
      }).catch((e)=>console.log(e))
      res.redirect('/')
}
exports.editUserDetails=(req,res,next)=>{
    const edit=true
    const userId=req.body.userId

    User.findAll(({where:{id:userId}})).then(user=>{
        console.log("user to be edit",user)
        const userName=user[0].userName
        const email=user[0].email
        const mobileNumber=user[0].mobileNumber
        const id= user[0].id
        console.log(userName,email,mobileNumber,id)
        User.findAll(({where:{id:id}})).then(user=>{
            return user[0].destroy()
          })
        res.render('edit.ejs',{userName:userName,email:email,mobileNumber:mobileNumber,id:id,cssfile:'style.css'})
    }).catch(e=>console.log(e))
}
