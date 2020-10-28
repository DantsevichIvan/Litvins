const paginate = require('jw-paginate')
const {Router} = require('express');
const router = Router();

const arrPlayers = [
    {numberPlayer: 17, name: 'Ivan', position: 'Защитники', id: 1},
    {numberPlayer: 18, name: 'Max', position: 'Защитники', id: 2},
    {numberPlayer: 45, name: 'Pavel', position: 'Защитники', id: 3},
    {numberPlayer: 21, name: 'Konstantin', position: 'Полузащитники', id: 4},
    {numberPlayer: 32, name: 'Mikola', position: 'Полузащитники', id: 5},
    {numberPlayer: '02', name: 'Alexander', position: 'Нападающие', id: 6},
    {numberPlayer: 89, name: 'Denis', position: 'Нападающие', id: 7},
    {numberPlayer: 44, name: 'Dima', position: 'Вратари', id: 8},
    {numberPlayer: 14, name: 'Semen', position: 'Вратари', id: 9},
    {numberPlayer: 15, name: 'Zhenya', position: 'Защитники', id: 10},
    {numberPlayer: 40, name: 'Volodya', position: 'Защитники', id: 11},
    {numberPlayer: 23, name: 'Igor', position: 'Полузащитники', id: 12},
    {numberPlayer: 39, name: 'Vlad', position: 'Полузащитники', id: 13},
    {numberPlayer: '03', name: 'Alina', position: 'Нападающие', id: 14},
    {numberPlayer: 88, name: 'Viktor', position: 'Forwards', id: 15},
    {numberPlayer: 46, name: 'Anton', position: 'Вратари', id: 16},
    {numberPlayer: 46, name: 'Konstantin', position: 'Нападающие', id: 17},
    {numberPlayer: 46, name: 'Sergey', position: 'Полузащитники', id: 18},
    {numberPlayer: 46, name: 'Timofey', position: 'Нападающие', id: 19},
    {numberPlayer: 46, name: 'Yura', position: 'Защитники', id: 20}
    ]


function getPaginator(req, arr) {
    const currentPage = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.count) || 8
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}

router.get('/', async (req, res, next) => {
    try {
        await res.json(getPaginator(req, arrPlayers));
    } catch (e) {
        console.log(e)
    }
    next()
});
router.put('/', async (req, res,next) => {
    try {
        const filterValue = req.query.filter.toLowerCase() || 'all'
        if (filterValue === 'all') {
            await res.json(getPaginator(req, arrPlayers))
        } else {
            const filteredArray = arrPlayers.filter((el) => {
                // return el["position"].toLowerCase().includes(filterValue)
                return el["position"].toLowerCase().indexOf(filterValue) > -1

            })
            await res.json(getPaginator(req, filteredArray))
        }
    } catch (e) {
        console.log(e)
    }
    next()
})
router.get('/player/:userId', async (req, res, next) => {
    try {
        const searchPlayer = parseInt(req.params.userId)
        const player = arrPlayers.find(player => player.id === searchPlayer)
        res.json(player)
    } catch (e) {
        console.log(e)
    }
    next()
})
module.exports = router
