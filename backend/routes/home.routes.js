const paginate = require('jw-paginate')
const {Router} = require('express');
const router = Router();
const Match = require('./../models/Match')

const arrNews = [
    {id: 1, name: 'Тренировка сегодня'},
    {id: 2, name: 'ДР Кости'},
    {id: 3, name: 'Тренирвка во вторник'},
    {id: 4, name: 'ДР Денис'},
    {id: 5, name: 'Тренировка завтра'},
    {id: 6, name: 'Игра завершилась со счетом 5/2'},
    {id: 7, name: 'Тренировка сегодня'},
    {id: 8, name: 'Гуляем в бане'},
    {id: 9, name: 'Пьем в баре'},
    {id: 10, name: 'Тренировка сегодня'},
    {id: 11, name: 'ДР Кости'},
    {id: 12, name: 'Тренирвка во вторник'},
    {id: 13, name: 'ДР Денис'},
    {id: 14, name: 'Тренировка завтра'},
    {id: 15, name: 'Игра завершилась со счетом 5/2'},
    {id: 16, name: 'Тренировка сегодня'},
    {id: 17, name: 'Гуляем в бане'},
    {id: 18, name: 'Пьем в баре'}
]

function getPaginator(arr,currentPage, pageSize) {
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}

router.get('/homeInfo', async (req, res, next) => {
    try {
        //last Match

        //info about club
        let infoAboutClub = {text:'Любительское объединение футбола "Литвины" является сообществом людей,увлечённых футболом.' +
                ' Нас объединяет стремление к здоровому образу жизни и к победе путём совершенствования футбольного мастерства,' +
                ' постоянных тренировок, поддержания физической формы на самом высоком уровне.' ,trainers:[{img1: 'img1',id:1},{img2:'img2',id:2}]}
        //statistics
        let statisticsPlayers = [
            {name:'Бомбардиры', listPlayers:[{name:'Данцевич Иван',count:25, id:1},{name:'Cиницкий Денис',count:20,id:2},{name:'Стригуцкий Дмитрий',count:15,id:3}],id:1},
            {name:'Ассисты', listPlayers:[{name:'Данцевич Иван',count:20,id:1},{name:'Cиницкий Денис',count:18,id:2},{name:'Стригуцкий Дмитрий',count:15,id:3}],id:2},
            {name:'Лучшие игроки', listPlayers:[{name:'Данцевич Иван',count:5,id:1},{name:'Cиницкий Денис',count:3,id:2},{name:'Стригуцкий Дмитрий',count:2,id:3}],id:3}]
        //next Match and list Matches score = false
        const matchList = await Match.find({}).lean()
        let nextMatch = await Match.findOne({score: false})
        if (!!nextMatch){
          nextMatch = {}
        }
        // last news
        let newsList = getPaginator(arrNews, 1,2)
        //All info
        let data = {infoAboutClub,statisticsPlayers,matchList,nextMatch,newsList}
        await res.json(data);
    } catch (e) {
        console.log(e)
    }
    next()
})

module.exports = router