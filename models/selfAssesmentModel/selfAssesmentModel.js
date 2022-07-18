// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const selfAssSchema = new Schema({

    userId: {
        type: Schema.ObjectId,
        ref: 'userModel',
    },
    levelId: {
        type: Schema.ObjectId,
        ref: 'levelModel',
    },
    totalExp: {
        type: Number,
        required: true,
    },
    skillId:{
        type: Schema.ObjectId,
        ref: 'skillModel'
    },
    profiency:{
        type:Number,
        required:true
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const selfAssesmentShemaModel = db.mongoose.model("selfAssesment", selfAssSchema, "selfAssesment");
module.exports = selfAssesmentShemaModel;
