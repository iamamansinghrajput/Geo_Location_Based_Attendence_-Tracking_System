const mongoose = require('mongoose');

const ComponentName = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  slno:{
    type: Number,
    required: true,
    unique: true, // Ensure slno is unique
  },
  Parent: {
    type: String,
    required: true,
  }  
});
 
module.exports = mongoose.model('Component Name', ComponentName);
