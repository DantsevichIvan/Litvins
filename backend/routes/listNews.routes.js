const paginate = require('jw-paginate')
const {Router} = require('express');
const router = Router();
const News = require('./../models/News')
const moment = require('moment')



function getPaginator(req, arr) {
    const currentPage = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.count) || 8
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}
router.get('/', async (req, res, next) => {
    try {
        const news = await News.find({}).lean()
        let newsList = getPaginator(req, news)
        if (!newsList.pageOfItems.length){
            await res.json({pageOfItems:[],message: 'Новостей нету'});
        }else {
            await res.json(newsList);
        }
    } catch (e) {
        console.log(e)
    }
    next()
});
router.get('/news/:newsId', async (req, res, next) => {
    try {
        const searchNews = req.params.newsId
        const news = await News.findById(searchNews)
        res.json(news)
    } catch (e) {
        console.log(e)
    }
    next()
});
router.post('/news', async (req, res, next) => {
    try {
        const {nameNews, newsDate, textNews} = req.body.newsInfo
        let dataValue = moment(newsDate).format('ll')
        const news = new News({nameNews,dataValue,textNews});
        await news.save()
        res.status(201).json({message:"Новость добавлена"})
    } catch (e) {
        console.log(e)
    }
});

module.exports = router