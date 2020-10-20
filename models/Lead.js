const { mongo } = require("mongoose");

const mongoose = require('mongoose');

const LeadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: String,
    phone: String,
    age: String,
    gender: String,
    smoker: String,
    pregnant: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Leads', LeadSchema);