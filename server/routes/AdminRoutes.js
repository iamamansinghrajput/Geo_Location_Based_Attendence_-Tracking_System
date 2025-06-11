const express =require("express");
const api =express.Router();
const {monthAttendences} = require("../controllers/AdminController");

api.post("/addCalender",monthAttendences);


module.exports=api;