/**
 * Chat Schema
 *
 * This module defines the Mongoose schema for chat messages and conversations. It describes
 * the structure of chat messages, including the title, file URL, and an array of messages.
 *
 */

// Import the 'mongoose' library for schema creation
const mongoose = require("mongoose");

// Define the Chat Schema
const ChatSchema = new mongoose.Schema({
  title: { type: String },
  fileUrl: { type: String },
  messages: [
    {
      role: String,
      content: String,
    },
  ],
  context: String,
});

// Export the Mongoose model for 'Chat' using the defined schema
module.exports = mongoose.model("Chat", ChatSchema);
