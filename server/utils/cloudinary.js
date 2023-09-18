/**
 * Cloudinary Configuration
 *
 * This module configures the Cloudinary SDK, allowing your Node.js application to interact with
 * the Cloudinary cloud-based media management service. The configuration includes specifying
 * the cloud name, API key, and API secret provided by Cloudinary.
 *
 */

// Import the 'cloudinary' library to configure
const cloudinary = require("cloudinary");

// Configure Cloudinary with the provided credentials
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Export the configured Cloudinary instance
module.exports = cloudinary;
