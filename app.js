import express from "express";
import dotenv from "dotenv";
import { shortenURL } from "./controllers/shortenController.js";

const app = express();

dotenv.config();

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server is running on Port ${process.env.SERVER_PORT}`);
})

