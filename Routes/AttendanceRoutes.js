const express =require("express");
const api = express.Router();
const { markAttendances, getAllAttendance, monthAttendance, yearAttendances, 
            getUserDatas, monthYearAttendance, monthYearUsername,GetDataBYDay,daymonthYearUsername } = require("../controllers/AttendanceController");
const employeeMiddleware = require("../Middleware/employeeAuthentication");


api.post("/markAttendance",markAttendances);
api.get("/getAllAttendance",getAllAttendance);
api.get("/getAllAttendanceByMonth",monthAttendance);
api.get("/getAllAttendanceByYear",yearAttendances);
api.get("/getAllAttendanceByUsername",getUserDatas);
api.get("/getAllAttendanceByMonthAndYear",monthYearAttendance);
api.post("/getAttendanceByUsernameWithMonthAndYear",monthYearUsername);
api.post("/getAttendanceByUsernameWithDayMonthAndYear",daymonthYearUsername);
api.post("/attendanceByDay",GetDataBYDay);

module.exports=api;