const mongoose = require("mongoose");
const dataSchema = new mongoose.Schema({
  question: {
    required: true,
    type: String,
  },
  score: {
    required: true,
    type: Number,
  },

  date: { required: false, type: Date, default: Date.now },
});

module.exports = mongoose.model("Data", dataSchema);
