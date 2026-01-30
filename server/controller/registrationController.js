import { registrationModel } from "../model/registrationModel.js"
import expressAsyncHandler from "express-async-handler"

//@desc POST --> Event form body
const eventRegistration = expressAsyncHandler( async (req, res) => {
    const data = req.body;
    const createRegistration = await registrationModel.create(data);
    if(!createRegistration) {
        res.status(500);
        throw new Error("Error creating the registration")
    }
    res.json(createRegistration)
})

//desc GET --> Get all registrations
const getRegistrations = expressAsyncHandler( async (req, res) => {
    const getRegistration = await registrationModel.find();
    if(!getRegistration) {
        res.status(500);
        throw new Error("Error creating the registration")
    }
    res.json(getRegistration)
})

//desc GET:id --> Get registartion with id 
const getSingleRegistration = expressAsyncHandler( async (req, res) => {
    const {id} = req.params
    const getSingleRegistration = await registrationModel.findById(id);
    if(!getSingleRegistration) {
        res.status(500);
        throw new Error("Error creating the registration")
    }
    res.json(getSingleRegistration)
})

export {eventRegistration, getRegistrations, getSingleRegistration}