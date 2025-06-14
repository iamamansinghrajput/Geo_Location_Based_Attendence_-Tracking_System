const express = require('express');
const authenticationRoutes = require("./routes/AuthenticationRoutes")
const employeeRoutes =require("./routes/EmployeeRoutes")
const managerRoutes =require("./routes/ManagerRoutes")
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");
const monthlyReportRoutes = require("./routes/monthlyReportRoutes");
<<<<<<< HEAD
//
const userMonthReport = require("./routes/userMonthReport")
=======
const adminRoutes = require("./routes/AdminRoutes");
const genralDataRoutes =require("./routes/GenralDataRoutes")

>>>>>>> 39647b63d9373c0e6dc1cc277005f87aef7f51af

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', authenticationRoutes);
app.use('/api',employeeRoutes );
app.use('/api',managerRoutes)
app.use('/api', leaveRequestRoutes);
app.use('/api', monthlyReportRoutes);
<<<<<<< HEAD
app.use('/api',userMonthReport);
=======
app.use('/api',adminRoutes);
app.use('/api',genralDataRoutes);
>>>>>>> 39647b63d9373c0e6dc1cc277005f87aef7f51af


require("./config/conn");
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// hi i am sushant