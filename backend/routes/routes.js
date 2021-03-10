const express = require("express");
const route = express.Router();
const user = require("../models/signupmodel");
const bcrypt = require("bcrypt");
const saltRounds = 10;

route.post("/", (req,res)=>{
    bcrypt.hash(req.body.password,saltRounds,(err,hash)=>{
        const newUser = new user({
    fullName: req.body.fullName,
    userName: req.body.userName,
    email: req.body.email,
    password: hash
})
newUser.save()
.then(data=>{res.json(data)
})
.catch(err=>{
    res.json(err)
})
    })

});




module.exports = route;