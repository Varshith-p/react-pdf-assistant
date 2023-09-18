const Chat = require("../models/Chat");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");

const createChat = async (req, res) => {
  try {
    const { title } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw", // Specify the resource type as 'raw' for non-image files
      folder: "hurrae-pdfs",
    });

    // Create a chat document with Cloudinary file URL
    const chat = await Chat.create({
      title,
      fileUrl: result.secure_url,
    });
    res.status(StatusCodes.OK).json(chat);
  } catch (error) {
    console.error("Error creating chat:", error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error uploading chat" });
  }
};

const updateChat = async (req, res) => {
  //   const { id: postId } = req.params;
  //   const { title, category, description } = req.body;
  //   if (!title || !category || !description) {
  //     throw new BadRequestError("Provide all the values");
  //   }
  //   const post = await Post.findOne({ _id: postId });
  //   if (!post) {
  //     throw new NotFoundError(`No post with id: ${postId}`);
  //   }
  //   const updatedPost = await Post.findOneAndUpdate({ _id: postId }, req.body, {
  //     new: true,
  //     runValidators: true,
  //   });
  //   res.status(StatusCodes.OK).json({ updatedPost });
  console.log("Update chat");
};

module.exports = { createChat, updateChat };
