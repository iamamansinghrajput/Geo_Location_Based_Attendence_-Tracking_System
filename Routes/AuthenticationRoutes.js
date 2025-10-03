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
       permanentAddress
        } = req.body;

  try {
    const existingUser = await Userr.find({ email: email });

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    const user = new Userr({
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
       status: "pending",
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
    if(email==="trikz" && password==="admin123"){
      const token = jwt.sign({id:"12233"}, 'aman', { expiresIn: '1h' });
    res.cookie("token", token, {
          httpOnly: true,
          secure: true,                  // required for cross-site cookies over HTTPS
          sameSite: 'none'  // Enable secure flag in production
      });
        res.json({
          gotuser
        })

    }
    const existinguser = await Userr.find({ email: email });
        if(existinguser.length===0){
            res.json("user not found");
            return ;
        }
    let gotuser=existinguser[0];
        let pass=gotuser.password;

    if (gotuser.status !== "approved") {
      return res.status(403).json({ message: "User not approved by admin" });
    }

    const isPasswordValid = await bcrypt.compare(password, pass);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({id:existinguser[0]._id}, 'aman', { expiresIn: '1h' });
    res.cookie("token", token, {
          httpOnly: true,
          secure: true,                  // required for cross-site cookies over HTTPS
          sameSite: 'none'  // Enable secure flag in production
      });
        res.json({
          gotuser
        })

  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = api;
