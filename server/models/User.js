import mongoose from "mongoose";
import Joi from "joi";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        min: 5,
        max: 50,
    },
    picturePath: {
        type: String,
        default: '',
    },
    friends: {
        type: Array,
        default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,

}, {
    timestamps: true,
});

export const JoiScheme = {
    register: Joi.object({
        firstName: Joi.string().required().min(2).max(50),
        lastName: Joi.string().required().min(2).max(50),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5).max(50),
        picturePath: Joi.string(),
        friends: Joi.array(),
        location: Joi.string(),
        occupation: Joi.string(),
    }),
    login: Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required().min(5).max(50),
    })
};

export const User = mongoose.model('User', UserSchema);
