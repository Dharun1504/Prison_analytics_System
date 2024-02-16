const prisonModel = require('../model/prisonmodel');

const registerPrisonController = async (req, res) => {
    try {
        const {
            prison_id,
            prison_name,
            type_prison,
            capacity,
            location,
            juvenile,
            block_warden,
            block_name,
            block_capacity,
            no_of_rooms
        } = req.body;

        // Check if a prison with the same location already exists
        const existingPrison = await prisonModel.findOne({ 'location': prison_id });
        if (existingPrison) {
            return res.status(200).send({ message: 'Prison Already Exists', success: false });
        }

        // Create subdocument instance for block
        const blockData = {
            block_warden,
            block_name,
            block_capacity,
            no_of_rooms
        };

        // Create a new prison instance using the provided data, including the block subdocument
        const newPrison = new prisonModel({
            prison_id,
            prison_name,
            type_prison,
            capacity,
            location,
            juvenile,
            block: blockData
        });

        // Save the new prison to the database
        await newPrison.save();

        res.status(201).send({ message: 'Prison Registered Successfully', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: `Register Prison Controller ${error.message}` });
    }
};


module.exports = { registerPrisonController };
