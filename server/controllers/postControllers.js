import { JoiScheme, Post } from "../models/Post.js";
import { User } from "../models/User.js";


export const createPost = async (req, res) => {
    try {
        const { userId, description, picturePath } = req.body;

        const { error } = JoiScheme.createPost.validate(req.body);
        if (error) {
            return res.status(400).json({ message: "Missing required field" });
        };

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ error: "User not found" })
        };

        const newPost = new Post({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.PicturePath,
            picturePath,
            likes: {},
            comments: [],
        });

        await newPost.save();

        const post = await Post.find();

        res.status(201).json(post);

    } catch (error) {
        res.status(409).json({ message: err.message });
    }
};

export const getFeedPosts = (req, res) => {
    try {

    } catch (error) {
        res.status(409).json({ message: err.message });
    }
};

export const getUserPosts = (req, res) => {
    try {

    } catch (error) {
        res.status(409).json({ message: err.message });
    }
};

export const likePost = (req, res) => {
    try {

    } catch (error) {
        res.status(409).json({ message: err.message });
    }
};