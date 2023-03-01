const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  level: {
    type: Number,
    required: true,
    default: 1,
  },
  score: {
    type: Number,
    required: true,
    default: 0,
  },
  classement: {
    type: Number,
    required: true,
    default: 0,
  },
  playingTime: {
    type: Number,
    required: true,
    default: 0,
  },
  maxWave: {
    type: Number,
    required: true,
    default: 0,
  },
  keyPerSecond: {
    type: Number,
    required: true,
    default: 0,
  },
  totalHit: {
    type: Number,
    required: true,
    default: 0,
  },
  totalMiss: {
    type: Number,
    required: true,
    default: 0,
  },
  accuracy: {
    type: Number,
    required: true,
    default: 0,
  },
  rank: {
    type: String,
    required: true,
    default: "Bronze",
  },
});

module.exports = mongoose.model("User", userModel);
