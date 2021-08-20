import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
const PORT = process.env.PORT || 5000;

dotenv.config();
const app = express();

//connecting the database
connectDB();

app.use(express.json());

app.listen(PORT, () => console.log(`server running on ${PORT}`));
