const mongoose = require('mongoose');

const workingCalendarSchema = new mongoose.Schema({
  companyId: {
    type: string,
    required: true
  },
  year: { 
    type: number,
    required: true
  }, 
  month: {
    type: string,
    required: true
  },
  dayCalander: [
    {
         date: {
            type: Date,
            required: true,
            unique: false
        },
        dayType: {
            type: String,
            required: true
        },
        title: {
            type: String ,
        },
        description: {
            type: String ,
        }
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('WorkingCalendar', workingCalendarSchema);
