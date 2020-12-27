const {getListNewsHomePage} = require("../news/news");
const {getLastMatchesAndNextMatch} = require("../matches/matches");


function getStatisticsData() {
    return [
        {
            name: 'Бомбардиры',
            listPlayers: [
                {name: 'Данцевич Иван', count: 25, id: 1}, {
                name: 'Cиницкий Денис',
                count: 20,
                id: 2
            }, {name: 'Стригуцкий Дмитрий', count: 15, id: 3}],
            id: 1
        },
        {
            name: 'Ассисты',
            listPlayers: [{name: 'Данцевич Иван', count: 20, id: 1}, {
                name: 'Cиницкий Денис',
                count: 18,
                id: 2
            }, {name: 'Стригуцкий Дмитрий', count: 15, id: 3}],
            id: 2
        },
        {
            name: 'Лучшие игроки',
            listPlayers: [{name: 'Данцевич Иван', count: 5, id: 1}, {
                name: 'Cиницкий Денис',
                count: 3,
                id: 2
            }, {name: 'Стригуцкий Дмитрий', count: 2, id: 3}],
            id: 3
        }
    ]
}

async function getInfoHomePage(req, res) {
    try {
        //last Match
        let lastMatches = (await getLastMatchesAndNextMatch(req, res)).lastMatches
        //statistics
        let statisticsData = getStatisticsData()
        //next Match and list Matches score = false
        let nextMatch = (await getLastMatchesAndNextMatch(req, res)).nextMatch
        if (!nextMatch) {
            nextMatch = {}
        }
        // last news
        let newsList = await getListNewsHomePage(req, res)

        await res.status(201).json({statisticsData, nextMatch, newsList, lastMatches, success: true});
    } catch (e) {
        await res.status(500).json({message: 'Error Server, Sorry', success: true})
    }
}


module.exports = {getInfoHomePage}
