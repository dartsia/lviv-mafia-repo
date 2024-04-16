const multer = require('multer');
const fs = require('fs');
const dir = './uploads';

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/') 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname) 
    }
});

const upload = multer({ storage: storage });

module.exports = upload;