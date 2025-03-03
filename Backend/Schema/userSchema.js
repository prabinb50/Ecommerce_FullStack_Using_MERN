import mongoose from "mongoose"

// User Schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
})

// User Table (User Table)
export const User = mongoose.model("User", userSchema);