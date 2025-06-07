const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  
username: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  locationlogs: [
    {
        type: {
            type: String,
            enum: ['check-in','check-out'],
        },
        time: {
            type: date,
        },
        location: {
            latitude:{
                type: Number,
            },
            longitude:{
                type: Number,
            }
        }
   }
  ],
  locationname: {
    type: [string],
  },

createdAt: {
    type: Date,
    default: Date.now,
  },
updatedAt:{
     type: Date,
    default: Date.now,
}

});

const Attendance = mongoose.model('Attendance', AttendanceSchema);
module.exports = Attendance;