import mongoose from "mongoose";

export async function connectDB() {
  await mongoose.connection(process.env.MONGO_URI).then(() => {
    console.log("Connected to the DB");
  });
}

export default mongooose;
