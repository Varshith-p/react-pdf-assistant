/**
 * Chat API Routes
 *
 * This module defines the API routes related to chat functionality. It handles incoming HTTP
 * requests for creating and updating chat messages, including file uploads.
 *
 */

// Import the 'express' library to create the router
const express = require("express");

// Import specific controller functions and middleware
const {
  createChat,
  getChat,
  updateChat,
} = require("../controllers/chatController");
const upload = require("../middleware/upload");

// Create an Express.js router instance
const router = express.Router();

/**
 * Route: POST /api/v1/chat
 * Description: Create a new chat, including file uploads.
 *
 * This route handles HTTP POST requests for creating chat messages. It utilizes the 'createChat'
 * controller function to process the request. The 'upload' middleware is used to handle file
 * uploads, and it expects the uploaded file to be associated with the 'file' field in the request.
 */
router.route("/").post(upload.single("file"), createChat);

/**
 * Route: GET /api/v1/chat/:id
 * Description: Get an existing chat
 *
 * This route handles HTTP GET requests for reading chat. It utilizes the 'getChat'
 * controller function to process the request. The ':id' parameter in the URL is used to specify
 * the chat to be retrieved.
 */
router.route("/:id").get(getChat);

/**
 * Route: PATCH /api/v1/chat/:id
 * Description: Update an existing chat
 *
 * This route handles HTTP PATCH requests for updating chat messages. It utilizes the 'updateChat'
 * controller function to process the request. The ':id' parameter in the URL is used to specify
 * the chat message to be updated.
 */
router.route("/:id").patch(updateChat);

// Export the configured router for use in the application
module.exports = router;
