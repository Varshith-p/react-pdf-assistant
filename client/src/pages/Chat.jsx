import ChatList from "../components/ChatList";
import MessageContainer from "../components/MessageContainer";
import PDFViewer from "../components/PDFViewer";

const Chat = () => {
  return (
    <main className="grid grid-cols-6 h-screen overflow-hidden">
      <ChatList />
      <PDFViewer />
      <MessageContainer />
    </main>
  );
};

export default Chat;
