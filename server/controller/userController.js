import { userModel } from "../model/userModel.js";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginHandler = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400);
        throw new Error(`All fields are mandatory`);
    }

    const user = await userModel.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error("User doesn't exist, Register first");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        res.status(401);
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            email,
            role: "admin",
        },
        process.env.ACCESS_TOKEN,
        { expiresIn: "2m" },
    );

    if (!token) {
        res.status(400);
        throw new Error(`Error in setting up JWT`);
    }
    res.status(200).json(token);
});

const registerHandler = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error(`All fields are mandatory`);
    }

    const isExist = await userModel.findOne({ email });
    if (isExist) {
        res.status(400);
        throw new Error(`User already exists, please log in`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({
        email,
        password: hashedPassword,
    });

    res.status(200).json({
        email,
        password,
    });
});

export { loginHandler, registerHandler };
