const express = require("express");
const api = express.Router();
const { employeeAddLeaveRequest, seeAllLeaveRequest, findLeaveRequestByProvidedId } = require("../controllers/leaveRequestControllers")

api.post('/addLeaveRequest', employeeAddLeaveRequest);
api.get('/getAllLeaveRequest', seeAllLeaveRequest);
api.get('/getLeaveRequestByid/:id', findLeaveRequestByProvidedId);

module.exports = api;