import { Router } from "express";
import { loginHandler, registerHandler, dashboard } from "../controller/userController.js";
import validationHandler from "../middleware/sessionValidator.js";

const userRouter = Router();
userRouter.route('/login').post(loginHandler)
userRouter.route('/register').post(registerHandler);
userRouter.route('/dashboard').get(validationHandler, dashboard);

export {userRouter}