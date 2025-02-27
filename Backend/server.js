import express from "express";
import mongoose from "mongoose"
import { Product } from "./Schema/productSchema.js";
import { Category } from "./Schema/categorySchema.js";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })


// configure the server
const app = express();

// middlewware (for json)
app.use(express.json());

// connect to mongoDB database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:GLlYWyKcNvqoeTMY@cluster0.zzdzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}




// CRUD Operations For Product
// 1) Create a product
app.post("/products", async (req, res) => {
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


        const newProduct = await new Product(req.body).save();
        return res.status(201).json({
            message: "Product created successfully",
            data: newProduct,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
        })
    }
})

// 2) Read (Get) products
app.get("/products", async (req, res) => {
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
})

// Read a particular product
app.get("/products/:id", async (req, res) => {
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
})

// 3) Update a particular product
app.patch("/products/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" }); // if category not found while doing update operations
        }
        return res.status(200).json({
            message: "Product Updated Successfully",
            data: updatedProduct
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// 4) Delete a particular product
app.delete("/products/:id", async (req, res) => {
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

})




// Categeory CRUD
// 1. Create category
app.post("/categories", upload.single('imageUrl'), async (req, res) => {
    try {
        // Handle the image upload before saving to database
        console.log(req.file);


        // check if name already exists
        const categoryExist = await Category.findOne({ name: req.body.name });
        if (categoryExist) {
            return res.status(409).json({ message: "Category already exists" });
        }

        const newCategory = await new Category(req.body).save();
        return res.status(201).json({
            message: "Created created successfully",
            data: newCategory,
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// 2. Read all categories
app.get("/categories", async (req, res) => {
    try {
        const allCategories = await Category.find();
        return res.status(200).json({
            message: "All categories fetched successfully",
            data: allCategories,
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// 3. Read a particular category
app.get("/categories/:id", async (req, res) => {
    try {
        const singleCategory = await Category.findById(req.params.id);

        if (!singleCategory) {
            return res.status(404).json({ message: "Category not found" }); // category if not found 
        }

        return res.status(500).json({
            message: "Single category feteched succesfully",
            data: singleCategory
        }
        )
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// 4. Update a particular category
app.patch("/categories/:id", async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({
            message: "Category Updated Successfully",
            data: updatedCategory
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

// 5. Delete a particular category
app.delete("/categories/:id", async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);

        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" }); // if category not found while doing delete operations
        }
        return res.status(200).json({
            message: "Category deleted suceesfully",
            data: deletedCategory
        })
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});





app.get('/', (req, res) => {
    res.send("server is working");
})

app.get("/students", (req, res) => {
    res.send("100 students here");
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
})