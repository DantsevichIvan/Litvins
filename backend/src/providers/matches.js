const Match = require('../models/Match')
const {getPaginator} = require("./middleware");
const {combineDateAndTime} = require("./middleware");

async function getMatches(req, res) {
    try {
        Match.find({}, async function (err, matches) {
                if (err) return console.log(err)
                await res.status(201).json({matches: matches, success: true})
            }
        )
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getMatch(req, res) {
    try {
        const searchMatch = req.params.matchId
        Match.findById(searchMatch, async function (err, match) {
            if (err) return console.log(err)
            await res.status(201).json({match: match, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function addMatch(req, res) {
    try {
        const {time, matchDate, opposingTeam, team, game, location} = req.body.matchInfo
        const dateTime = combineDateAndTime(matchDate, time)
        await Match.create({dateTime: dateTime, opposingTeam, team, game, location}, function (err) {
            if (err) return console.log(err)
            res.status(201).json({message: 'Матч создался', success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function deleteMatch(req, res) {
    try {
        let matchId = req.params.id
        Match.findByIdAndDelete(matchId, async function (err) {
            if (err) return console.log(err)
            await res.status(201).json({message: 'Матч удален', success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function updateMatch(req, res) {
    try {
        let matchId = req.params.id
        const update = {
            result: {
                resultTeam: req.body.result.resultTeam,
                resultOpposingTeam: req.body.result.resultOpposingTeam,
            },
            score: true
        }
        Match.findByIdAndUpdate(matchId, update, async function (err, match) {
            if (err) return console.log(err)
            await res.status(201).json({match: match, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getNextMatch(req, res) {
    try {
        Match.findOne({score: false}, async function (err, match) {
            if (err) return console.log(err)
            await res.status(201).json({match: match, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getLastMatchesAndNextMatch(req, res) {
    try {
        let matches = await Match.find({score: true})
        let nextMatch = await Match.findOne({score: false})
        let lastMatches = getPaginator(req, matches)
        return {lastMatches, nextMatch}
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}

module.exports = {getMatches, getMatch, addMatch, deleteMatch, updateMatch, getNextMatch, getLastMatchesAndNextMatch}
