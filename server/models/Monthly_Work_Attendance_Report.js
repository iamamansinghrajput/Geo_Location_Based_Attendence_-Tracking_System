const mangooes = require('mangoose');
let MonthlyWorkAttendanceReportSchema = new mangooes.schema (
    {
        UserId : {
            type: mangooes.schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        Month_Report : {
            type: Number,
            min : 1, max : 12,
            required: true
        },
        Year_Report : {
            type: Number,
            required: true
        },
        Total_Working_Days_InMonth : {
            type: Number,
            default: 0
        },
        Total_Holiday : {
            type: Number,
            default: 0
        },
        Present_Days : {
            type: Number,
            default: 0
        },
        Absent_Days : {
            type: Number,
            default: 0
        },
        Take_Leave_Days : {
            type: Number,
            default: 0
        },
        Late_Days : {
            type: Number,
            default: 0
        },
        Half_Working_Days : {
            type: Number,
            default: 0
        },
        Average_CheckInTime : {
            type: String,
            default: Null
        },
        Average_CheckOutTime : {
            type: String,
            default: Null
        },
        Monthly_Working_Hours : {
            type: Number,
            default: 0
        },
        Average_Daily_WorkHours : {
            type: Number,
            default: 0
        },
        CreatedAt : {
            type: Date,
            default: Date.now
        },
        UpdatedAt : {
            type: Date,
            default: Date.now
        }
    }
)
let Monthly_Work_Attendance_Report = new mongoose.model('Monthly_Work_Attendance_Report', MonthlyWorkAttendanceReportSchema);
module.export = Monthly_Work_Attendance_Report;












