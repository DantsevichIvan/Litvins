

module.exports = function (app,expect){
    describe('Auth Test', function () {
        describe('Registration new User', function () {
            it('Success should return true', function () {
                let data = {
                    name: 'Ivan',
                    birthday: new Date('12.01.1997'),
                    email: 'iw.dantsevich@gmail.com',
                    password: '123123',
                    position:'Нападающий'
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
                    .get('/auth/logout')
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
    })
}


