const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function (app) {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    })
    cors({origin: 'http://localhost:3000'})
    app.use('/', require('./controllers/home.routes'));
    app.use('/team', require('./controllers/team.routes'));
    app.use('/list-matches', require('./controllers/listMatches.routes'));
    app.use('/club',  require('./controllers/club.routes'));
    app.use('/list-news', require('./controllers/listNews.routes'));
    app.use('/contact', require('./controllers/contact.routes'));
    app.use('/auth', require('./controllers/auth.router'));
    app.use('/api/image', require('./controllers/image.router'));
}


