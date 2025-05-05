import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); //to set custom path

const app = express();

app.use(express.json()); //to support and send json
app.use(express.urlencoded({ extended: true })); //to handle url endcoding
app.use(
  cors({
    origin: process.env.BASEURL,
    credentials: true,
    methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.status(200).json("It is up and running..");
});

// import all the routes here
import userRoutes from "./routes/user.route.js";

app.use("/api/v1/users", userRoutes);

export default app;
