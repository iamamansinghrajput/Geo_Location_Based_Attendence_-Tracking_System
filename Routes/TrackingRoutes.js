const express =require("express");
const api =express.Router();
const {liveTracking,CurrentLocations,totralHours} = require("../controllers/TrackingController");
const employeeMiddleware = require("../Middleware/employeeAuthentication");

api.post("/liveTracking",employeeMiddleware,liveTracking);
api.get("/currentLocation",employeeMiddleware,CurrentLocations);
api.get("/workingHours",employeeMiddleware,totralHours);
module.exports=api;