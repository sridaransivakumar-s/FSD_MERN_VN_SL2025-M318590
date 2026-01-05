const userRouter = require('express').Router();
const {getData,insertData} = require('../controller/userController')
userRouter.get("/get",getData);
userRouter.post("/insert",insertData);
module.exports = userRouter;