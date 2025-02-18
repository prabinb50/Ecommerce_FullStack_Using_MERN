import express from "express";
import mongoose from "mongoose";
import mangoose from "mongoose";

// configure the server
const app = express();
app.use(express.json());

// connect to mongoDB database
try {
    mangoose.connect("mongodb+srv://joshiprabin17:auB3An6tWfrvnbJQ@cluster0.cthkw.mongodb.net/ecommerce-db?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}

// Products Schema (items for the product table)
const productSchema = new mangoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    previousPrice: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    categoty: { type: String, required: true }
});

// Make Prouct Table (Model)
const Product = mongoose.model("Product", productSchema);

// CRUD Operations For Product
// 1) Create a product
app.post("/products", async (req, res) => {
    try {
        const newProduct = await new Product(req.body).save();
        console.log(newProduct);
    } catch (error) {
        console.log("Something went wrong", error);
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

