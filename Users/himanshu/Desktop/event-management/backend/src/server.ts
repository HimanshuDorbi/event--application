import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database';

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Express
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Define the root route for testing
app.get('/', (req, res) => {
  res.send('🎉 Welcome to the Event Management API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
