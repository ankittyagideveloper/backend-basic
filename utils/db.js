import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const db = () =>
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error("Error connectiong to mongodb"));

export default db;
