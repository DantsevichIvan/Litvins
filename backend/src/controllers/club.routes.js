const {getInfoClub,getInfoForYear} = require("../providers/club");
const {Router} = require('express');
const router = Router();

router.get('/', async (req, res) => {
  await getInfoClub(req,res)
});
router.get('/year/:id', async (req, res) => {
   await getInfoForYear(req,res)
})
module.exports = router
