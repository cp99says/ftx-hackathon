const mongoose = require("mongoose");
const schema = mongoose.Schema({
  wheelsAndTyres: {
    request_type: [{ type: String }],
  },
  engine: {
    request_type: [{ type: String }],
  },
  fuel: {
    request_type: [{ type: String }],
  },
});

module.exports = mongoose.model("Services", schema);
