import express, { Request, Response } from 'express';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js';
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

const app = express();
dotenv.config();
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes)


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
