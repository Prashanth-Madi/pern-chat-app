import prisma from '../db/prisma.js';
import bcryptjs from 'bcryptjs';
import { generateToken } from '../utils/generateToken.js';
// const app= express();
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body;
        if (!fullName || !username || !password || !confirmPassword || !gender) {
            return res.status(400).json({ error: "Please fill in all the details" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await prisma.user.findUnique({ where: { username } });
        if (user) {
            return res.status(400).json({ error: "Username already exists" });
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=[${username}]`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=[${username}]`;
        const newUser = await prisma.user.create({
            data: {
                username,
                fullName,
                password: hashedPassword,
                gender,
                profilePic: (gender === "male") ? boyProfilePic : girlProfilePic,
            }
        });
        if (newUser) {
            //generate a token
            generateToken(newUser.id, res);
            return res.status(201).json({
                id: newUser.id,
                username: newUser.username,
                fullName: newUser.fullName,
                profilePic: newUser.profilePic
            });
        }
        else {
            return res.status(400).json({ error: "Invalid User data" });
        }
    }
    catch (error) {
        console.log("Errror in signup controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};
export const login = async (req, res) => {
    const { username, password } = req.body;
    //check if the username exists in the database
    const user = await prisma.user.findUnique({ where: { username } });
    if (!user) {
        return res.status(400).json({ error: "Invalid Username" });
    }
    //check if the passwords match
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
        return res.status(400).json({ error: "Invalid Password" });
    }
    //generate token as the user exists and passwords match
    generateToken(user.id, res);
    res.status(200).json({
        id: user.id,
        fullName: user.fullName,
        username: user.username,
        profilePic: user.profilePic
    });
};
export const logout = async (req, res) => {
    try {
        console.log(req);
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "logged out successfully" });
    }
    catch (error) {
        console.log("error in logout controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};
export const getMe = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({ where: { id: req.user.id } });
        if (!user) {
            return res.status(404).json({ error: "User Not Found" });
        }
        res.status(200).json({
            id: user.id,
            fullName: user.fullName,
            username: user.username,
            profilePic: user.profilePic,
        });
    }
    catch (error) {
        console.log("error in getMe Controller", error.message);
        res.status(500).json({ error: "Internal Server error" });
    }
};
