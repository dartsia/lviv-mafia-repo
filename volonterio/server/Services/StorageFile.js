const { S3Client, PutObjectCommand, GetObjectCommand } = require("@aws-sdk/client-s3");
const multer = require('multer');
const multerS3 = require('multer-s3');
require('dotenv').config();
class S3Service {
    constructor() {
        console.log("AWS Region:", process.env.AWS_DEFAULT_REGION);
        this.s3Client = new S3Client({
            region: process.env.AWS_DEFAULT_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        });
    }

    createUpload(bucketName, folderName = '') {
        const storage = multerS3({
            s3: this.s3Client,
            bucket: bucketName,
            key: (req, file, cb) => {
                const filename = `${Date.now().toString()}-${file.originalname}`;
                const fullPath = folderName ? `${folderName}/${filename}` : filename;
                req.uploadedFileName = fullPath; 
                cb(null, fullPath);
            }
        });
    
        return multer({ storage: storage });
    }
    
    getFileFromS3(bucketName, key) {
        const getObjectParams = {
            Bucket: bucketName,
            Key: key
        };
        return this.s3Client.send(new GetObjectCommand(getObjectParams));
    }
}

module.exports = new S3Service();
