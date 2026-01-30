import { Router } from "express";
import { userController } from "../controller/userController.js";

const userRouter = Router();
userRouter.route('/').post(userController)

export {userRouter}