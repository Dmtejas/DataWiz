import { Router } from "express";
import { eventRegistration, getRegistrations, getSingleRegistration } from "../controller/registrationController.js";
const router = Router()

router.route('/').post(eventRegistration)
router.route('/').get(getRegistrations)
router.route('/:id').get(getSingleRegistration)

export {router}