const mongoose = require('mongoose');
let MonthlyWorkAttendanceReportSchema = new mangoose.Schema (
    {
        userId : {
            type: String,
            required: true
        },
        month : {
            type: Number,
            min : 1, max : 12,
            required: true
        },
        year : {
            type: Number,
            required: true
        },
        workingDaysInMonth : {          // total working days in month
            type: Number,
            default: 0
        },
        holiday : {                     // total number of Holidays
            type: Number,
            default: 0
        },
        leaveDays : {                   
            type: Number,
            default: 0
        },
        lateDays : {                            // late come
            type: Number,
            default: 0
        },
        halfWorkingDays : {
            type: Number,
            default: 0
        },
        createdAt : {
            type: Date,
            default: Date.now
        },
        updatedAt : {
            type: Date,
            default: Date.now
        }
    }
)
let monthlyWorkAttendanceReport = mongoose.model('monthlyWorkAttendanceReport', MonthlyWorkAttendanceReportSchema);
module.exports = monthlyWorkAttendanceReport;












