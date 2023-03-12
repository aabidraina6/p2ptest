const router = require("express").Router();
let Message = require("../models/Message");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

//new mess

router.post("/", async (req, res) => {
    console.log("in here to add new messages" , req.body);
    const newMessage = new Message(req.body);
    console.log(newMessage);
    try {
        const savedMessage = await newMessage.save();
        res.status(200).json(savedMessage);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get mess of a user

router.post("/getmess", async (req, res) => {

    console.log("in getmess -> ",req.body.convid);
    try {
        const messages = await Message.find({
            conversationId: req.body.convid,
        });
        res.status(200).json(messages);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
