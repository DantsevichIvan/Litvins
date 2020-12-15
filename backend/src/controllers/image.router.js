const {Router} = require('express');
const router = Router();
const multer  = require("multer");
const {upload} = require("../upload");
const {addPhoto} = require("../providers/image");


router.post('/', async (req, res) =>{
   await  addPhoto(req,res)
})

module.exports = router
