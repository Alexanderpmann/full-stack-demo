const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required!"]
    },
    art: {
        type: String,
        required: [true, "Cover art is required!"]
    },
    minPlayers: {
        type: Number,
        required: [true, "Must have a minimum number of players!"],
        min: [1, "There must be at least 1 player!!"]
    }
}, {timestamps: true})

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;
