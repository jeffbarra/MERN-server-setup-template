import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

// Initialize dotenv
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize App
const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());

// Initialize API
app.get("/test", (req, res) => {
  res.status(200).send("API is Running...");
});

// Listener
app.listen(port, () => console.log(`Listening on PORT ${port}`));
