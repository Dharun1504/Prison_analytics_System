const mongoose = require('mongoose');

// Define subdocument schemas
const visitorSchema = new mongoose.Schema({
    name: String,
    no_of_times: Number,
    relation: String,
    materials_bought: [String]
});

const statusSchema = new mongoose.Schema({
    cause_of_death: String,
    alive: Boolean,
    health_issue: String
});

const paroleSchema = new mongoose.Schema({
    no_of_times_accepted: Number,
    no_of_times_rejected: Number,
    reason: String,
    duration: String,
    status: String
});

// Define the main prisoner schema with subdocuments
const prisonerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    age: {
        type: Number,
        required: [true, 'Age is required']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: [true, 'Gender is required']
    },
    date_of_birth: {
        type: Date,
        required: [true, 'Date of birth is required']
    },
    type_of_crime: {
        type: String,
        required: [true]
    },
    sentence: {
        type: Number,
        required: [true]
    },
    identification_mark: {
        type: String,
        required: [true]
    },
    prison_id:{
        type:Number,
        required:[true]
    },
    education: String,
    address: String,
    marital: String,
    ID: Number,
    visitor: [visitorSchema], 
    status: statusSchema,
    parole: paroleSchema,
    entered_date: {
        type: Date,
        required: true 
    },
    released_date: {
        type: Date,
        required: true 
    }
});

const prisonerModel = mongoose.model('prisoners', prisonerSchema);

module.exports = prisonerModel;
