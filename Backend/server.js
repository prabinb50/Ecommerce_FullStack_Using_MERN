import express from "express";
import mongoose from "mongoose"
import { createCategory } from "./routes/categoryRoute.js";
import multer from 'multer';
const upload = multer({ dest: 'uploads/' })

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
router.post("/categories", upload.single('imageUrl'), createCategory);

app.get('/', (req, res) => {
    res.send("server is working");
})

app.get("/students", (req, res) => {
    res.send("100 students here");
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
})