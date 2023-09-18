import Message from "./Message";
import { AiOutlineSend } from "react-icons/ai";

const MessageContainer = () => {
  return (
    <section className="col-span-2 h-screen flex flex-col">
      <h1 className="font-medium text-lg py-2 px-2 border-b">Chat</h1>
      <div className="space-y-2 p-3 flex-1 overflow-y-auto">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <form className="flex items-center mb-0.5 border border-gray-400 rounded-md mx-5 pl-1">
        <input
          type="text"
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
