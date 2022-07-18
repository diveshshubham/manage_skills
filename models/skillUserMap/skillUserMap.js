// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const skillUserMap = new Schema({
    userId: {
        type: Schema.ObjectId,
        ref: 'userModel',
    },
    skillId: {
        type: Schema.ObjectId,
        ref: 'skillModel',
    },
    levelId: {
        type: Schema.ObjectId,
        ref: 'levelModel',
    },
    proficiency: {
        type: String,
        required: true,
    },
    yearsOfExp: {
        type: Number,
        required: true,
    },
    isExpert:{
        type:Boolean,
        default:false
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

const skillUserMapModel = db.mongoose.model("skillUserMap", skillUserMap, "skillUserMap");
module.exports = skillUserMapModel;
