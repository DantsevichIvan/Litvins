const {Schema, model} = require('mongoose');

const playerSchema = new Schema({
    name: {type: String},
    birthday: {type: Date},
    email: {type: String},
    password: {type: String},
    position:{type:String}
})

module.exports = model('Player', playerSchema)
