const express = require('express');
const addComponentName = require('./Routes/AddComponentName');
const getComponentName = require('./Routes/GetComponetName');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const base = require('./Routes/base'); 
const app = express(); 
const port = 3005;
 
app.use(cors({
  origin: ["http://localhost:5173"], 
  credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
 
require("./db/conn");

app.use('', base);
app.use('/api', addComponentName);
app.use('/api', getComponentName);

app.listen(port, () =>{
    console.log('Server Is running at localhost:'+port)
})  