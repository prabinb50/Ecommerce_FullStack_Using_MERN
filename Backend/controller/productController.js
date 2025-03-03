import cloudinary from "../lib/cloudinary.config.js";
import { Product } from "../Schema/productSchema.js";

// CRUD Operations For Product
// 1) Create a product
export const createProduct = async (req, res) => {
    try {
        // check if product name already taken or not
        const productExits = await Product.findOne({
            name: req.body.name
        });
        if (productExits) {
            return res.status(409).json({
                message: "Name already taken, please choose different name",
            })
        }
        // console.log(req.file);

        // uplaod the image in cloudinary and get the url
        // Handle the image upload before saving to database....upload a file (cloudinary - used as storage)
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newProduct = await new Product({ ...req.body, imageUrl: cloudinaryResponse.secure_url }).save();
        return res.status(201).json({
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Internal server error",

        })
    }
}

// 2) Read (Get) products
export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await Product.find();
        return res.status(200).json({
            message: "All products fetched successfully",
            data: allProducts
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

// Read a particular product
export const getProductById = async (req, res) => {
    try {
        const singleProduct = await Product.findById(req.params.id);
        return res.status(200).json({
            message: "Single product fetched successfully",
            data: singleProduct
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}

// 3) Update a particular product
export const updateProductById = async (req, res) => {
    try {
        // image (i.e., update gardaa image pathayo vaney) vako case maa  yesaree handle garney
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            const updatedProduct = await Product.findByIdAndUpdate(req.params.id, { ...req.body, imageUrl: cloudinaryResponse.secure_url }, { new: true });

            if (!updatedProduct) {
                return res.status(404).json({ message: "Product not found" }); // if category not found while doing update operations
            }
            return res.status(200).json({
                message: "Product Updated Successfully",
                data: updatedProduct
            })
        }

        // if image is not uploaded then dont handle the image upload part
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" })
        }
        return res.status(200).json({
            message: "Product Updated Successfully",
            data: updatedProduct
        })

    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

// 4) Delete a particular product
export const deleteProductById = async (req, res) => {
    try {
        const checkProduct = await Product.findById(req.params.id);
        if (!checkProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Single product deleted successfully",
            data: deletedProduct
        })

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
}