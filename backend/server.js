import app from "./app.js";
import connectDB from "./config/db.js";
import { configDotenv } from "dotenv";
configDotenv();

connectDB();

const PORT = process.env.PORT;

app.listen(PORT,() => {
    console.log(`Server is on ${PORT}`);
})