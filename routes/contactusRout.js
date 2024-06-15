
const express=require('express')
const route=express.Router()
const contactuscontroller=require('../controllers/contactus.js')
const successcontrollers=require('../controllers/success.js')
route.get('/contactus',contactuscontroller)
route.post('/success', successcontrollers)
module.exports=route