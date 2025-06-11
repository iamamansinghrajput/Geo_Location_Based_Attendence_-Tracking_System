const Attendance = require("../models/Attendance");

//Create an api to get list of monthly calenders

async function allAttendences(req, res) {
    try {
    const allAttendence = await Attendance.find();
    res.status(201).json(allAttendence);   
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

module.exports ={allAttendences};