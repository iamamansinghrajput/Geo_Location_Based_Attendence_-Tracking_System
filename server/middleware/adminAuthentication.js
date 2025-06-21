const jwt = require('jsonwebtoken');
const User = require('../models/User');
const express = require('express');

async function userAuthenticationValidation(req, res, next) {
    try {
        let token = req.cookies.token;
        if(!token) {
            res.status(401).json("User is Unauthorized");
        }

        const decoded = jwt.verify(token, 'aman');
        const user = await User.findById(decoded.id);

        if(!user) {
            res.status(401).json("User is Unauthorized");
        }

        if((user.role === "admin" || user.role === "employee" || user.role === "manager") && user.status === "active") {
            req.user = {
                userId : user._id,
                userName : user.userName,
                role : user.role,
                status : user.status
            };
            next();
        }
        else {
            res.status(403).json("Not Authorized Or Inactive");
        }

    } 
    catch (error) {
        res.status(500).json("Server error");
    } 
} 

module.exports = userAuthenticationValidation ;