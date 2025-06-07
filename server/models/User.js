const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  middlename: {
    type: String,
  },
  lastname: {
    type: String,
  },

  email: {
    type: String,
    required: true,
    
  },
  number: {
    type: Number,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
    
  },
  dob: {
    type: String,
    required: true,
    
  },

  qualification: {
    type: [String],
  },

  skills: {
    type: [String],
  },

presentaddress: {
    type: String,
},
permanentaddress: {
    type: String,
},
role: {
    type: String,
},
status: {
    type: String,
},

createdAt: {
    type: Date,
    default: Date.now,
  },
updatedAt:{
     type: Date,
    default: Date.now,
}

});

const User = mongoose.model('User', UserSchema);
module.exports = User;