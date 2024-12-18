import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD;
const DB = process.env.DB_URL?.replace("<db_password>", DB_PASSWORD || "");

if (!DB) {
  console.error("Error: DB_URI is not defined in the environment variables.");
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
        maxPoolSize: 10,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000,
     });
    console.log("Connected to MongoDB Database  successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB Database:", error);
    process.exit(1);
  }
};

export default connectDB;
