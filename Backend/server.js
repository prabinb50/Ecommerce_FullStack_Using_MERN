import express from "express";
import mongoose from "mongoose"
import 'dotenv/config'
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"

const router = express.Router();

// configure the server
export const app = express();

// middlewware (for json)
app.use(express.json());

// connect to mongoDB database
try {
    mongoose.connect("mongodb+srv://joshiprabin17:GLlYWyKcNvqoeTMY@cluster0.zzdzy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}

// API Endpoints
app.use("/categories", categoryRoute);
app.use("/products", productRoute);

app.get('/', (req, res) => {
    res.send("server is working");
})

app.get("/students", (req, res) => {
    res.send("100 students here");
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
})