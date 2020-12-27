const {getPaginator} = require("../../../services/middleware");
const News = require('../../../models/News')
const moment = require('moment')
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  await getListNews(req, res)
});
router.post('/news', async (req, res) => {
  await addNews(req, res)
});
router.get('/news/:newsId', async (req, res) => {
  await getNews(req, res)
});
router.put('/news/:id', async (req, res) => {
  await updateNews(req, res)
})
router.delete('/news/:id', async (req, res) => {
  await removeNews(req, res)
})

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
    let dataValue = moment(newsDate).format('LLL')
    await News.create({nameNews, dataValue, textNews}, async function (err) {
      if (err) return console.log(err)
      await res.status(201).json({message: "Новость добавлена", success: true})
    });
  } catch (e) {
    res.status(500).json({message: 'Error Server', success: false})
  }
}
async function updateNews(req, res) {
  try {
    const id = req.params.id
    const {nameNews, newsDate, textNews} = req.body.newsInfo
    let dataValue = moment(newsDate).format('LLL')
    await News.findByIdAndUpdate(id, {nameNews, dataValue, textNews}, async function (err, news) {
        if(err) return res.status(400).json({message: `err: ${err}`})
        await res.status(200).json({news})
    })
  } catch (e) {
    res.status(500).json({message: 'Error Server', success: false})
  }
}
async function removeNews(req, res) {
  try {
      const id = req.params.id
      News.findByIdAndDelete(id, async function (err) {
          if (err) return console.log(err);
          await res.status(200).json({ message: "News remove" });
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

module.exports = router

