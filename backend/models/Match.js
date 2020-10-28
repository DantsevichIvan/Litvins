const {Schema, model,Types} = require('mongoose');

const matchSchema = new Schema({
    team:{type: String},
    game:{type:String},
    opposingTeam:{type: String},
    dateTime: {type: Date, default: Date.now()},
    score:{type: Boolean, default: false},
    location:{type:String},
    result:{
        type:Object,
        resultTeam:{type:Number},
        resultOpposingTeam:{type:Number}
    }
})

module.exports = model('Match', matchSchema)