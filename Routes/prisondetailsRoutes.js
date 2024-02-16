const express = require("express");
const router = express.Router();
const prisonermodel = require("../model/prisonermodel");
const prisonModel = require('../model/prisonmodel');


router.get("/query1", async (req, res) => {
    try {
        
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);
        const prison = req.query.prison;
        const gender = req.query.gender;
        
        const result = await prisonermodel.aggregate([
            {
                $lookup: {
                    from: "prisons",
                    localField: "prison_id",
                    foreignField: "prison_id",
                    as: "Prison"
                }
            },
            {
                $unwind: "$Prison"
            },
            {
                $match: {
                    "gender":gender,
                    "Prison.prison_name": prison,
                    "entered_date": {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $project: {
                    "prisoner_name": "$name",
                    "prison_name": "$Prison.prison_name"
                }
            }
        ]);

        console.log("Query1 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});



router.get("/query2", async (req, res) => {
    try {
        
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);
        const crime=req.query.crime;
        const prison = req.query.prison;
        const gender = req.query.gender;
        
        const result = await prisonermodel.aggregate([
            {
                $lookup: {
                    from: "prisons",
                    localField: "prison_id",
                    foreignField: "prison_id",
                    as: "Prison"
                }
            },
            {
                $unwind: "$Prison"
            },
            {
                $match: {
                    "gender":gender,
                    "Prison.prison_name": prison,
                    "type_of_crime":crime,
                    "entered_date": {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $project: {
                    "prisoner_name": "$name",
                    "prison_name": "$Prison.prison_name"
                }
            }
        ]);

        console.log("Query2 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});

router.get("/query3", async (req, res) => {
    try {
        
        const startDate = new Date(req.query.startDate);
        const endDate = new Date(req.query.endDate);

        const result = await prisonermodel.aggregate([
            {
                $lookup: {
                    from: "prisons",
                    localField: "prison_id",
                    foreignField: "prison_id",
                    as: "Prison"
                }
            },
            {
                $unwind: "$Prison"
            },
            {
                $match: {
                    "Prison.juvenile": "Yes",
                    "Prison.type_prison":"juvenile",
                    "entered_date": {
                        $gte: startDate,
                        $lte: endDate
                    }
                }
            },
            {
                $group: {
                  _id: "$type_of_crime",
                  count: { $sum: 1 }
                }
              },
              {
                $sort: { count: -1 }
              }
            ]);
            

        console.log("Query3 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});

router.get("/query4", async (req, res) => {
    try {
        const crime=req.query.crime;
        
        const result = await prisonermodel.aggregate([
            {
                $match: {
                  type_of_crime: crime
                }
            },
            {
                $lookup: {
                    from: "prisons",
                    localField: "prison_id",
                    foreignField: "prison_id",
                    as: "Prison"
                }
            },
            {
                $unwind: "$Prison"
            },
            {
                $group: {
                  _id: "$type_of_crime",
                  prisoners: {
                    $push: {
                      name: "$name",
                      age: "$age",
                      gender: "$gender",
                      "prison_name": "$Prison.prison_name" ,
                      marital: "$marital",
                      entered_date: "$entered_date",
                      released_date: "$released_date"
                    }
                  }
                }
              }
            ]);

        console.log("Query4 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});


router.get("/query5", async (req, res) => {
    try {
        const crime=req.query.crime;
        
        const result = await prisonermodel.aggregate([
            {
                $match: {
                  type_of_crime:crime
                }
            },
            {
                $lookup: {
                    from: "prisons",
                    localField: "prison_id",
                    foreignField: "prison_id",
                    as: "Prison"
                }
            },
            {
                $unwind: "$Prison"
            },
            {
                $group: {
                  _id: "$type_of_crime",
                  count: { $sum: 1 }
                }
              }
            ]);
            

        console.log("Query5 API Response:", result);
        if (result.length === 0) {
            res.status(404).send({
                message: "No data found for the specified criteria",
                success: false
            });
        } else {
            res.status(200).json(result);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error querying data",
            success: false,
        });
    }
});

module.exports = router;
