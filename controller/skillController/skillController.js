const skillModel = require('../../models/skillModel/skillModel');
const skillUserMapModel = require('../../models/skillUserMap/skillUserMap');
const skillModelUser = require('../../models/skillUserMap/skillUserMap')


module.exports = {

    getSkills: async (req, res) => {
        try {
            let condition = {}
            const searchData = req.query.searchData;
            if (searchData) {
                condition.skillName = { $regex: "" + searchData + "", $options: "i" };
            }
            let skills = await skillModel.find(condition)
            res.status(200).send({ data: skills })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }
    },

    addSkills: async (req, res) => {
        try {
            const userId = req.user._id;
            const skillId = req.body.skillId;
            const levelId = req.body.levelId;
            const proficiency = req.body.proficiency;
            const yearsOfExp = req.body.yearsOfExp;
            let isExpert = req.body.isExpert;

            if (isExpert) {
                isExpert = true
            } else {
                isExpert = false
            }
            let skillCheck = await skillModelUser.findOne({ skillId: skillId })
            if (skillCheck) {
                res.status(400).send({ msg: "skill already added" })
            }
            if (userId &&
                skillId &&
                levelId &&
                proficiency &&
                yearsOfExp) {
                let skillUserObj = new skillModelUser({
                    userId: userId,
                    skillId: skillId,
                    levelId: levelId,
                    isExpert: isExpert,
                    proficiency: proficiency,
                    yearsOfExp: yearsOfExp
                })

                let skillUserSave = await skillUserObj.save()
                res.status(200).send({ data: skillUserSave })
            }
        }
        catch (err) {
            console.log(err)
            res.status(500).send({ data: err })
        }
    },
    editSkills: async (req, res) => {
        try {
            const userId = req.user._id;
            const skillUserMapId = req.params.skillUserMapId;
            const skillId = req.body.skillId;
            const levelId = req.body.levelId;
            const proficiency = req.body.proficiency;
            const yearsOfExp = req.body.yearsOfExp;
            let isExpert = req.body.isExpert;

            if (isExpert) {
                isExpert = true
            } else {
                isExpert = false
            }
            if (userId &&
                skillId &&
                levelId &&
                proficiency &&
                yearsOfExp) {
                let skillUserUpdObj = {
                    userId: userId,
                    skillId: skillId,
                    levelId: levelId,
                    isExpert: isExpert,
                    proficiency: proficiency,
                    yearsOfExp: yearsOfExp
                }
                let skillUserUpd = await skillModelUser.updateOne(
                    { _id: skillUserMapId },
                    { $set: skillUserUpdObj })
                skillUserUpd = await skillModelUser.findOne({ _id: skillUserMapId })
                res.status(200).send(
                    { data: skillUserUpd }
                )
            }
        }
        catch (err) {
            res.status(500).send({ data: err })
        }
    },
    getSkillsByUid: async (req, res) => {
        try {
            const userId = req.user._id;
            condition = {userId:userId}
            let userSkills = await skillUserMapModel
                .aggregate([
                    {
                        $match:{
                            $and:[condition]
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
                        $project: {
                            _id: 1,
                            userName: "$userDetils.fullName",
                            skillDetails: "$skillDetails",
                            userEmail: "$userDetils.email",
                            levelDetails:"$leveldetails",
                            proficiency: 1,
                            yearsOfExp: 1,
                            isExpert: 1,
                            updatedAt: 1
                        }
                    }
                ]);
            res.status(200).send({ data: userSkills })
        } catch (err) {
            console.log(err)
            res.status(500).send(err)
        }
    }
};


