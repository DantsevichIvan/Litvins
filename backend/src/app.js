process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path')
const session = require('express-session')
const connectDB = require("./db");
const multer = require("multer");
const MongoStore = require('connect-mongo')(session);

const app = express();
const PORT = process.env.PORT || 4000
const ENV = process.env.NODE_ENV || 'Development';
const db = config.get('mongoURL')


require('./routers')(app)


app.use(bodyParser.json());

app.use(session({
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        url: db
    }),
    cookie: {maxAge: 300000, secure: true},
    secret: 'foo',
    resave: false,
    saveUninitialized: true
}))

if (process.env.NOdE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
module.exports.start = async function start() {
    try {
        await connectDB()
        app.listen(PORT, () => console.log(`server is listing on ${PORT} - ${ENV} environment`))
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1)
    }
}

module.exports.app = app






