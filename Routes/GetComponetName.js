const express = require('express');
const ComponentName = require('../Models/ComponentsName')

const api = express.Router();

const apicall = async (req, res) => {
    try {
        const response = await ComponentName.find();
        res.status(200).json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Internal Server Error" });
    }  
} 

api.get('/getComponentName', apicall);

module.exports = api;
 

  