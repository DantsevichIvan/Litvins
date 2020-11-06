const bodyParser = require('body-parser');
const cors = require('cors');
const urlencodedParser = bodyParser.urlencoded({extended: false})



module.exports = function (app){
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    cors({origin: 'http://localhost:3000'})
    app.use('/',require('./controllers/home.routes'));
    app.use('/team', require('./controllers/team.routes'));
    app.use('/list-matches', require('./controllers/listMatches.routes'));
    app.use('/club',require('./controllers/club.routes'));
    app.use('/list-news', require('./controllers/listNews.routes'));
    app.use('/contact',require('./controllers/contact.routes'));
    app.use('/auth',require('./controllers/auth.router'));
    app.use('/api/image', require('./controllers/image.router'));
}


