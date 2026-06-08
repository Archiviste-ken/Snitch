import "dotenv/config";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";

app.use(dotenv.config());

app.listen(3000, () => {
  console.log("Server is not running on the port 3000");
});
