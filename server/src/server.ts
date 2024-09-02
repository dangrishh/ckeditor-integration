import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/api/users', userRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://LSPU:admin@research-management-por.m3kzu45.mongodb.net/CKEditor-Test?retryWrites=true&w=majority&appName=Research-Management-Portal', {
}).then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
  

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
