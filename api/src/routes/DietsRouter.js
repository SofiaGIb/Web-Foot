const {Router} = require('express');
const Getdiets = require ("../handlers/DietsHandlers");

const DietsRouter =  Router();

DietsRouter.get("/",Getdiets)

module.exports = DietsRouter;