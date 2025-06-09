const employeeLeaveRequest = require("../models/employeeLeaveRequest");
// const express = require("express");
// const app = express.Router();

//  In this Function you can add all Leaving Request
// app.post('/addLeaveRequest', employeeAddLeaveRequest);
async function employeeAddLeaveRequest (req, res) {
    try {
        let { userId, startingDate, endingDate, reason, requestedDate, message } = req.body;
        let leaveRequest = new employeeLeaveRequest ( {
            userId,
            startingDate,
            endingDate,
            reason,
            requestedDate,
            message    
        } );
        await leaveRequest.save();
        console.log(leaveRequest);
        res.json("Your data is saved successfully");
    } 
    catch (error) {
        res.json(error);
    }
    
}

//  In this Function you see/get all Leaving Request
// app.get('/getAllLeaveRequest', seeAllLeaveRequest);
async function seeAllLeaveRequest(req, res) {
    try {
        const allLeaveRequest = await employeeLeaveRequest.find();
        res.json(allLeaveRequest);
    }
    catch (error) {
        res.json(error);
    }
}


//  In this Function you can see the details of one leave at a time but not all. You give the UserID of that leave request which you want to see
  // app.get('/getLeaveRequestByid/:id', findLeaveRequestByProvidedId);
async function findLeaveRequestByProvidedId (req, res) {
    try {
        const oneLeaveRequest = await employeeLeaveRequest.findById(req.params.id);  // Find By Id and that Id is send throurh link

        if(oneLeaveRequest) {
            res.json(oneLeaveRequest);
        }
        else {
            res.status(404).json("Leave Request of Given UserId is Not Found");
        }

    }
    catch (error) {
        res.json(error);
    }
}

// Export all functions
module.exports = {
    employeeAddLeaveRequest, 
    seeAllLeaveRequest,
    findLeaveRequestByProvidedId
}