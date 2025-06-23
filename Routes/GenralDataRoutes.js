const express =require("express");
const api =express.Router();
const {allcalenders,monthCalender} = require("../controllers/GenralDataController");
const employeeMiddleware = require("../Middleware/employeeAuthentication");

api.get("/getAllCalender",employeeMiddleware,allcalenders);
api.post("/getCalender/:month",employeeMiddleware,monthCalender);

module.exports=api;