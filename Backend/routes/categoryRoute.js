import { app } from '../server.js';
import { Category } from '../Schema/categorySchema.js';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })
import { v2 as cloudinary } from 'cloudinary'
import 'dotenv/config'

// configure for cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// Categeory CRUD
// 1. Create category
export const createCategory = (async (req, res) => {
    try {
        // check if name already exists
        const categoryExist = await Category.findOne({ name: req.body.name });
        if (categoryExist) {
            return res.status(409).json({ message: "Category already exists" });
        }

        // Handle the image upload before saving to database....upload a file (cloudinary - used as storage)
        const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);

        const newCategory = await new Category({ ...req.body, imageUrl: cloudinaryResponse.secure_url }).save();
        return res.status(201).json({
            message: "Created created successfully",
            data: newCategory,
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// // 2. Read all categories
// app.get("/categories", async (req, res) => {
//     try {
//         const allCategories = await Category.find();
//         return res.status(200).json({
//             message: "All categories fetched successfully",
//             data: allCategories,
//         })
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // 3. Read a particular category
// app.get("/categories/:id", async (req, res) => {
//     try {
//         const singleCategory = await Category.findById(req.params.id);

//         if (!singleCategory) {
//             return res.status(404).json({ message: "Category not found" }); // category if not found
//         }

//         return res.status(500).json({
//             message: "Single category feteched succesfully",
//             data: singleCategory
//         }
//         )
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // 4. Update a particular category
// app.patch("/categories/:id", async (req, res) => {
//     try {
//         const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         return res.status(200).json({
//             message: "Category Updated Successfully",
//             data: updatedCategory
//         })
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });

// // 5. Delete a particular category
// app.delete("/categories/:id", async (req, res) => {
//     try {
//         const deletedCategory = await Category.findByIdAndDelete(req.params.id);

//         if (!deletedCategory) {
//             return res.status(404).json({ message: "Category not found" }); // if category not found while doing delete operations
//         }
//         return res.status(200).json({
//             message: "Category deleted suceesfully",
//             data: deletedCategory
//         })
//     } catch (error) {
//         return res.status(500).json({ message: "Internal server error" });
//     }
// });