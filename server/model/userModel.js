import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
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