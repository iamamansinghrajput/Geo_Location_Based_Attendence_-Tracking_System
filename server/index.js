const express = require('express');
const authenticationRoutes = require("./routers/AuthenticationRoutes")

const app = express();
const port = 4000;

app.use(express.json());
app.use('/api', authenticationRoutes);


require("./config/conn");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
