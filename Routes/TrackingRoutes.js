const express =require("express");
const api =express.Router();
const {liveTracking,CurrentLocations,totralHours} = require("../controllers/TrackingController");
const employeeMiddleware = require("../Middleware/employeeAuthentication");

api.post("/liveTracking",liveTracking);
api.get("/currentLocation",CurrentLocations);
api.get("/workingHours",totralHours);
module.exports=api;