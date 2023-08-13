import Joi from "joi";
import mongoose from "mongoose";

const PostSchema = mongoose.Schema(
    {
        userId: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        location: String,
        description: String,
        picturePath: String,
        userPicturePath: String,
        likes: {
            type: Map,
            of: Boolean,
        },
        comments: {
            type: Array,
            default: [],
        },
    },
    { timestamps: true }
);

export const JoiScheme = {
    createPost: Joi.object({
        userId: Joi.string().required(),
        description: Joi.string(),
        picturePath: Joi.string()
    }),
    likePost: Joi.object({
        userId: Joi.string().required(),
    })
}

export const Post = mongoose.model('Post', PostSchema);
