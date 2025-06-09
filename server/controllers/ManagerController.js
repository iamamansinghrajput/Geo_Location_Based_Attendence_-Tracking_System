const userr = require("../models/User");

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

module.exports= workingEmployes;