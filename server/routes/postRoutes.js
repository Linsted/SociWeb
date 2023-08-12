import express from "express";
import upload from "../middleware/upload.js";
import { createPost, getFeedPosts, getUserPosts, likePost } from "../controllers/postControllers.js";
import { verifyToken } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get('/', verifyToken, getFeedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

router.post('/posts', verifyToken, upload.single("picture"), createPost);

router.patch('/:id/like', verifyToken, likePost)

export default router;  