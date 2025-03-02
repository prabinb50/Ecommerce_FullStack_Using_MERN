import express from "express"
import { createProduct, deleteProductById, getAllProducts, getProductById, updateProductById } from "../controller/productController.js";
const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.patch("/:id", updateProductById);
router.delete("/:id", deleteProductById);

export default router;