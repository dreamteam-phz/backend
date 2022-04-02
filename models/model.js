const mongoose = require("mongoose");

const scoresModelSchema = new mongoose.Schema({
  score: {
    required: true,
    type: Number,
  },
  message: {
    required: false,
    type: String,
  },
});

const usersModelSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

const Scores = mongoose.model("Scores", scoresModelSchema);
const Users = mongoose.model("Users", usersModelSchema);

module.exports = { Scores, Users };
