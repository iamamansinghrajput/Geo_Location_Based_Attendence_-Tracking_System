const Attendances = require("../models/Attendance");
const Calenders = require("../models/workingCalander");
const geolib = require("geolib");

async function markAttendances(req, res) {
  const {
    userName,
    date,
    time,
    locationLogs,
    locationName,
    month,
    year
  } = req.body;

  try {
    // Validate required fields
    if (!userName || !date || !time || !locationLogs || !month || !year) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Step 1: Check if the calendar for the given month/year exists
    const calendar = await Calenders.findOne({ month, year });
    if (!calendar) {
      return res.status(404).json({ message: "Working calendar not found" });
    }

    // Step 2: Check if the selected date is a working day
    const inputDateStr = new Date(date).toDateString();
    const isWorkingDay = calendar.dayCalander.find(day => {
      const dayDateStr = new Date(day.date).toDateString();
      return dayDateStr === inputDateStr && day.dayType === 1;
    });

    if (!isWorkingDay) {
      return res.status(400).json({ message: "Selected date is not a working day" });
    }

    const geofenceCenter = {
      latitude: 22.5726,
      longitude: 88.3639
    };

    const geofenceRadius = 100; 
    const userLocation = locationLogs[0];

    if (!userLocation || !userLocation.latitude || !userLocation.longitude) {
      return res.status(400).json({ message: "Invalid user location" });
    }

    const distance = geolib.getDistance(userLocation, geofenceCenter);
    const isInside = distance <= geofenceRadius;

   const attendanceStatus = isInside ? 'check-in' : 'check-out';

    let exist = await Attendances.findOne({ userName, date });
    if (exist) {
      return res.status(400).json({ message: "Attendance already exists for this user on this date" });
    }
    const attendance = new Attendances({
      userName,
      date,
      status: attendanceStatus,
      time: new Date(time),
      locationLogs,
      locationName,
      month,
      year
    });

    await attendance.save();
    return res.status(200).json({ message: " Attendance marked successfully" });

  } catch (err) {
    console.error("Attendance Error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

//get all data

async function getAllAttendance(req, res) {
    try {
        const allAttendance = await Attendances.find({});
        res.json(allAttendance);
        
    } catch (error) {
        res.json(error);
        res.json("internal server error")
    }
}

//Get the all attendance entries from database of  month

async function monthAttendance (req, res) {
  const {month} = req.body;

  if (!month) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existing = await Attendances.findOne({month});
    if (!existing) {
      return res.status(400).json({ message: "Attendence not exists for this month" });
    }
    res.status(201).json({existing});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Get the all attendance entries from database of a perticular year
async function yearAttendances (req, res) {
  const {year} = req.body;

  if (!year) {
    return res.status(400).json({ message: " yrar not find " });
  }

  try {
    const yearAttendance = await Attendances.findOne({year});
    if (!yearAttendance) {
      return res.status(400).json({ message: "Attendence not exists for this year" });
    }
    res.status(201).json({yearAttendance});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Get the all attendance entries from database of a userName
async function getUserDatas(req, res) {
    const {userName} =req.body;
    try {
        const getUserData = await Attendances.find({userName});
        if(!getUserData){
            return res.json("user not found");
        }
        res.json(getUserData);
        
    } catch (error) {
        res.json(error);
        res.json("internal server error")
    }
}

//Get the all attendance entries from database by month and year
async function monthYearAttendance (req, res) {
  const {month,year} = req.body;

  if (!month || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existing = await Attendances.findOne({month,year});
    if (!existing) {
      return res.status(400).json({ message: "Attendence not exists for this month" });
    }
    res.status(201).json({existing});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Get all attendance by username with month and year
async function monthYearUsername (req, res) {
  const {userName,month,year} = req.body;

  if (!userName|| !month || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existing = await Attendances.findOne({userName,month,year});
    if (!existing) {
      return res.status(400).json({ message: "Attendence not exists for this user" });
    }
    res.status(201).json({existing});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = { markAttendances,getAllAttendance,monthAttendance,yearAttendances,getUserDatas,
        monthYearAttendance,monthYearUsername };
