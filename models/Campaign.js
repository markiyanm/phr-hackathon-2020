const { mongo } = require("mongoose");

const mongoose = require('mongoose');

const CampaignSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    budget: String,
    target: String,
    insured: String,
    gender: String,
    smoker: String,
    pregnant: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Campaigns', CampaignSchema);