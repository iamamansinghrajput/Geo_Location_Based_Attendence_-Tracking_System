const mongoose = require('mongoose');
const EmployeeLeaveRequestSchema = new mongoose.Schema(
    {       // _id is acts as primary key that will be automatcally created by mangooDB
        userId : {
            type: String,
            required: true
        },
        startingDate : {
            type: Date,
            required: true
        },
        endingDate : {
            type: Date,
            required: true
        },
        reason : {
            type: String,
            required: true
        },
        approvalStatus : {
            type: String ['Pending', 'Approved', 'Rejected'],
            default: 'Pending'
        },
        adminSendNote : {
            type: String
        },
        adminId : {   
            type: String      // Admin who approved the Leave of User
        },
        requestedDate : {
            type: Date,
            default: Date.now    // Submission_Day date (Automatically Filled)
        },
        message : {
            type: String           // User send a note to Admin to Grant his/her Leave
        }
    }
)
let employeeLeaveRequest = mongoose.model('employeeLeaveRequest', EmployeeLeaveRequestSchema);
module.exports = employeeLeaveRequest;