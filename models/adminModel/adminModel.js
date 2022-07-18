// Import mongoose database Connection
const db = require("../../database/mongo/connection");

const Schema = db.mongoose.Schema;

const adminSchema = new Schema({
  adminName: {
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

const adminModel = db.mongoose.model("adminModel", adminSchema, "adminModel");
module.exports = adminModel;
