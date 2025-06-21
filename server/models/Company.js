const mongoose = require('mongoose');

const Companyschema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
        unique: true,
    },
    comaddress: {
        type: String,
        required: true,
    },
    ownerName: {
        type: String,
        required: true,
    },
    location: {
        latitude: {
            type: Number,
            required: true,
            unique: true,
        },
        longitude: {
            type: Number,
            required: true,
            unique: true,
        }
    },
    radius: {
       type: Number,
        required: true,
         unique: true,
    },
    createdAt: {
    type: Date,
    default: Date.now,
  }
})

const Company = mongoose.model('Company',Companyschema);
module.exports= Company;