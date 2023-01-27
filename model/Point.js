const mongoose = require("mongoose");
const Question = require("./Question");

const locationSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  });

const PointSchema = mongoose.Schema({
    // question: {
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Question',
    //     required: true
    // },
    description:{
        type: String,
        required: true
    },
    // photo:{
    //     type: String
    // },
     location: {
    type: locationSchema,
    required: true
  },
    value:{
        type: Number,
        required: true
    },
    date :{
        type: String,
        default: Date.now
    }
})

PointSchema.index({ location: "2dsphere" }); 
//module.exports = mongoose.model("Location",Locationchema);
module.exports = mongoose.model("Point",PointSchema);