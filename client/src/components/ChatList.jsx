import Dropzone from "react-dropzone";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPDF } from "../redux/pdfSlice";
import { AiOutlinePlus } from "react-icons/ai";

const ChatList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    dispatch(setPDF({ file }));
    navigate("/chat");
  };

  return (
    <section className="h-screen overflow-y-auto bg-black">
      <div className="px-2 py-4">
        <Dropzone onDrop={onDrop} accept={{ "application/pdf": [] }}>
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="dropzone bg-gray-600 text-white text-sm rounded-lg px-4 py-4 cursor-pointer text-center border-dashed border"
            >
              <input {...getInputProps()} />
              <p className="flex gap-1 items-center w-full justify-center">
                <AiOutlinePlus />
                <span>New Chat</span>
              </p>
              <p className="text-gray-400">Drag and drop a PDF</p>
            </div>
          )}
        </Dropzone>
      </div>
    </section>
  );
};

export default ChatList;
