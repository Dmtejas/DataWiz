import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "This field is required"]
    },
    password: {
        type: String,
        required: [true, "This field is required"]
    }
})

const userModel = mongoose.model("Admin", userSchema)

export {userModel}