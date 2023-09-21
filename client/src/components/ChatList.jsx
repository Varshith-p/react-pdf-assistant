import { useSelector } from "react-redux";
import PDFUpload from "./PDFUpload";
import { useNavigate } from "react-router-dom";

const ChatList = () => {
  const { chats } = useSelector((store) => store.chat);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/chat/${id}`, { replace: true });
  };

  return (
    <section className="h-screen overflow-y-auto bg-black">
      <div className="p-2 text-sm">
        <PDFUpload />
      </div>
      <div className="space-y-2 p-2">
        {chats?.map((chat) => (
          <div
            key={chat._id}
            onClick={() => handleClick(chat._id)}
            className="bg-blue-500 text-white p-3 rounded-lg cursor-pointer text-sm"
          >
            {chat.title}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatList;
