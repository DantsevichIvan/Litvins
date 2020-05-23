const paginate = require('jw-paginate')

const {Router} = require('express');
const router = Router();
const arrPlayers = [
    {numberPlayer: 17, name: 'Ivan', position: 'Defenders', id: 1},
    {numberPlayer: 18, name: 'Max', position: 'Defenders', id: 2},
    {numberPlayer: 45, name: 'Pavel', position: 'Defenders', id: 3},
    {numberPlayer: 21, name: 'Konstantin', position: 'Midfielders', id: 4},
    {numberPlayer: 32, name: 'Mikola', position: 'Midfielders', id: 5},
    {numberPlayer: '02', name: 'Alexander', position: 'Forwards', id: 6},
    {numberPlayer: 89, name: 'Denis', position: 'Forwards', id: 7},
    {numberPlayer: 44, name: 'Dima', position: 'Goalkeepers', id: 8},
    {numberPlayer: 14, name: 'Semen', position: 'Defenders', id: 9},
    {numberPlayer: 15, name: 'Zhenya', position: 'Defenders', id: 10},
    {numberPlayer: 40, name: 'Volodya', position: 'Defenders', id: 11},
    {numberPlayer: 23, name: 'Igor', position: 'Midfielders', id: 12},
    {numberPlayer: 39, name: 'Vlad', position: 'Midfielders', id: 13},
    {numberPlayer: '03', name: 'Alina', position: 'Forwards', id: 14},
    {numberPlayer: 88, name: 'Viktor', position: 'Forwards', id: 15},
    {numberPlayer: 46, name: 'Anton', position: 'Goalkeepers', id: 16},
    {numberPlayer: 46, name: 'Konstantin', position: 'Forwards', id: 17},
    {numberPlayer: 46, name: 'Sergey', position: 'Midfielders', id: 18},
    {numberPlayer: 46, name: 'Timofey', position: 'Forwards', id: 19},
    {numberPlayer: 46, name: 'Yura', position: 'Defenders', id: 20}]

function getPaginator(req, arr){
    const currentPage = parseInt(req.query.page)||1;
    const pageSize = parseInt(req.query.count)||8
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex+1);
    return {pager , pageOfItems}
}

router.get('/', async (req, res, next) => {
    try {
        return  res.json(getPaginator(req,arrPlayers));
    }catch (e) {
        console.log(e)
    }
});
router.put('/',(req,res) =>{
    try {
        const filterValue = req.query.filter.toLowerCase() ||'all'
        if (filterValue === 'all'){
            return res.json(getPaginator(req,arrPlayers))
        }else {
            const filteredArray = arrPlayers.filter((el)=>{
                return el["position"].toLowerCase().includes(filterValue)
            })
            return res.json(getPaginator(req,filteredArray))
        }
    }catch (e) {
        console.log(e)
    }

})

module.exports = router