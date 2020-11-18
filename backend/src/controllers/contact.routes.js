const {getInfoContact} = require("../providers/contact");
const {Router} = require('express');
const router = Router();


router.get('/', async (req, res) => {
   await getInfoContact(req,res)
});


module.exports = router
