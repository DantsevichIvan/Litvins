process.env.NODE_ENV = 'test';
process.env["NODE_CONFIG_DIR"] = __dirname + "/config";
const expect = require('chai').expect;
const request = require('supertest');
const server = require('./src/app').app
const mongoose = require('mongoose')
const config = require('config');
const db = config.get('mongoURL')

let app = request.agent(server)

before(function (done) {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function () {
        // mongoose.connection.db.dropDatabase(function () {
        //
        // })
        done()
    })
})
describe('Post request', function () {
    describe('Registration new User', function () {
        it('Success should return true', function () {
            let data = {
                name: 'Ivan',
                birthday: new Date('12.01.1997'),
                email: 'iw.dantsevich@gmail.com',
                password: '123123'
            }
            app
                .post('/auth/register')
                .send({data})
                .end((err, res) => {
                    expect(res.body.success).to.equal(true)
                })
        })
    })
    describe('Login User', function () {
        it('success should return true', function () {
            let data = {
                email: 'iw.dantsevich@gmail.com',
                password: '123123'
            }
            app
                .post('/auth/login')
                .send({data})
                .end((err, res) => {
                    console.log(res.body.message)
                    expect(res.body.success).to.equal(true)
                })
        })
    })
    describe('LogOut User', function () {
        it('Success should return true', function () {
            app
                .get('/auth/register')
                .send({data})
                .end((err, res) => {
                    expect(res.body.success).to.equal(true)
                })
        })
    })
})
