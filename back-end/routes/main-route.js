const express = require('express');
const mainRouter = express.Router();
const {getAllMobile,FindMobileId,createNewMobile,updateMobile,deleteMobile}=require('../controllers/main-controller')

mainRouter.get('/mobile',getAllMobile);
mainRouter.get('/mobile/:mobile_id',FindMobileId);
mainRouter.post('/CreateMobile',createNewMobile);
mainRouter.put('/UpdateMobile/:mobile_id',updateMobile);
mainRouter.delete('/DeleteMobile/:mobile_id',deleteMobile);

module.exports = mainRouter;


