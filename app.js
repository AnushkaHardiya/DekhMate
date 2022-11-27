const express = require("express");
const userRoute = require("./routes/userRoute")
const homeRoute  = require('./routes/homeRoute');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));
require("./db/conn");
app.set("view engine","ejs");
app.use(express.static('public'));


app.use("/",homeRoute);
app.use("/user",userRoute);
app.use("/AddHouse",userRoute);
app.use("/login",homeRoute);
app.listen(port,(req,res)=>{
    console.log(`listening on http://localhost:${port}`);
})

