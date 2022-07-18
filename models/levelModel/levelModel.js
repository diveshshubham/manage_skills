// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const levelModelSchema = new Schema({
  level: {
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

const levelSchemaModel = db.mongoose.model("levelModel", levelModelSchema, "level");
module.exports = levelSchemaModel;
