   const express = require("express");
   const api =express.Router();
   const { workingEmployes, approvedEmployes ,rejectEmployes, terminateEmployes, getEmployeeByUsername, getDashboardStats} = require("../controllers/ManagerController")

    api.get("/getEmployes",workingEmployes);
    api.get("/approveRegistration",approvedEmployes);
    api.get("/rejectRegistration",rejectEmployes);
    api.get("/terminateEmployee",terminateEmployes); 
   api.post("/getEmployeeByUsername", getEmployeeByUsername);
   api.get("/dashboardStats", getDashboardStats);

    module.exports =api;