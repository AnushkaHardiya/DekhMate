const express = require("express");
const request  = express.Router();
const userRouter = require("../controller/homeController");

request.get("/login",userRouter.loginPage);

// request.post("/login",userRouter.loginPost);

request.get("/signup",userRouter.signupPage);

request.post("/signup",userRouter.signupPost);


module.exports = request;