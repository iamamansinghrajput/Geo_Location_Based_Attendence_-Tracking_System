const express =require("express");
const api =express.Router();
const {markAttendances,getAllAttendance,monthAttendance,yearAttendances,
            getUserDatas,monthYearAttendance,monthYearUsername} = require("../controllers/AttendanceController");
const employeeMiddleware = require("../middleware/employeeAuthentication");

api.post("/markAttendance",employeeMiddleware,markAttendances);
api.get("/getAllAttendance",getAllAttendance);
api.get("/getAllAttendanceByMonth",monthAttendance);
api.get("/getAllAttendanceByYear",yearAttendances);
api.get("/getAllAttendanceByUsername",employeeMiddleware,getUserDatas);
api.get("/getAllAttendanceByMonthAndYear",monthYearAttendance);
api.get("/getAttendanceByUsernameWithMonthAndYear",employeeMiddleware,monthYearUsername);

module.exports=api;