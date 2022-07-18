const levelModel = require('../../models/levelModel/levelModel')

module.exports = {
    getLevel: async(req,res)=>{
        try{
            let levels = await levelModel.find({})
            res.status(200).send({data:levels})
        }
        catch(err){
            res.status(500).send({data:err})
        }
    }
}