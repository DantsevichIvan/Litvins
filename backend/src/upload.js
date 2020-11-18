const multer = require("multer");

const storageConfig = multer.diskStorage({
        destination: (req, file, cb) => {
            debugger
            cb(null, '/src/my-images');
        },
        filename: (req, file, cb) => {
            debugger
            cb(null, file.fieldname);
        }
    });
const upload = multer({storage: storageConfig})

module.exports = {upload}
