const express=require('express')
const router= express.Router()
const userRoute= require('../controllers/form')
router.get('/',userRoute.getUserDetails)
router.post('/',userRoute.getUserDetails)
router.get('/getdetail',userRoute.showUserDetails)
router.post('/delete',userRoute.deleteUserDetails)
router.post('/edit',userRoute.editUserDetails)


module.exports=router