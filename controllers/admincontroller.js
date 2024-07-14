const Student= require('../model/studentmodel')
const Attendance= require('../model/attenanceModel')
const { where } = require('sequelize')
exports.home=(req,res,next)=>{
    Student.findAll().then((data)=>{
        //console.log("data",data)
        res.render('home.ejs',{data:data})
    }).catch((e)=>{
        console.log(e)
    })
   
}
exports.add=(req,res,next)=>{
   res.render('addstudent.ejs')
}
exports.addStudent=(req,res,next)=>{
    let name= req.body.name
    let email=req.body.email
    Student.create({Name:name,email:email}).then(()=>{
        console.log("data is created")
        res.redirect('/')
    }).catch((e)=>{
        console.log(e)
    })

}
exports.display=(req,res,next)=>{
    const dateData=req.body.date
    //console.log(dateData)
    Student.findAll().then((data)=>{
       // console.log(data)
        res.render('display.ejs',{data:data,dateData:dateData})
    }).catch((e)=>{
        console.log(e)
    })
}
exports.showme=(req,res,next)=>{
    const data= req.body
    console.log(req.body)
    const date= req.body.date;
    const Status=req.body.status;
    const id=req.body.id
    const statusArray = Object.keys(data)
    .filter(key => key.startsWith('status_'))  // Filter out only keys starting with 'status_'
    .map(key => data[key])
    //console.log(id)
    console.log(statusArray)
    savedata(id,statusArray,date)
    res.redirect('/')
    
}
exports.fetchAll=(req,res,next)=>{
    Student.findAll().then((data)=>{
        console.log(data)
       
        res.render('fetchalldata.ejs',{student:data})
    })
   
}
async function savedata(id,Status,date)
{
    try{
      for(let i=0;i<id.length;i++)
      {
       await   Attendance.create({date:date,status:Status[i],StudentId:id[i]})
        console.log("data saved")
        const TotalDAYCount= await   Attendance.count({
            distinct: true,
            col: 'date' // Column name for which to count distinct values
          })
        const PresentDayCount= await  Attendance.count({
            where:{
                StudentId:id[i],
                status:"Present"
            }
        })
        console.log("PresentDayCount",PresentDayCount)
        console.log("totaldaycont",TotalDAYCount)
        const percentage=(PresentDayCount/TotalDAYCount)*100
        console.log(percentage)
        console.log(id)
        await Student.update(
            { percentage:percentage  }, // Values to update
            { where: { id: id[i] } }
        )
      }
    }
    catch(e)
    {
     console.log(e)
    }
}