const express =require("express");
const api =express.Router();
const {markAttendances,getAllAttendance,monthAttendance} = require("../controllers/AttendanceController");

api.post("/markAttendance",markAttendances);
api.get("/getAllAttendance",getAllAttendance);
api.get("/getAllAttendanceByMonth",monthAttendance);
module.exports=api;