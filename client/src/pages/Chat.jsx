import { useEffect } from "react";
import ChatList from "../components/ChatList";
import MessageContainer from "../components/MessageContainer";
import Loading from "../components/Loading";
import PDFViewer from "../components/PDFViewer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChat } from "../redux/chatSlice";

const Chat = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { chat, isLoading } = useSelector((store) => store.chat);
  useEffect(() => {
    dispatch(getChat({ id }));
  }, [id]);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="grid grid-cols-6 h-screen overflow-hidden">
      <ChatList />
      <PDFViewer title={chat.title} url={chat.fileUrl} />
      <MessageContainer messages={chat.messages} />
    </main>
  );
};

export default Chat;
