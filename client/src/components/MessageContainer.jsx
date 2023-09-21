/* eslint-disable react/prop-types */
import { useState } from "react";
import Message from "./Message";
import { AiOutlineSend } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { sendMessage } from "../redux/chatSlice";

const MessageContainer = ({ messages }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendMessage({ id, message }));
    setMessage("");
  };

  return (
    <section className="col-span-2 h-screen flex flex-col">
      <h1 className="font-medium text-lg py-2 px-2 border-b">Chat</h1>
      <div className="space-y-2 p-3 flex-1 overflow-y-auto">
        {messages?.length > 0 ? (
          messages?.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />
          ))
        ) : (
          <Message
            role={"assistant"}
            content={"Ask a question to get started"}
          />
        )}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex items-center mb-0.5 border border-gray-400 rounded-md pl-1"
      >
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="flex-1 py-1 focus:outline-none"
          placeholder="Ask a question..."
        />
        <button className="bg-blue-500 rounded-md text-white h-full px-2">
          <AiOutlineSend size={20} />
        </button>
      </form>
    </section>
  );
};

export default MessageContainer;
