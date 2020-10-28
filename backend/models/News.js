const {Schema, model, Types} = require('mongoose');

const newsSchema = new Schema({
    nameNews: {type: String},
    dataValue: {type: Date},
    textNews: {type: String},
})

module.exports = model('News', newsSchema)