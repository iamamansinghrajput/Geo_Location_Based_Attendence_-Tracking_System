// index.js
const express = require("express");
const leaveRequestRoutes = require("./routes/leaveRequestRoutes");

const app = express();
const port = 4000;

app.use(express.json());

require("./config/conn");

app.use('/api', leaveRequestRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// hi i am sushant