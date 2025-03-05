import cloudinary from '../lib/cloudinary.config.js';
import { Category } from '../Schema/categorySchema.js';

// Categeory CRUD
// 1. Create category
export const createCategory = async (req, res) => {
    try {
        // console.log(req.file);
        // check if name already exists
        const categoryExist = await Category.findOne({ name: req.body.name });
        if (categoryExist) {
            return res.status(409).json({ message: "Category already exists, please choose different name" });
        }

        // Handle the image upload before saving to database....upload a file (cloudinary - used as storage)
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newCategory = await new Category({ ...req.body, imageUrl: cloudinaryResponse.secure_url }).save();
        return res.status(201).json({
            message: "Created created successfully",
            data: newCategory,
        })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error
        }
        );
    }
};

// 2. Read all categories
export const getAllCategories = async (req, res) => {
    try {
        const allCategories = await Category.find();
        return res.status(200).json({
            message: "All categories fetched successfully",
            data: allCategories,
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

// 3. Read a particular category
export const getCategoryById = async (req, res) => {
    try {
        const singleCategory = await Category.findById(req.params.id);

        // category if not found
        if (!singleCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        return res.status(500).json({
            message: "Single category feteched succesfully",
            data: singleCategory
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

// 4. Update a particular category
export const updateCategoryById = async (req, res) => {
    try {
        // image (i.e., update gardaa image pathayo vaney) vako case maa yesaree handle garney
        if (req.file) {
            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            const updatedCategory = await Category.findByIdAndUpdate(req.params.id, { ...req.body, imageUrl: cloudinaryResponse.secure_url }, { new: true });

            // if category not found while doing update operations
            if (!updatedCategory) {
                return res.status(404).json({ message: "Category not found" });
            }
            return res.status(200).json({
                message: "Category Updated Successfully",
                data: updatedCategory
            })
        }

        // if image is not uploaded then dont handle the image upload part
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) {
            return res.status(404).json({ message: "Category not found" })
        }
        return res.status(200).json({
            message: "Category Updated Successfully",
            data: updatedCategory
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

// 5. Delete a particular category
export const deleteCategoryById = async (req, res) => {
    try {
        // check if category exits first
        const checkCategory = await Category.findById(req.params.id);
        if (!checkCategory) {
            return res.status(404).json({ message: "Category not found" });
        }

        // Proceed with deletion only if the product exists
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: "Category deleted suceesfully",
            data: deletedCategory
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};