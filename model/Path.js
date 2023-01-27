const mongoose = require("mongoose");
const Point = require("./Point");

const PathSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    photo:{
        type: String
    },
    points:[{type: mongoose.Schema.Types.ObjectId, ref: 'Point', required: true}]
    ,
    collected:[{type: mongoose.Schema.Types.ObjectId, ref: 'Point', required: true}]
    ,
    location: {
        type: { type: String },
        coordinates: [Number],
      },
    date :{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Path",PathSchema);