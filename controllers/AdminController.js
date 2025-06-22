const Calanders = require("../models/workingCalander");
const Userr = require("../models/User");
//Create an api to create monthly attendance callender

async function monthlyCalanders(req, res){
    const {
        year,
        month,
        dayCalander
       } = req.body;
       try {
        const monthlyCalander = await Calanders.findOne({ year, month }); 
        if(monthlyCalander){
            return res.json("month calender allready created");
        }
        const oneMonth = new Calanders({
        year,
        month,
        dayCalander});
        await oneMonth.save();
        res.status(201).json(oneMonth);
       }  catch (error) {
                console.error("Error creating calendar:", error);
                res.status(500).json({ error: "Internal server error", details: error.message });
}
}

//Create an api to update monthly calender

async function updateCalender (req, res) {
  const {
        year,
        month,
        dayCalander
       } = req.body;

  if (!year || !month || !dayCalander) {
    return res.status(400).json({ message: "Missing required data"});
  }

  try {
    const existing = await Calanders.findOne({year, month});
    if (!existing) {
      return res.status(400).json({ message: "Calendar not exists for this month" });
    }
    existing.dayCalander = dayCalander;

    existing.updatedAt = new Date();
    await existing.save();
    res.status(201).json("SUCCESSFULL UPDATE");

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

//Create an api to Delete monthly calender
async function deletecalender(req, res) { 
    try {
        const {
        year,
        month
       } = req.body;
        const existing = await Calanders.findOne({year, month});
        if (!existing) {
        return res.status(400).json({ message: "Calendar not exists for this month" });
       }
        await Calanders.deleteOne({year, month});
        res.json("Deleted Successfully");
    } catch (error) {
        res.json(error);
    }
}

async function changeRoles(req,res) {
  const {userName,role} = req.body;
  try {
    const changeRole = await Userr.findOne({userName});
    if(!changeRole){
      return res.status(400).json("user not found");
    }
    changeRole.role=role;
    await changeRole.save();
    res.json("Role change succesfully");
    
  } catch (error) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
  
}

module.exports={monthlyCalanders,updateCalender,deletecalender,changeRoles};