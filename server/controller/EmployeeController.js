const userr = require("../models/User");

async function pendingRegistration(req, res) {
    try {
        const pendingUsers = await userr.find({status:"pending"});
        if(pendingUsers.length === 0){
           return res.json("no pending usersfound");
            
        }
        res.json(pendingUsers);
        
    } catch (error) {
        res.json(error);
        res.json("internal server error")
    }
}

module.exports= pendingRegistration;