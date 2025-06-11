const express =require("express");
const api =express.Router();
const {allAttendences} = require("../controllers/GenralDataController");

api.get("/getAllCalenderr",allAttendences);


module.exports=api;