const Chat = require("../models/Chat");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("../utils/cloudinary");
const axios = require("axios");

const createChat = async (req, res) => {
  try {
    const { title, context } = req.body;
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "raw", // Specify the resource type as 'raw' for non-image files
      folder: "hurrae-pdfs",
    });

    // Create a chat document with Cloudinary file URL
    const chat = await Chat.create({
      title,
      fileUrl: result.secure_url,
      context,
    });
    res.status(StatusCodes.OK).json(chat);
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: "Error creating chat" });
  }
};

const getChat = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ message: "Chat not found" });
  }
  const chat = await Chat.findById(id);
  res.status(StatusCodes.OK).json(chat);
};

const updateChat = async (req, res) => {
  const { id } = req.params;
  const { message } = req.body;

  const chat = await Chat.findById(id);
  chat.messages.push({
    role: "user",
    content: message,
  });
  let messages = [
    {
      role: "system",
      content: `You are an expert at helping users understand their documents. You have just received a new document, and must learn everything about it, then be able to answer questions about it in less than 100 words.\n\nDocument content:\n ${chat.context}`,
    },
    ...chat.messages.map((message) => ({
      role: message.role,
      content: message.content,
    })),
  ];
  const response = await generateResponse(messages);
  chat.messages.push({
    role: "assistant",
    content: response,
  });
  await chat.save();
  res.status(StatusCodes.OK).json(chat);
};

function generateResponse(messages) {
  return axios
    .post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "hello" }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    )
    .then((res) => res.data.choices[0].message.content)
    .catch((error) => "something went wrong, try again later");
}

module.exports = { createChat, getChat, updateChat };
