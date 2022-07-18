// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const assesmentModelSchema = new Schema({

  skillId: {
    type: Schema.ObjectId,
    ref: 'skillModel',
  },
  levelId: {
    type: Schema.ObjectId,
    ref: 'levelModel',
  },
  totalAssesments: {
    type: Number,
    required: true,
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

const assesmentModel = db.mongoose.model("assesmentModel", assesmentModelSchema, "assesment");
module.exports = assesmentModel;
