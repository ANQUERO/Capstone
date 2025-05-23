import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db/connect.db.js';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.route.js'
import adminRoutes from './routes/admin.routes.js'
import postRoutes from './routes/post.route.js'



console.log("Starting server initialization...");
// Load environment variables
dotenv.config()
console.log("Environment loaded, NODE_ENV:", process.env.NODE_ENV);


const app = express()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(cookieParser());

//Api routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/post', postRoutes);



// Connect to Database and Start Server
const Server = async () => {
    try {
        await connectDB();
        console.log('✅ Database connected successfully.')

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`);
        });

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

Server();

process.on('SIGINT', async () => {
    console.log('👋 SIGINT received. Closing MongoDB connection...');
    await mongoose.connection.close();
    console.log('🛑 MongoDB connection closed. Exiting process.');
    process.exit(0);
  });




