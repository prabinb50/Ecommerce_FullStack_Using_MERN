import { Product } from "../Schema/productSchema.js";
import { app } from "../server";

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