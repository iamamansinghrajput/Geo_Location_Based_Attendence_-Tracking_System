const express = require("express");
const Userr = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const api = express.Router();

api.post("/register", async (req, res) => {
  let {userName,
       firstName,
       lastName,
       email,
       password,
       number,
       dob,
       qualification,
       skills,
       presentAddress,
       permanentAddress,
       role,
       status  } = req.body;

  try {
    const existingUser = await Userr.find({ email: email });

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const user = new User({
      userName,
       firstName,
       lastName,
       email,
       password,
       number,
       dob,
       qualification,
       skills,
       presentAddress,
       permanentAddress,
       role,
       status
    });

    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


api.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    const existinguser = await userr.find({ email: email });
        if(existinguser.length===0){
            res.json("user not found");
            return ;
        }
    let gotuser=existinguser[0];
        let pass=gotuser.password;
        console.log(pass);
    if (gotuser.status !== "approved") {
      return res.status(403).json({ message: "User not approved by admin" });
    }

    const isPasswordValid = await bcrypt.compare(password, pass);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({id:existinguser[0]._id}, 'aman', { expiresIn: '1h' });
    res.json(token);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = api;
