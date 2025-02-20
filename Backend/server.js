import express from "express";
import mongoose from "mongoose"

// configure the server
const app = express();

// middlewware
app.use(express.json());




// connect to mongoDB database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:GLlYWyKcNvqoeTMY@cluster0.zzdzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}




// Table Schema -> Products Schema (items for the product table)
const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String },
    price: { type: Number, required: true },
    previousPrice: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    category: { type: String, required: true }
});

// Make Prouct Table (Model)
const Product = mongoose.model("Product", productSchema);




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

})

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




app.get('/', (req, res) => {
    res.send("server is working");
})

app.get("/students", (req, res) => {
    res.send("100 students here");
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
})