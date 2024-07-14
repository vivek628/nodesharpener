const express= require('express')
const path= require('path')
const app= express()
const route= require('./routes/admin')
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const Student= require('./model/studentmodel.js')
const Attendance=require('./model/attenanceModel.js')
Student.hasMany(Attendance)
Attendance.belongsTo(Student)


const sequelize = require('./utils/database.js');
const { FORCE } = require('sequelize/lib/index-hints')
app.use(express.static(path.join(__dirname, 'public')));
app.use(route)
sequelize.sync().then(()=>{
    console.log("connected")
    app.listen(3000,()=>{
        console.log("server is running")
    })
})
