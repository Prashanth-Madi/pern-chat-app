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

const PORT=process.env.PORT||3000;

app.listen(PORT, () => {
  console.log('Server running on Port '+PORT);
});


//TO DO LIST
//->Add Socket.io
//->Integrate with frontend