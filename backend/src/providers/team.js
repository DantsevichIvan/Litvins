const {getPaginator} = require("./middleware");
const Player = require('../models/Player')

async function getTeam(req, res) {
    try {
        Player.find({}, async function (err, players) {
            if (err) return console.log(err)
            await res.status(201).json({team: getPaginator(req, players), success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getFilterArray(req, res) {
    try {
        const position = req.query.position || 'all'
        if (position === 'all') {
            Player.find({}, async function (err, players) {
                if (err) return console.log(err)
                await res.status(201).json({team: getPaginator(req, players), success: true})
            })
        } else {
            Player.find({position}, async function (err, players) {
                if (err) return console.log(err)
                await res.status(201).json({team: getPaginator(req, players), success: true})
            })
        }
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}
async function getPlayer(req, res) {
    try {
        const id = req.params.userId
        Player.findById(id, async function (err, player) {
            if (err) return console.log(err)
            await res.status(201).json({player: player, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова', success: false})
    }
}


module.exports = {getTeam, getFilterArray, getPlayer}
