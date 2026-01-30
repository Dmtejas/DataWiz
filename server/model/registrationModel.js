import mongoose from 'mongoose'

const registrationSchema = mongoose.Schema({
    event: {
        type: String
    },
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    USN: {
        type: String,
        required: [true, "USN is required"]
    },
    department: {
        type: String,
        required: [true, "Department is required"]
    },
    semester: {
        type: String,
        required: [true, "Semester is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    number: {
        type: String,
        required: [true, "Phone number is required"]
    }
},
{
    timestamps: true
});

const registrationModel = mongoose.model("Registration", registrationSchema)
export {registrationModel}