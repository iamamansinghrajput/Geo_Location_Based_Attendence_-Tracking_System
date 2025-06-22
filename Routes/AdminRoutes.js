const express =require("express");
const api =express.Router();
const {monthlyCalanders,updateCalender,deletecalender,changeRoles} = require("../controllers/AdminController");
const userAuthenticationValidation = require("../middleware/adminAuthentication");


api.post("/addCalender", userAuthenticationValidation, monthlyCalanders);
api.post("/updateCalender", userAuthenticationValidation, updateCalender);
api.delete("/DeleteCalender", userAuthenticationValidation, deletecalender);
api.post("/assignRoles", userAuthenticationValidation, changeRoles);

module.exports = api;