const express = require('express');
const ComponentName = require('../Models/ComponentsName')

const api = express.Router();

const apicall = async (req, res) => {
    try{
        const {parent, title, slno} = req.body;
        if(!parent || !title || !slno){
            return res.status(400).json({message: "All fields are required"});
        }
        const newComponent = new ComponentName({
            Parent: parent,
            title: title,
            slno: slno
        })
        await newComponent.save();
        res.status(201).json({message: "Component added successfully", component: newComponent});

    }
    catch(error){
        console.error(error);
        res.status(500).json({message: "Internal Server Error"});
    }
}

api.post('/addComponentName', apicall);

module.exports = api;


