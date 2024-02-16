const prisonerModel = require('../model/prisonermodel');
const bcrypt = require('bcryptjs');

const registerPrisonerController = async (req, res) => {
    try {
        const {
            name,
            age,
            gender,
            date_of_birth,
            type_of_crime,
            sentence,
            identification_mark,
            prison_id,
            education,
            address,
            marital,
            ID,
            visitorName,
            visitorNoOfTimes,
            visitorRelation,
            visitorMaterialsBought,
            causeOfDeath,
            aliveStatus,
            healthIssue,
            paroleNoOfTimesAccepted,
            paroleNoOfTimesRejected,
            paroleReason,
            paroleDuration,
            paroleStatus,
            entered_date, // Add entered_date
            released_date // Add released_date
        } = req.body;

        // Check if a prisoner with the same ID already exists
        const existingPrisoner = await prisonerModel.findOne({ 'ID': ID });
        if (existingPrisoner) {
            return res.status(200).send({ message: 'Prisoner Already Exists', success: false });
        }

        // Create subdocument instances
        const visitorData = {
            name: visitorName,
            no_of_times: visitorNoOfTimes,
            relation: visitorRelation,
            materials_bought: visitorMaterialsBought
        };

        const statusData = {
            cause_of_death: causeOfDeath,
            alive: aliveStatus,
            health_issue: healthIssue
        };

        const paroleData = {
            no_of_times_accepted: paroleNoOfTimesAccepted,
            no_of_times_rejected: paroleNoOfTimesRejected,
            reason: paroleReason,
            duration: paroleDuration,
            status: paroleStatus
        };

        // Create a new prisoner instance using the provided data, including subdocuments
        const newPrisoner = new prisonerModel({
            name,
            age,
            gender,
            date_of_birth,
            type_of_crime,
            sentence,
            identification_mark,
            prison_id,
            education,
            address,
            marital,
            ID,
            visitor: visitorData,
            status: statusData,
            parole: paroleData,
            entered_date, // Add entered_date
            released_date // Add released_date
        });

        // Save the new prisoner to the database
        await newPrisoner.save();

        res.status(201).send({ message: 'Prisoner Registered Successfully', success: true });
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, message: `Register Prisoner Controller ${error.message}` });
    }
};

module.exports = { registerPrisonerController };

