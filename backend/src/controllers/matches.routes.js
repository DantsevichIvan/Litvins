const {getNextMatch,updateMatch,deleteMatch,addMatch,getMatch,getMatches} = require("../providers/matches");
const {Router} = require('express');
const router = Router();


router.get('/', async (req, res) => {
    await getMatches(req, res)
});
router.get('/match/:matchId', async (req, res) => {
    await getMatch(req, res)
});
router.post('/match', async (req, res) => {
    await addMatch(req, res)
})
router.delete('/match/:id', async (req, res) => {
    await deleteMatch(req,res)
})
router.put('/match/:id', async (req, res) => {
   await updateMatch(req,res)
})
router.get('/next-match', async (req, res) => {
    await getNextMatch(req,res)
});


module.exports = router
