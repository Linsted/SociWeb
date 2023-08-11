import express from "express";
import multer from "multer";
import { login, register } from "../controllers/auth.js";

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


router.post('/register', upload.single("picture"), register);
router.post('/login', login);



export default router;
