const {getInfoHomePage} = require("../providers/home");
const {Router} = require('express');
const router = Router();

router.get('/homeInfo', async (req, res) => {
  await getInfoHomePage(req,res)
})

module.exports = router
