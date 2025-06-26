const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const authenticationRoutes = require("./Routes/AuthenticationRoutes")
const employeeRoutes =require("./Routes/EmployeeRoutes")
const managerRoutes =require("./Routes/ManagerRoutes")
const leaveRequestRoutes = require("./Routes/leaveRequestRoutes");
const monthlyReportRoutes = require("./Routes/monthlyReportRoutes");
const resignationRoutes = require("./Routes/resignationRoutes");
const base = require("./Routes/Base");
const userMonthReport = require("./Routes/userMonthReport");
const adminRoutes = require("./Routes/AdminRoutes");
const genralDataRoutes =require("./Routes/GenralDataRoutes");
const attendanceRoutes=require("./routes/AttendanceRoutes");
const noticeRouter =require("./routes/NoticeRoutes");
const trackingRoutes =require("./Routes/TrackingRoutes");
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
app.use('/api', authenticationRoutes);
app.use('/api',employeeRoutes );
app.use('/api',managerRoutes)
app.use('/api', leaveRequestRoutes);
app.use('/api', monthlyReportRoutes);
app.use('/api', resignationRoutes);
app.use('/api',userMonthReport);
app.use('/api',adminRoutes);
app.use('/api',genralDataRoutes);
app.use('/api',attendanceRoutes);
app.use('/api',noticeRouter);
app.use('/api',trackingRoutes);


app.listen(port, () =>{
    console.log('Server Is running at localhost:'+port)
})  