import multer from "multer";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const tempPath = path.join(__dirname, "..", "public", "assets");

const multerConfig = multer.diskStorage({
    destination: tempPath,
    filename: (req, file, cb) => {
        const { _id } = req.user;
        cb(null, `${_id}__${file.originalname}`);
    },
});

const upload = multer({
    storage: multerConfig,
});

export default upload;