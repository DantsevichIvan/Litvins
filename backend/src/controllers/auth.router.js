const {registration} = require("../providers/auth");
const {logIn} = require("../providers/auth");
const {logOut} = require("../providers/auth");
const {Router} = require('express');
const router = Router();



router.post('/login', async (req, res, next) => {
    await logIn(req,res)
})
router.get('/logout',async (req,res,next)=>{
    await logOut(req, res)
})
router.post('/register', async (req, res, next) => {
    await registration(req, res)
})

module.exports = router
