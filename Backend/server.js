import dotenv from "dotenv";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

app.use(dotenv.config());

await connectDB();

app.listen(3000, () => {
  console.log("Server is not running on the port 3000");
});
