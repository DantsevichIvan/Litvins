

describe('Post request', function () {
    describe('Add new User', function () {
        it('Success should return true', function () {
            app
                .get('/homeInfo')
                .end((err, res) => {
                    debugger
                    console.log(res)
                    expect(res.body.success).to.equal(true)
                })
        })
    })
})
