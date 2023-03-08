const router = require("express").Router();
let user = require("../models/userschema");

router.route("/adduser",(req,res)=>{
    user.find()
})