module.exports = function (app,expect){
    describe('News Test', function () {
        describe('Get ListNews', function () {
            it('Success should return true', function () {
                app
                    .get('/list-news/')
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Get News', function () {
            it('Success should return true', function () {
                let newsId = '5faba668ad278117b435676b'
                app
                    .get('/list-news/news/'+ newsId)
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('add News', function () {
            it('Success should return true', function () {
                let newsInfo = {
                    nameNews:'Add new News',
                    newsDate: new Date('24 Nov'),
                    textNews:'Hello it is new news, very good day'
                }
                app
                    .post('/list-news/news')
                    .send({newsInfo})
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
    })
}
