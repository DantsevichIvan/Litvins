const {Schema, model,Types} = require('mongoose');



const Image = new Schema({
    filename: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Image', Image)