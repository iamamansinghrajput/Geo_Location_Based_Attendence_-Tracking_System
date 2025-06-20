const userr = require("../models/User");

//create an api to get the list of all pending employee registration
async function workingEmployes(req, res) {
    try {
        const workingEmploye = await userr.find({status:"approved"});
        if(workingEmploye.length === 0){
            return res.json("no approved usersfound");
        }
        res.json(workingEmploye);
        
    } catch (error) {
        res.json(error);
        res.json("internal server error")
    }
}

//Create an api to accept employee registration. API will help to verify the employee registration by changing its status from pending to approved


async function approvedEmployes(req, res){
    let {userName} = req.body;
    try {
          const approvedEmploye = await userr.findOne({userName});
          if(!approvedEmploye){
            return res.json("user not found");
        }
        if(approvedEmploye.status==="approved"){
            return res.json("user is already approved");
        }
        approvedEmploye.status="approved";
         await approvedEmploye.save();
         res.json("user approved successfully");

        
    } catch (error) {
           console.error(error);
            return res.status(500).json("internal server error");
    }
}
//Create an api to Reject employee registration. API will help to Reject the employee registration by changing its status from pending to Rejected

async function rejectEmployes(req, res){
    const {userName} = req.body;
    try {
          const rejectEmploye = await userr.findOne({userName});
          if(!rejectEmploye){
            return res.json("user not found");
        }
        if(rejectEmploye.status==="rejected"){
            return res.json("user is already rejected");
        }
        rejectEmploye.status="rejected";
         await rejectEmploye.save();
         res.json("user rejected successfully");

        
    } catch (error) {
           console.error(error);
            return res.status(500).json("internal server error");
    }
}

//Create an api to Remove employee registration. API will help to terminate the employee registration by changing its status from active to terminated



async function terminateEmployes(req, res){
    const {userName} = req.body;
    try {
          const terminateEmploye = await userr.findOne({userName});
          if(!terminateEmploye){
            return res.json("user not found");
        }
        if(terminateEmploye.status==="Terminated"){
            return res.json("user is already terminated");
        }
        terminateEmploye.status="Terminated";
         await terminateEmploye.save();
         res.json("user terminated successfully");

        
    } catch (error) {
           console.error(error);
            return res.status(500).json("internal server error");
    }
}

module.exports= {
                workingEmployes,
                approvedEmployes,
                rejectEmployes,
                terminateEmployes};