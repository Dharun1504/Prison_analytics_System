const mongoose = require('mongoose');

// Define subdocument schema for Block
const blockSchema = new mongoose.Schema({
    block_warden: String,
    block_name: String,
    block_capacity: Number,
    no_of_rooms: Number
});


const prisonSchema = new mongoose.Schema({
    prison_id:{
        type:Number,
        required:[true,'Prison id is required']
    },
    prison_name:{
        type:String,
        required:[true,"Prison name is required"]
    },
    type_prison: {
        type: String,
        required: [true, 'Type of prison is required']
    },
    capacity: {
        type: Number,
        required: [true, 'Capacity is required']
    },
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    juvenile: String, 

    block: blockSchema 
});

const prisonModel = mongoose.model('prisons', prisonSchema);

module.exports = prisonModel;
