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
    // Step 1: Validate input
    if (!userName || !date || !time || !locationLogs?.length || !month || !year) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Step 2: Check for calendar entry
    const calendar = await Calenders.findOne({ month, year });
    if (!calendar) {
      return res.status(404).json({ message: "Working calendar not found" });
    }

    // Step 3: Validate working day
    const inputDateStr = new Date(date).toDateString();
    const isWorkingDay = calendar.dayCalander.find(day => {
      const dayDateStr = new Date(day.date).toDateString();
      return dayDateStr === inputDateStr && day.dayType === 1;
    });

    if (!isWorkingDay) {
      return res.status(400).json({ message: "Selected date is not a working day" });
    }

    // Step 4: Validate user location
    const userLocation = locationLogs[0];
    if (!userLocation?.latitude || !userLocation?.longitude) {
      return res.status(400).json({ message: "Invalid user location" });
    }

    // Step 5: Check for existing attendance
    const exist = await Attendances.findOne({ userName, date });
    if (exist) {
      return res.status(400).json({ message: "Attendance already exists for this user on this date" });
    }

    // Step 6: Geofencing
    const geofenceCenter = { latitude: 22.544384, longitude: 88.358912 };
    const geofenceRadius = 10000;
    const distance = geolib.getDistance(userLocation, geofenceCenter);
    const isInside = distance <= geofenceRadius;

    // Step 7: Save attendance
    const attendanceStatus = isInside ? 'check-in' : 'check-out';

    const attendance = new Attendances({
      userName,
      date,
      status: attendanceStatus,
      time: time,
      locationLogs,
      locationName,
      month,
      year
    });

    await attendance.save();

    const message = isInside
  ? "Attendance marked successfully"
  : "Attendance marked successfully, but user is outside the allowed geofence location.";


    return res.status(200).json({
      message,
      status: attendanceStatus,
      distance,
    });

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
    res.status(201).json(existing);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

async function daymonthYearUsername (req, res) {
  const {userName,month,year,date} = req.body;

  if (!userName|| !month || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existing = await Attendances.findOne({userName,month,year,date});
    if (!existing) {
      return res.status(400).json({ message: "Attendence not exists for this user" });
    }
    res.status(201).json(existing);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


async function GetDataBYDay(req,res){
  const {date}=req.body;
  try {
    const DataBYDay = await Attendances.find({date});
    if(DataBYDay===0){
      return res.status(400).json("day data not found ");
    }
    res.json(DataBYDay)
  } catch (error) {
     console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}


module.exports = { markAttendances,getAllAttendance,monthAttendance,yearAttendances,getUserDatas,
        monthYearAttendance,monthYearUsername,GetDataBYDay,daymonthYearUsername };
