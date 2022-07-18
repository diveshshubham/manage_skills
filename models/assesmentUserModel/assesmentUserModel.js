// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const assesmentUserShema = new Schema({

  assignId: {
    type: Schema.ObjectId,
    ref: 'assignmentModel',
  },
  skillId: {
    type: Schema.ObjectId,
    ref: 'skillModel',
  },
  userId: {
    type: Schema.ObjectId,
    ref: 'userModel',
  },
  isCompleted: {
    type: Boolean,
    required: true,
  },
  levelId : {
    type: Schema.ObjectId,
    ref: 'userModel',
  },
  profiencyScored: {
    type: Number,
    required: true,
  },
  numberOfAssesment:{
    type: Number,
    required: true,
  },
  isPending:{
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

const assesmentUserShemaModel = db.mongoose.model("assUser", assesmentUserShema, "assesmentUser");
module.exports = assesmentUserShemaModel;
