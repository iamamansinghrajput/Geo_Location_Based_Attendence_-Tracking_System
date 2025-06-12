const calenders = require("../models/workingCalander");

//Create an api to get list of monthly calenders

async function allcalenders(req, res) {
    try {
    const allcalender = await calenders.find();
    res.status(201).json(allcalender);   
    } catch (error) {
        res.status(500).json("Internal server error");
    }
}

//Create an api to get 1 month calender.
async function monthCalender (req, res) {
  const {year, month } = req.body;

  if (!year || !month) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const existing = await calenders.findOne({year, month });
    if (!existing) {
      return res.status(400).json({ message: "Calendar not exists for this month" });
    }
    res.status(201).json({existing});

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
}




module.exports ={
                 allcalenders,
                 monthCalender
                };