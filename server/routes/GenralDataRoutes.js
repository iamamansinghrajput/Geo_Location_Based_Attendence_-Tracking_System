const express =require("express");
const api =express.Router();
const {allcalenders,monthCalender} = require("../controllers/GenralDataController");

api.get("/getAllCalender",allcalenders);
api.post("/getCalender/:month",monthCalender);

module.exports=api;