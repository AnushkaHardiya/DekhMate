const express = require("express");
const User = require("../model/userModel");


exports.loginPage = (req,res)=>{
    console.log("Login Page");
    res.render("./views/login");
}
exports.signupPage = (req,res)=>{
    console.log("Sign Page");
    res.render("./views/signup");
}
exports.signupPost = ("/signup",[
    
],async(req,res)=>{
    try{
        const registeruser = new User({
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        })
      const signIned =  await registeruser.save();
      res.status(201).render("signup");
    }
    catch(error){
        res.status(400).send(error);
        res.status(400).render("signup");
    }
})

// exports.registerPost = async(req,res)=>{
//     try{
//         console.log(req.body);
//         const registeruser = new User({
//             name:req.body.name,
//             email:req.body.email,
//             username:req.body.username,
//             password:req.body.password
//         })
//       const signIned =  await registeruser.save();
//       res.status(201).render("./views/signup");
//     }
//     catch(error){
//         res.status(400).send(error);
//     }
// }