import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async () => {
  if (!config.mongoUri) {
    throw new Error("MONGO_URI is required. Add your MongoDB Atlas URI to backend/.env.");
  }

  mongoose.connection.on("connected", () => {
    console.log("MongoDB Atlas connected");
  });

  mongoose.connection.on("error", (error) => {
    console.error("MongoDB connection error:", error.message);
  });

  await mongoose.connect(config.mongoUri);
};
