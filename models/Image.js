const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  userName:{
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Image', imageSchema);
