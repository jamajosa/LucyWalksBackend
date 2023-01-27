const mongoose = require("mongoose");
const Point = require("./Point");
const Path = require("./Path");

const MultiplayerSchema = mongoose.Schema({
    code:{
        type: String,
        required: true
    },
    users:[{type: mongoose.Schema.Types.ObjectId, ref: 'User' , required: true}],
    path: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Path',
        required: true
    },
})

module.exports = mongoose.model("Multiplayer",MultiplayerSchema);