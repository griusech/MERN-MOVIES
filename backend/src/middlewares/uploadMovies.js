const multer  = require('multer')
const path = require('path')
const uploadFolder = path.join(__dirname, '../upload')

// console.log(uploadFolder)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage });
exports.upload = upload;