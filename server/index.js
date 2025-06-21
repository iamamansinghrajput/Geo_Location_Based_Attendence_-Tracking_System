const express = require('express');
const authenticationRoutes = require("./routes/AuthenticationRoutes")
const employeeRoutes =require("./routes/EmployeeRoutes")
const managerRoutes =require("./routes/ManagerRoutes")
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");
const monthlyReportRoutes = require("./routes/monthlyReportRoutes");
const resignationRoutes = require("./routes/resignationRoutes");
const adminAuthenticationRoutes = require("./routes/adminAuthenticationRoutes");

const userMonthReport = require("./routes/userMonthReport")
const adminRoutes = require("./routes/AdminRoutes");
const genralDataRoutes =require("./routes/GenralDataRoutes");
const attendanceRoutes=require("./routes/AttendanceRoutes");
const noticeRouter =require("./routes/NoticeRoutes");

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', authenticationRoutes);
app.use('/api',employeeRoutes );
app.use('/api',managerRoutes)
app.use('/api', leaveRequestRoutes);
app.use('/api', monthlyReportRoutes);
app.use('/api', resignationRoutes);
app.use('/api', adminAuthenticationRoutes);

app.use('/api',userMonthReport);
app.use('/api',adminRoutes);
app.use('/api',genralDataRoutes);
app.use('/api',attendanceRoutes);
app.use('/api',noticeRouter);



require("./config/conn");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
