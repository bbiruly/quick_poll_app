import dotenv from 'dotenv'
import mongoose from 'mongoose';
import express from "express"
import authRoutes from './routes/admin.routes.js';
import pollRoute from "./routes/poll.routes.js"

import cors from 'cors'

// ENABLE DOT ENV 
dotenv.config();

// MIDDLEWARE
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}))

// ROUTE 
app.use('/api/auth', authRoutes);
app.use('/api/quickpoll', pollRoute)


mongoose
  .connect(process.env.MONGO_URI,{
    dbName: "estate"
  }, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

export default app;
