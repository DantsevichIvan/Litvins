process.env["NODE_CONFIG_DIR"] = __dirname + "/config";

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURL')


module.exports = connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log('MongoDB connected..')
    } catch (err) {
        console.error(err.message);
        process.exit(1)
    }
}

