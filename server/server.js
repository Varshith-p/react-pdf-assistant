/**
 * Backend Server Configuration
 *
 * This script configures and runs a backend server using the Express.js framework. The server
 * provides API endpoints for a chat application and interacts with a MongoDB database.
 */

// Load environment variables from a .env file
require("dotenv").config();

// Import required libraries and modules
const express = require("express");
const app = express();

require("express-async-errors");
const connectDB = require("./db/connectDB");
const cors = require("cors");
const chatRouter = require("./routes/chatRoutes");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// Middleware Configuration
app.use(cors()); // Enable Cross-Origin Resource Sharing for API requests
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/v1/chat", chatRouter); // Mount chat-related API routes under '/api/v1/chat'

// Error Handling Middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Define the port for the server to listen on
const port = process.env.PORT || 5000;

// Start the server
const start = async () => {
  try {
    // Establish a connection to the MongoDB database using the provided MONGO_URL
    await connectDB(process.env.MONGO_URL);

    // Start the Express server, listening on the specified port
    app.listen(port, () => console.log(`Server running on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start(); // Call the 'start' function to initiate server startup
