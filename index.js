import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./utils/db.js";
import userRoutes from "./routes/user.route.js";

dotenv.config(); //to set custom path

const app = express();
const port = process.env.PORT || 4000;

app.use(
  cors({
    origin: process.env.BASEURL,
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

db();

app.use(express.json()); //to support and send json
app.use(express.urlencoded({ extended: true })); //to handle url endcoding

app.get("/", (req, res) => {
  res.status(200).json("It is up and running..");
});

app.use("/api/v1/users", userRoutes);

app.listen(port, () => console.log(`server is running on PORT:${port}`));
