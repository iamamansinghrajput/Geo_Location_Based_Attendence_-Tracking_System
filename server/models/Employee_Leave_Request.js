const mangooes = require('mangooes');
const EmployeeLeaveRequestSchema = new mongooes.Schema(
    {       // _id is acts as primary key that will be automatcally created by mangooDB
        UserId : {
            type: String,
            required: true,
        },
        Leave_Starting_Data : {
            type: Date,
            required: true,
        },
        Leave_Ending_Date : {
            type: Date,
            required: true,
        },
        Leave_Reason : {
            type: String,
            required: true,
        },
        Leave_Approval_Status : {
            type: String ['Pending', 'Approved', 'Rejected'],
            default: 'Pending',
        },
        Admin_Send_Note : {
            type: String,
        },
        Leave_Approved_By_AdminId : {   
            type: String      // Admin who approved the Leave of User
        },
        Leave_Request_Date : {
            type: Date,
            default: Date.now    // Submission_Day date (Automatically Filled)
        },
        MessageByUser : {
            type: String,           // User send a note to Admin to Grant his/her Leave
        }
    }
)
let Employee_Leave_Request = mongoose.model('Employee_Leave_Request', EmployeeLeaveRequestSchema);
module.exports = Employee_Leave_Request;