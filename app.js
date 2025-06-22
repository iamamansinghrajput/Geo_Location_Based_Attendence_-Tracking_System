const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./routes/AuthenticationRoutes")
const employeeRoutes =require("./routes/EmployeeRoutes")
const managerRoutes =require("./routes/ManagerRoutes")
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");
const monthlyReportRoutes = require("./routes/monthlyReportRoutes");
const resignationRoutes = require("./routes/resignationRoutes");
const base = require("./routes/Base")
const userMonthReport = require("./routes/userMonthReport")
const adminRoutes = require("./routes/AdminRoutes");
const genralDataRoutes =require("./routes/GenralDataRoutes");
const attendanceRoutes=require("./routes/AttendanceRoutes");
const noticeRouter =require("./routes/NoticeRoutes");
const trackingRoutes =require("./routes/TrackingRoutes")
const app = express(); 
const port = 3005;
 
app.use(cors({
  origin: ["http://localhost:5173"], 
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
 
require("./config/conn");

app.use('', base);

app.listen(port, () =>{
    console.log('Server Is running at localhost:'+port)
})  