import dotenv from "dotenv";

dotenv.config();

type Config = {
  readonly MONGO_URI: string;
};

if (!process.env.MONGO_URI) {
  throw new Error("MONGO_URI is not defined in the .env file");
}

export const config: Config = {
  MONGO_URI: process.env.MONGO_URI,
};
