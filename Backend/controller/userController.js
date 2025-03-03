import { User } from "../Schema/userSchema.js";

// Create User
export const registerUser = async (req, res) => { };

// login user
export const loginUser = async (req, res) => { };

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find();
        return res.status(200).json({
            message: "All users fetched succesfully",
            data: allUsers
        })
    } catch (error) {
        return res.status(500).json({
            message: "error in fetching users",
            error: error
        })
    }
};

// Get user by Id
export const getUserById = async (req, res) => {
    try {

    } catch (error) {

    }
};

// Update user by Id
export const updateUserById = async (req, res) => { };

// delete user by Id
export const deleteUserById = async (req, res) => { };