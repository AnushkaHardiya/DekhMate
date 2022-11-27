const express = require("express");
const path = require('path');
const user = require("../model/userModel");
const homeModule = require("../model/homeModel");

exports.homePage = (req,res)=>{
    console.log("Home Page");
    res.render("index");
}
exports.loginPage = (req,res)=>{
    console.log("Login Page");
    res.render("login");
}
exports.signupPage = (req,res)=>{
    console.log("Sign Page");
    res.render("signup");
}
exports.AddHousePage = (req,res)=>{
    console.log("AddHouse Page");
    res.render("AddHouse");
}


exports.signupPost =  ("/signup",(req,res)=>{
    try{
        console.log(req.body);
        const registeruser = new user({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        })
      const signIned =  registeruser.save();
      res.status(201).render("signup");
      console.log("Data Send");
    }
    catch(error){
        res.status(400).send(error);
    }
})
//Add House
exports.AddHousePost=("/AddHouse",(req,res)=>{
    try{
        console.log(req.body);
        const addToList = new homeModule({
            houseAddress:req.body.address,
            houseType:req.body.type,
            houseRent:req.body.rent,
            houseRequiredRoomate:req.body.roommateCount
        })

      const added = addToList.save();
      res.status(201).render("AddHouse");
      console.log("Data Send");
    }
    catch(error){
        res.status(400).send(error);
    }
})

//login
exports.loginPost=('/login', (req, res) =>{
	
	user.findOne({username:req.body.username},function(err,data){
        console.log(data);

		if(data){
          
			if(data.password==req.body.password){
							
                res.redirect('/');
				
			}else{
                 res.redirect('/login');
                 }
	 }else{
             res.redirect('/login');			
		}
	});
});