const express = require('express');
const authenticationRoutes = require("./routes/AuthenticationRoutes")
const employeeRoutes =require("./routes/EmployeeRoutes")
const managerRoutes =require("./routes/ManagerRoutes")
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");


const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', authenticationRoutes);
app.use('/api',employeeRoutes );
app.use('/api',managerRoutes)

require("./config/conn");

app.use('/api', leaveRequestRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// hi i am sushant