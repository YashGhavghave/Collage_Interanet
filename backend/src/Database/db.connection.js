import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv()

export async function db_connection(){
    try {
        mongoose.connect('mongodb://localhost:27017/')
    } catch (error) {
        console.log(error);
    }
}
