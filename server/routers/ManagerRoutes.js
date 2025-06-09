    const express = require("express");
    const api =express.Router();
    const managerController = require("../controller/ManagerController")

    api.get("/getEmployes",managerController);
     
    module.exports =api;