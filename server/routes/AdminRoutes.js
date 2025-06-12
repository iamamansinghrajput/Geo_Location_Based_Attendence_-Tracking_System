const express =require("express");
const api =express.Router();
const {monthlyCalanders,updateCalender,deletecalender} = require("../controllers/AdminController");

api.post("/addCalender",monthlyCalanders);
api.post("/updateCalender",updateCalender);
api.delete("/DeleteCalender",deletecalender);
module.exports=api;