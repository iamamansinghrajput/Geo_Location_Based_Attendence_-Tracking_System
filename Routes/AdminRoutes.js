const express =require("express");
const api =express.Router();
const {monthlyCalanders,updateCalender,deletecalender,changeRoles} = require("../controllers/AdminController");
const userAuthenticationValidation = require("../Middleware/adminAuthentication");


api.post("/addCalender",monthlyCalanders);
api.post("/updateCalender", userAuthenticationValidation, updateCalender);
api.delete("/DeleteCalender", userAuthenticationValidation, deletecalender);
api.post("/assignRoles", userAuthenticationValidation, changeRoles);

module.exports = api;