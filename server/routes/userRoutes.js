import express from "express";
import { verifyToken } from "../middleware/authMiddleware.js";
import { getUser, getUserFriends, addRemoveFriend } from "../controllers/userControllers.js";

const router = express.Router();

router.get('/:id', verifyToken, getUser);
router.get('/:id/friends', verifyToken, getUserFriends);

router.patch('/:id/:friendId', verifyToken, addRemoveFriend)

export default router;