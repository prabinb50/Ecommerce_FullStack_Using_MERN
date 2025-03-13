import express from "express"
const router = express.Router();
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })
import { createCategory, deleteCategoryById, getAllCategories, getCategoryById, updateCategoryById } from "../controller/categoryController.js";
import { verifyToken } from "../middleware/verifyToken.js";


router.post("/", upload.single('imageUrl'), createCategory);
router.get("/", getAllCategories);
router.get("/:id", getCategoryById);
router.patch("/:id", updateCategoryById);
router.delete("/:id", deleteCategoryById);

export default router;