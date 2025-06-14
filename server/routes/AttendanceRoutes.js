const express =require("express");
const api =express.Router();
const {markAttendances,getAllAttendance,monthAttendance,yearAttendances,
            getUserDatas,monthYearAttendance,monthYearUsername} = require("../controllers/AttendanceController");

api.post("/markAttendance",markAttendances);
api.get("/getAllAttendance",getAllAttendance);
api.get("/getAllAttendanceByMonth",monthAttendance);
api.get("/getAllAttendanceByYear",yearAttendances);
api.get("/getAllAttendanceByUsername",getUserDatas);
api.get("/getAllAttendanceByMonthAndYear",monthYearAttendance);
api.get("/getAttendanceByUsernameWithMonthAndYear",monthYearUsername);

module.exports=api;