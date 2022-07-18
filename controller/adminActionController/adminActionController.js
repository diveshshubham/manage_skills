const skillModel = require('../../models/skillModel/skillModel')
const levelModel = require('../../models/levelModel/levelModel')

module.exports = {
    addSkills: async (req, res) => {
        try {
            const skillName = req.body.skillName
            let check = await skillModel.findOne({skillName:skillName})
            if(check){
                res.status(400).send({msg:"already exist"})
            }
            if (!skillName) {
                res.status(400).send({ mgs: "empty skill" })
            }
            let skillSave = new skillModel({
                skillName: skillName
            })
            skillSave = await skillSave.save()
            res.status(200).send({ data: skillSave })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })

        }
    },
    addLevel: async (req, res) => {
        try {
            const level = req.body.level
            if (!level) {
                res.status(400).send({ mgs: "empty level" })
            }
            let check = await levelModel.findOne({level:level})
            console.log(check)
            if(check){
                res.status(400).send({msg:"already exist"})
            }
            let levelSave = new levelModel({
                level: level
            })
            levelSave = await levelSave.save()
            res.status(200).send({ data: levelSave })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })

        }
    },
    getSkills: async (req, res) => {
        try {
            let skills = await skillModel.find({})
            res.status(200).send({ data: skills })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }
    },
    getLevels: async (req, res) => {
        try {
            let levels = await levelModel.find({})
            res.status(200).send({ data: levels })
        }
        catch (err) {
            res.status(500).send({ msg: "something went wrong" })
        }
    }
}