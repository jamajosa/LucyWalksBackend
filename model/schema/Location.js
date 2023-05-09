const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

  module.exports = LocationSchema;