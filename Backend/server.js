import express from "express";
import mongoose from "mongoose"
import 'dotenv/config'
import categoryRoute from "./routes/categoryRoute.js"
import productRoute from "./routes/productRoute.js"
import userRoute from "./routes/userRoute.js"
import cors from "cors"

const router = express.Router();

// configure the server
export const app = express();

// middlewware (for json)
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
}));

// connect to mongoDB database
try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connection Success");
} catch (error) {
    console.log("MangoDB Connection Error", error);
}

// API Endpoints
app.use("/categories", categoryRoute);
app.use("/products", productRoute);
app.use("/users", userRoute);

app.get('/', (req, res) => {
    res.send("server is working");
})

app.listen(process.env.APP_PORT, () => {
    console.log(`Example app listening on port ${process.env.APP_PORT}`);
})