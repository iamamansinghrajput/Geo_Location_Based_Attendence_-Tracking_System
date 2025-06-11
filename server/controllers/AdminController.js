const Attendance = require("../models/Attendance");

//Create an api to create monthly attendance callender

async function monthAttendences(req, res){
    const {
        userName,
        date,
        locationLogs,
        locationName
       } = req.body;
       try {
        const monthAttendence = await Attendance.find({userName});
        if(monthAttendence.length>0){
            return res.json("month attendence allready created");
        }
        const userAttendence = new Attendance({
        userName,
        date,
        locationLogs,
        locationName});
        await userAttendence.save();
        res.status(201).json(userAttendence);
       } catch (error) {
        res.status(500).status("internal server error");
       }
}


module.exports={monthAttendences};