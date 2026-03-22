import mongoose from 'mongoose';
// import { configDotenv } from 'dotenv';
// configDotenv();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;


