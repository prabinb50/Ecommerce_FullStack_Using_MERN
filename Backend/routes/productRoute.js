import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controller/productController.js";
import multer from 'multer';
import { verifyToken } from "../middleware/verifyToken.js";
const upload = multer({ dest: 'uploads/' })

const router = express.Router();

router.post("/", upload.single("imageUrl"), createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.patch("/:id", upload.single("imageUrl"), updateProductById);
router.delete("/:id", deleteProductById);

export default router;