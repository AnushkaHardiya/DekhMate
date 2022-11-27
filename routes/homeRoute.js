const express = require("express");
const  router  = express.Router();
const indexRouter = require("../controller/homeController");

router.get("/",indexRouter.homePage);

router.get("/login",indexRouter.loginPage);

router.get("/signup",indexRouter.signupPage);

router.post("/signup",indexRouter.signupPost);

router.get("/AddHouse",indexRouter.AddHousePage);

router.post("/AddHouse",indexRouter.AddHousePost);

router.get("/login",indexRouter.loginPage);

router.post("/login",indexRouter.loginPost);

module.exports = router;
