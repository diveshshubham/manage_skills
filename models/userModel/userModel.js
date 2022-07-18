// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String, // unique
    required: true,
  },
  password: {
    type: String,
    required: true
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

const userModel = db.mongoose.model("userModel", userSchema, "user");
module.exports = userModel;
