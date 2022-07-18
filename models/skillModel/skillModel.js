// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const skillModelSchema = new Schema({
  skillName: {
    type: String,
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

const skillSchemaModel = db.mongoose.model("skillModel", skillModelSchema, "skill");
module.exports = skillSchemaModel;
