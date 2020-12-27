const bodyParser = require('body-parser');
const cors = require('cors');
const {upload} = require("./upload");

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
    app.use('/', require('./routes/api/home/home.routes'));
    app.use('/team', require('./routes/api/team/team.routes'));
    app.use('/list-matches', require('./routes/api/matches/matches.routes'));
    app.use('/club',  require('./routes/api/club/club.routes'));
    app.use('/list-news', require('./routes/api/news/news'));
    app.use('/contact', require('./routes/api/contact/contact.routes'));
    app.use('/user', require('./routes/api/user/user'));
    app.use('/statistic',require('./routes/api/statistic/statistic.router'));
}


