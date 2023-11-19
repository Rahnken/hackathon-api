import mongoose, { Error } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected...");
  } catch (error) {
    console.error("Database connection failed:");
    process.exit(1);
  }
};

module.exports = connectDB;
