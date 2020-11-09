const {getPlayer} = require("../providers/team");
const {getFilterArray} = require("../providers/team");
const {getTeam} = require("../providers/team");
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
