const express=require('express')
const User=require('../model/detail')
const { where } = require('sequelize')
exports.showExpense=(req,res,next)=>{

    const date=req.body.expenseDate
   
    const amount=req.body.expenseAmount
    const detail=req.body.expenseDetail
    User.create({date:date,amount:amount,expenseDetail:detail}).then(()=>
    {  return User.findAll()}
    ).then((data)=>{
       // console.log(data)
      res.redirect('/display')
    }).catch((e)=>console.log(e))
    
   
}
exports.inputForm=(req,res,next)=>{
    const editmode=false
    res.render('input.ejs',{editmode:editmode})
}
exports.delete=(req,res,next)=>{
    const id= req.body.id
   // console.log(id)
    User.findAll({where:{id:id}}).then((data)=>{
       return data[0].destroy()
       
    }).then(()=> res.redirect('/display')).catch((e)=>console.log(e))
    

}

exports.display = (req, res, next) => {
    total()
        .then((sum) => {
            console.log("Total:", sum);
            User.findAll()
                .then((data) => {
                    res.render('detail.ejs', { data: data, total: sum });
                })
                .catch((e) => {
                    console.log("Error fetching expenses:", e);
                    res.status(500).send('Error fetching expenses');
                });
        })
        .catch((err) => {
            console.error('Error calculating total:', err);
            res.status(500).send('Error calculating total');
        });
};


exports.edit=(req,res,next)=>{
    const editmode=true
    const id =req.body.id
    
      User.findAll({where:{id:id}}).then((data)=>{
     
        const date=data[0].date
        const amount=data[0].amount
        const expenseDetail=data[0].expenseDetail
        res.render('input.ejs',{date:date,amount:amount,expenseDetail:expenseDetail,editmode:editmode}) 
        return User.findAll({where:{id:id}})   
        }).then((data)=>{
            
                data[0].destroy()
                
            }).catch((e)=>console.log("err is",e ))
}
function total() {
    return User.findAll()
        .then((data) => {
            var total = 0;
            data.forEach((item) => {
                total = +item.amount+total;
            });
            console.log("Total:", total);
            return total;
        })
        .catch((err) => {
            console.error('Error calculating total:', err);
            throw err; // Propagate the error
        });
}
