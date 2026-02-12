import { userModel } from "../model/userModel.js";
import expressAsyncHandler from "express-async-handler";
import { registrationModel } from "../model/registrationModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const loginHandler = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error(`All fields are mandatory`);
    }

    const user = await userModel.findOne({ email });
    if(!user) {
        res.status(400);
        throw new Error(`User doesn't exist`);
    }

    const isMatching = await bcrypt.compare(password, user.password);
    if(!isMatching) {
        res.status(401);
        throw new Error(`Authentication failed, Invalid username or password`);
    }

    req.session.user = {
        email: email
    }

    res.status(200).json({message: 'Login successfull'});
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


const dashboard = expressAsyncHandler( async (req, res) => {
    const getRegistration = await registrationModel.find();
    if(!getRegistration) {
        res.status(500);
        throw new Error("Error creating the registration")
    }
    res.status(200);
    res.json(getRegistration)
} )

export { loginHandler, registerHandler, dashboard };
