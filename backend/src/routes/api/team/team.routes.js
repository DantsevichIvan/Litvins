const {getPlayer} = require("./team");
const {getFilterArray} = require("./team");
const {getTeam} = require("./team");
const {Router} = require('express');
const router = Router();


router.get('/', async (req, res, next) => {
   await getTeam(req, res)
});
router.get('/position', async (req, res,next) => {
   await getFilterArray(req,res)
})
router.get('/player/:userId', async (req, res, next) => {
  await getPlayer(req,res)
})
module.exports = router
