import express from "express";
import register from "../controllers/auth.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, 'public/assets')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
const upload = multer({
    storage,
});


router.post('/register', upload.single("picture"), register)


export default router;
