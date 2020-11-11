
module.exports = function (app,expect){
    describe('Team Test', function () {
        describe('Get Players', function () {
            it('Success should return true', function () {
                app
                    .get('/team/')
                    .end((err, res) => {
                        expect(res.body.success).to.equal(true)
                    })
            })
        })
        describe('Get filter players', function (){
            it('Success should return true', function () {
                app
                    .get(`/team/position`)
                    .query({position:'Нападающий'})
                    .end((err,res)=>{
                        expect(res.body.success).to.equal(true)
                    })
            });
        })
        describe('Get Player', function (){
            it('Success should return true', function () {
                let userId = '5fa97943f9849e3bc87ff8bf'
                app
                    .get('/team/player/'+ userId)
                    .end((err, res)=>{
                        expect(res.body.success).to.equal(true)
                    })
            });
        })
    })
}
