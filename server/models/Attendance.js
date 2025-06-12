const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  locationLogs: [
    {
      type: {
        type: String,
        enum: ['check-in', 'check-out'],
      },
      time: {
        type: Date,
      },
      location: {
        latitude: {
          type: Number,
        },
        longitude: {
          type: Number,
        }
      }
    }
  ],
  locationName: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

const Attendance = mongoose.model('Attendance', AttendanceSchema);
module.exports = Attendance;
