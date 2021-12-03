const mongoose = require("mongoose");
const schema = mongoose.Schema({
  name: { type: String },
  phone: { type: Number },
  user_id: { type: String, unique: true },
  address: { type: String },
});

module.exports = mongoose.model("User Profile", schema);
