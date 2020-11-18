module.exports = function (app,expect){
    describe('Home Test', function () {
        describe('Get Info Home Page', function (){
            it('Success should return true', function () {
                app
                    .get(`/homeInfo`)
                    .query({count:2})
                    .end((err,res)=>{
                        expect(res.body.success).to.equal(true)
                    })
            });
        })
    })
}
