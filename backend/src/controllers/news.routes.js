const {Router} = require('express');
const router = Router();
const {getListNews, addNews, getNews} = require("../providers/news");

router.get('/', async (req, res) => {
    await getListNews(req, res)
});
router.post('/news', async (req, res) => {
    await addNews(req, res)
});
router.get('/news/:newsId', async (req, res) => {
    await getNews(req, res)
});
module.exports = router
