const mongoose = require('mongoose');

const Companyschema = new mongoose.Schema({

    ip : {
        type: String,
    }
})

const Company = mongoose.model('Company',Companyschema);
module.exports= Company;