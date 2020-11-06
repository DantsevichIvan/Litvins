const {Router} = require('express');
const router = Router();
const Match = require('../models/Match')
const moment = require('moment')

router.get('/', async (req, res, next) => {
    try {
        const matchList = await Match.find({}).lean()
        res.json(matchList);
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/match/:matchId', async (req, res, next) => {
    try {
        const searchMatch = req.params.matchId
        const match = await Match.findById(searchMatch)
        res.json(match)
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/next-match', async (req, res, next) => {
    try {
        const match = await Match.findOne({score: false})
        res.json(match)
    } catch (e) {
        console.log(e)
    }
    next()
});
router.post('/match', async (req, res, next) => {
    try {
        const {time, matchDate, opposingTeam, team, game} = req.body.matchInfo

        function combineDateAndTime(date, time) {
            let dataValue = moment(date).format('ll')
            let timeValue = moment(time).format('HH:mm:ss')
            const dateTime = new Date(`${dataValue} ${timeValue}`)
            return moment(dateTime).format('lll')
        }

        const dateTime = combineDateAndTime(matchDate, time)
        const match = new Match({dateTime: dateTime, opposingTeam, team, game});
        await match.save()
        res.status(201).json({message: 'Матч создался'})
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})
router.delete('/match/:id', async (req, res, next) => {
    try {
        let matchId = req.params.id
        const match = await Match.findByIdAndDelete(matchId)
        res.status(201).json({message: 'Матч удален'})
    } catch (e) {
        console.log(e)
    }
})
router.put('/match/:id', async (req, res, next) => {
    try {
        let matchId = req.params.id
        const update = {
            result:{
                resultTeam: req.body.result.resultTeam,
                resultOpposingTeam: req.body.result.resultOpposingTeam,
            },
            score: true
        }
        const match = await Match.findByIdAndUpdate(matchId, update)
        console.log(match)
        debugger
        res.status(201).json({message: 'Результат добавлен'})
    } catch (e) {
        console.log(e)
    }
})


module.exports = router
