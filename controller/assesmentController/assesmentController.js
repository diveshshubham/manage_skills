const assesmentUserModel = require('../../models/assesmentUserModel/assesmentUserModel')
const selfAssesmentModel = require('../../models/selfAssesmentModel/selfAssesmentModel')
const mongoose = require('mongoose')

module.exports = {
    getAssesmet: async (req, res) => {
        try {
            const userId = req.user._id;
            condition = { userId: userId }
            let userSkills = await assesmentUserModel
                .aggregate([
                    {
                        $match: {
                            $and: [condition]
                        }
                    },

                    {
                        $lookup: {
                            from: "user",
                            localField: "userId",
                            foreignField: "_id",
                            as: "userDetils"
                        }
                    },
                    {
                        $unwind: "$userDetils"
                    },
                    {
                        $lookup: {
                            from: "level",
                            localField: "levelId",
                            foreignField: "_id",
                            as: "leveldetails"
                        }
                    },
                    {
                        $unwind: "$leveldetails"
                    },
                    {
                        $lookup: {
                            from: "skill",
                            localField: "skillId",
                            foreignField: "_id",
                            as: "skillDetails"
                        }
                    },
                    {
                        $unwind: "$skillDetails"
                    },
                    {
                        $lookup: {
                            from: "assesment",
                            localField: "assignId",
                            foreignField: "_id",
                            as: "assesmentDetails"
                        }
                    },
                    {
                        $unwind: "$assesmentDetails"
                    },

                    {
                        $project: {
                            _id: 1,
                            userName: "$userDetils.fullName",
                            skillDetails: "$skillDetails",
                            userEmail: "$userDetils.email",
                            levelDetails: "$leveldetails",
                            assesMentDetails: "$assesmentDetails",
                            isCompleted: 1,
                            profiencyScored: 1,
                            numberOfAssesment: 1,
                            updatedAt: 1
                        }
                    }
                ]);
            res.status(200).send({ data: userSkills })
        }
        catch (err) {
            res.status(500).send({msg:"something went wrong"})
        }

    },
    addAssesment: async (req, res) => {
        try {
            const assignId = req.body.assignId;
            const skillId = req.body.skillId;
            const userId = req.user._id;
            const levelId = req.body.levelId;
            const isCompleted = req.body.isCompleted;
            const profiencyScored = req.body.profiencyScored;
            const numberOfAssesment = req.body.numberOfAssesment;
            let isPending = false
            if (isCompleted == false) {
                isPending = true
            }
            let check = await assesmentUserModel.findOne({
                assignId: assignId, skillId: skillId
            })
            if (check) {
                res.status(400).send({ msg: "already existing data" })
            }
            if (assignId &&
                skillId &&
                userId &&
                isCompleted &&
                levelId &&
                profiencyScored) {
                const assignAddObj = new assesmentUserModel({
                    assignId: assignId,
                    skillId: skillId,
                    userId: userId,
                    levelId: levelId,
                    isCompleted: isCompleted,
                    profiencyScored: profiencyScored,
                    numberOfAssesment: numberOfAssesment,
                    isPending: isPending
                })
                let assignMentSave = await assignAddObj.save()
                res.status(200).send({ data: assignMentSave })
            } else {
                res.status(400).send({ msg: "invalid body" })
            }
        }
        catch (err) {
            res.status(500).send({ data: err })
        }
    },

    updAssesment: async (req, res) => {
        try {
            const assesmentUserId = req.params.assesmentUserId;
            const assignId = req.body.assignId;
            const skillId = req.body.skillId;
            const userId = req.user._id;
            const levelId = req.body.levelId;
            const isCompleted = req.body.isCompleted;
            const numberOfAssesment = req.body.numberOfAssesment;
            const profiencyScored = req.body.profiencyScored;
            let isPending = false
            if (isCompleted == false) {
                isPending = true
            }
            if (assignId &&
                skillId &&
                userId &&
                isCompleted &&
                levelId &&
                profiencyScored &&
                numberOfAssesment) {
                const assignAddObj = {
                    assignId: assignId,
                    skillId: skillId,
                    userId: userId,
                    levelId: levelId,
                    isCompleted: isCompleted,
                    numberOfAssesment: numberOfAssesment,
                    profiencyScored: profiencyScored,
                    isPending: isPending,
                }
                let assignMentUpd = await assesmentUserModel.updateOne(
                    { _id: assesmentUserId },
                    { $set: assignAddObj })
                res.status(200).send({ data: assignMentUpd })
            } else {
                res.status(400).send({ msg: "invalid body" })
            }
        }
        catch (err) {
            res.send(500).send({ data: err })
        }
    },

    addSelfAssesment: async (req, res) => {
        try {
            const userId = req.user._id;
            const levelId = req.body.levelId;
            const totalExp = req.body.totalExp;
            const skillId = req.body.skillId;
            const profiency = req.body.profiency;

            if (levelId &&
                totalExp &&
                userId &&
                profiency &&
                skillId) {
                const selfAssignAddObj = new selfAssesmentModel({
                    levelId: levelId,
                    userId: userId,
                    totalExp: totalExp,
                    skillId: skillId,
                    profiency: profiency
                })
                let selfAssignMentSave = await selfAssignAddObj.save()
                res.status(200).send({ data: selfAssignMentSave })
            } else {
                res.status(400).send({ msg: "invalid body" })
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ data: err })
        }
    },

    getSelfAssesment: async (req, res) => {
        try {
            const userId = req.user._id;
            const skillId = req.params.skillId;
            let condition = {
                userId: userId,
                skillId: new mongoose.Types.ObjectId(skillId)
            }
            console.log(condition)
            let getSelfAssesment = await selfAssesmentModel.aggregate([
                {
                    $match: condition
                },
                {
                    $lookup: {
                        from: "user",
                        localField: "userId",
                        foreignField: "_id",
                        as: "userDetils"
                    }
                },
                {
                    $unwind: "$userDetils"
                },
                {
                    $lookup: {
                        from: "level",
                        localField: "levelId",
                        foreignField: "_id",
                        as: "leveldetails"
                    }
                },
                {
                    $unwind: "$leveldetails"
                },
                {
                    $lookup: {
                        from: "skill",
                        localField: "skillId",
                        foreignField: "_id",
                        as: "skillDetails"
                    }
                },
                {
                    $unwind: "$skillDetails"
                },

                {
                    $project: {
                        _id: 1,
                        userName: "$userDetils.fullName",
                        skillDetails: "$skillDetails",
                        userEmail: "$userDetils.email",
                        levelDetails: "$leveldetails",
                        profiency: 1,
                        totalExp: 1,
                        updatedAt: 1
                    }
                }
            ])
            res.status(200).send({ data: getSelfAssesment })
        }
        catch (err) {
            res.status(500).send({msg:"something went wrong"})

        }
    },

    editSelfAssesment: async (req, res) => {
        try {
            const userId = req.user._id;
            const selfAssId = req.params.selfAssId;
            const levelId = req.body.levelId;
            const totalExp = req.body.totalExp;
            const profiency = req.body.profiency;
            const skillId = req.body.skillId;

            if (levelId &&
                totalExp &&
                userId &&
                selfAssId &&
                profiency &&
                skillId) {
                const selfAssignEditObj = {
                    levelId: levelId,
                    userId: userId,
                    totalExp: totalExp,
                    skillId: skillId,
                    profiency: profiency
                }
                let selfAssignMentEdit = await selfAssesmentModel.updateOne(
                    { _id: selfAssId },
                    { $set: selfAssignEditObj})
                res.status(200).send({ data: selfAssignMentEdit })
            }
        }
        catch (err) {
            res.status(500).send({ data: err })
        }
    }
}