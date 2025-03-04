import { User } from "../Schema/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

// Create User
export const registerUser = async (req, res) => {
    try {
        // check if user already exists
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(409).json({
                message: "User already exists with this email please choose another email"
            })
        }

        // Hash the password before saving it to the database
        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

        const newRegisteredUser = await new User({ ...req.body, password: hashPassword }).save();
        return res.status(201).json({
            message: "User registered suceessfully",
            data: newRegisteredUser
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error while registering/creating user",
            error: error,
        })
    }
};

// login user
export const loginUser = async (req, res) => {
    try {
        // check if the user exists or not
        const userExists = await User.findOne({ email: req.body.email });
        if (!userExists) {
            return res.status(409).json({
                message: "You are not registered yet, please register before login"
            })
        }

        // if user exists, compare the password
        const isPasswordMatched = await bcrypt.compare(req.body.password, userExists.password);
        if (!isPasswordMatched) {
            return res.status(401).json({
                message: "Password is not correct"
            })
        }
        // if password matched then generate the token
        const myToken = jwt.sign({ email: userExists.email }, "this_is_private_key", { expiresIn: "24h" });
        console.log(myToken);
        return res.status(200).json({
            message: "User logged in successfully",
            token: myToken,
            user: userExists
        });

    } catch (error) {
        return res.status(500).json({
            message: "Error while loging user",
            error: error,
        })
    }
};

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