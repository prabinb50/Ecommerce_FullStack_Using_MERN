import express from "express"
import { deleteUserById, getAllUsers, getUserById, loginUser, registerUser, updateUserById } from "../controller/userController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

export default router;