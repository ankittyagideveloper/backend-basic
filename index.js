import dotenv from "dotenv";
import app from "./app.js";

import db from "./utils/db.js";

dotenv.config(); //to set custom path

const port = process.env.PORT || 4000;

db();

app.listen(port, () => console.log(`server is running on PORT:${port}`));
