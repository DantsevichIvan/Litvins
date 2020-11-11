const {Schema, model} = require('mongoose');

const playerSchema = new Schema({
    name: {type: String},
    lastName: {type: String},
    birthday: {type: Date},
    email: {type: String},
    password: {type: String},
    position: {type: String},
    statisticPlayer: {
        matchesPlayed: {type: Number, default: 0},
        goals: {type: Number, default: 0},
        assist: {type: Number, default: 0},
        bombardier: {type: Number, default: 0}
    },
    rating: {type: Number, default: 60}
})

module.exports = model('Player', playerSchema)
