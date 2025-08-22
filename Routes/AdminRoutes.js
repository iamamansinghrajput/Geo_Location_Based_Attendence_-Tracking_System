const express =require("express");
const api =express.Router();
const {monthlyCalanders,updateCalender,deletecalender,changeRoles} = require("../controllers/AdminController");
const userAuthenticationValidation = require("../Middleware/adminAuthentication");


api.post("/addCalender",monthlyCalanders);
api.post("/updateCalender",updateCalender);
api.delete("/DeleteCalender", deletecalender);
api.post("/assignRoles", changeRoles);

module.exports = api;