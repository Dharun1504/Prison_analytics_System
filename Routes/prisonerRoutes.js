const express = require('express')
const {registerPrisonerController } = require('../controllers/prisonerCtrl')


const router=express.Router()

router.post('/Register',registerPrisonerController);


module.exports=router;