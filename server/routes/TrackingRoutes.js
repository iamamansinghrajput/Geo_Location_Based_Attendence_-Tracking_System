const express =require("express");
const api =express.Router();
const {liveTracking,CurrentLocations,totralHours} = require("../controllers/TrackingController");

api.post("/liveTracking",liveTracking);
api.get("/currentLocation",CurrentLocations);
api.get("/workingHours",totralHours);
module.exports=api;