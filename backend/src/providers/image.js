

async function addPhoto(req, res) {
    try {
        debugger
        const images = req.files.map((file) => {
            return {
                filename: file.filename,
                originalname: file.originalname
            }
        })
        Image.insertMany(images, (err, result) => {
            if (err) return res.sendStatus(404)
            res.json(result)
        })
    }catch (e) {
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}


module.exports = {addPhoto}
