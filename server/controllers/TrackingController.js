const { response } = require("express");
const Attendances = require("../models/Attendance");
const geolib = require("geolib");

async function liveTracking(req, res) {
  const { userName, date, time, locationLogs } = req.body;

  try {
    const checkUser = await Attendances.findOne({ userName, date });

    if (!checkUser) {
      return res.status(400).json({ message: "Particular day user attendance does not exist" });
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

    checkUser.status.push(attendanceStatus);
    checkUser.time.push(new Date(time));
    checkUser.locationLogs.push(userLocation); 

    await checkUser.save();

    return res.status(200).json(checkUser);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function CurrentLocations(req,res) {
    const { userName, date} = req.body;
   try {
    const CurrentLocation = await Attendances.findOne({ userName, date });

    if (!CurrentLocation) {
      return res.status(400).json({ message: "Particular day user attendance does not exist" });
    }
      const logs = CurrentLocation.locationLogs;
    if (logs.length === 0) {
      return res.status(404).json({ message: "No location logs found" });
    }

    const lastLocation = logs[logs.length - 1]; 
    res.json(lastLocation);

   } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
   } 
}

//Create an api to get employee working hours from time stamp and check in out status

async function totralHours(req,res){
     const { userName, date } = req.body;
     try {
          const totralHour = await Attendances.findOne({ userName, date });

        if (!totralHour) {
        return res.status(404).json({ message: "Attendance not found for this user on this date" });
        }
        const record = totralHour.status;
        let count=0;
        for (let i = 0; i < record.length; i++){
            if(record[i]==="check-in"){
                count++;
            }
        }
        res.status(200).json(count);

     } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
     }
}


module.exports = { liveTracking,CurrentLocations,totralHours };
