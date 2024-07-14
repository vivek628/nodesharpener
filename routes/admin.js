const express= require('express')
const route= express.Router()
const admincontroller= require('../controllers/admincontroller')

route.use('/add',admincontroller.add)
route.post('/add',admincontroller.addStudent)
route.post('/display',admincontroller.display)
route.post('/submit',admincontroller.showme)
route.post('/fetchAll',admincontroller.fetchAll)
route.use('/',admincontroller.home)
module.exports=route