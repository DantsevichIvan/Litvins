const {getPaginator} = require("../services/middleware");
const News = require('../models/News')
const moment = require('moment')

async function getListNews(req, res) {
    try {
        News.find({}, async function (err, listNews) {
            if (err) return console.log(err)
            if (!listNews.length) return await res.status(201).json({
                pageOfItems: [],
                message: 'Новостей нету',
                success: true
            })
            let newsList = getPaginator(req, listNews)
            await res.status(201).json({newsList, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Error Server', success: false})
    }
}
async function getNews(req, res) {
    try {
        const searchNews = req.params.newsId
        await News.findById(searchNews, async function (err, news) {
            if (err) return console.log(err)
            await res.status(201).json({news, success: true})
        })
    } catch (e) {
        res.status(500).json({message: 'Error Server', success: false})
    }
}
async function addNews(req, res) {
    try {
        const {nameNews, newsDate, textNews} = req.body.newsInfo
        let dataValue = moment(newsDate).format('ll')
        await News.create({nameNews, dataValue, textNews}, async function (err) {
            if (err) return console.log(err)
            await res.status(201).json({message: "Новость добавлена", success: true})
        });
    } catch (e) {
        res.status(500).json({message: 'Error Server', success: false})
    }
}
async function getListNewsHomePage(req, res) {
    try {
        let listNews = await News.find({})
        if (!listNews.length) return {
            pageOfItems: [],
            message: 'Новостей нету',
            success: true
        }
        return await getPaginator(req, listNews)
    } catch (e) {
        res.status(500).json({message: 'Error Server', success: false})
    }
}


module.exports = {getListNews, getNews, addNews, getListNewsHomePage}
