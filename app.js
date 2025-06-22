const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const base = require('./Routes/Base'); 
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

app.listen(port, () =>{
    console.log('Server Is running at localhost:'+port)
})  