import { Router } from "express";
import { loginHandler, registerHandler } from "../controller/userController.js";

const userRouter = Router();
userRouter.route('/login').post(loginHandler)
userRouter.route('/register').post(registerHandler);

export {userRouter}