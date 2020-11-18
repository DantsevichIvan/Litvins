process.env.NODE_ENV = 'test';
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";

const expect = require('chai').expect;
const request = require('supertest');
const server = require('./src/app').app
const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURL')

const app = request.agent(server)

before(function (done) {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function () {
        // mongoose.connection.db.dropDatabase(function () {
        //     done()
        // })
        done()
    })
})
describe('All Test', function () {
    require('./test/unit/auth.test')(app, expect)
    require('./test/unit/team.test')(app, expect)
    require('./test/unit/matches.test')(app, expect)
    require('./test/unit/news.test')(app,expect)
    require('./test/unit/home.test')(app,expect)
})

