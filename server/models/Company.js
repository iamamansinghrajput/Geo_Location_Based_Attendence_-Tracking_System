const mongoose = require('mongoose');

const Companyschema = new mongoose.Schema({

    comname:{
        type: String,
        required: true,
    },
    comusername:{
        type: String,
        required: true,
        unique: true,
    },
    comaddress: {
       type: String,
        required: true,
    },
    ownername: {
        type: String,
        required: true,
    },
    comlocation: {
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