import express from "express";
import mangoose from "mongoose";

// configure the server
const app = express();

app.get('/', (req, res) => {
    res.send("server is working");
})

app.get("/students", (req, res) => {
    res.send("100 students here");
})

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
})

