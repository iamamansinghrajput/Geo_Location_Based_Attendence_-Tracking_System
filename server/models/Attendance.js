const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  
userName: {
    type: String,
    required: true,
  },
  date: {
    type: date,
    required: true,
  },
  locationLogs: [
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
  locationName: {
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