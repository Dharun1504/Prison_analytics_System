const express = require('express')
const { registerPrisonController } = require('../controllers/prisonCtrl');

const router=express.Router()

router.post('/Register', registerPrisonController);

module.exports=router;