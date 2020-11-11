const moment = require('moment')
module.exports = function (app,expect){

    describe('Matches Test', function () {
        describe('Get Matches', function () {
            it('Success should return true', function () {
                app
                    .get('/list-matches/')
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Get Match', function () {
            it('Success should return true', function () {
                let matchId = '5faacc5f369c4b3ab86cc1b4'
                app
                    .get('/list-matches/match/' + matchId)
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Add Match', function () {
            it('Success should return true', function () {
                let matchInfo = {
                    time:moment('November 10, 2020 9:00 PM'),
                    matchDate:moment('November 20, 2020'),
                    opposingTeam: 'Real',
                    team: 'Barselona',
                    game:'home',
                    location: 'Camp Nou'
                }
                app
                    .post('/list-matches/match')
                    .send({matchInfo})
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Delete Match', function () {
            it('Success should return true', function () {
                let id = '5faacc5f369c4b3ab86cc1b4'
                app
                    .delete('/list-matches/match/' +id)
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Update Match', function () {
            it('Success should return true', function () {
                let id = '5fac10c49e260f19b8b2127c'
                let result = {
                    resultTeam: 5,
                    resultOpposingTeam: 2
                }
                app
                    .put('/list-matches/match/'+id)
                    .send({result})
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Get Match', function () {
            it('Success should return true', function () {
                app
                    .get('/list-matches/next-match')
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
    })
}
