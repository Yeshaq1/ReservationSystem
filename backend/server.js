import express from 'express';
import dotenv from 'dotenv';
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`server running on ${PORT}`));
