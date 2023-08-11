import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
    console.log('register controller works');
    try {
        const { firstName, lastName, email, password, picturePath, friends, location, occupation } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            picturePath,
            friends,
            location,
            occupation,
            viewedProfile: Math.floor(Math.random() * 10000),
            impressions: Math.floor(Math.random() * 10000),
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "User not found" })
        };

        const isMatch = bcrypt.compare(password, user.password);
        if (!isMatch) { return res.status(400).json({ error: "Invalid credentials" }) };

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        // TODO  Make sure that password isn`t sending in response to user. 
        delete user.password;
        res.status(200).json({ token, user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
