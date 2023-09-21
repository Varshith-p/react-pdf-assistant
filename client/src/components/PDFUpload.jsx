/**
 * PDFUpload Component
 *
 * The PDFUpload component allows users to upload a single PDF file either by dragging and dropping
 * the file onto the designated area or by clicking to select a file from their device.
 *
 * When a PDF file is successfully selected, the component displays the name of the uploaded file.
 *
 * @component
 */
import Dropzone from "react-dropzone";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createChat } from "../redux/chatSlice";
import { pdfjs } from "react-pdf";
import Loading from "./Loading";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFUpload = () => {
  const { isLoading } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Function to extract text from a PDF file
  const extractTextFromPDF = async (file) => {
    const loadingTask = pdfjs.getDocument(URL.createObjectURL(file));
    const pdfDocument = await loadingTask.promise;
    const textContent = [];

    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
      const page = await pdfDocument.getPage(pageNum);
      const pageTextContent = await page.getTextContent();
      pageTextContent.items.forEach((item) => {
        textContent.push(item.str);
      });
    }

    return textContent.join(" ");
  };

  /**
   * Handle file drop or selection event.
   *
   * @param {File[]} acceptedFiles - An array of accepted File objects (in this case, PDF files).
   */
  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const extractedText = await extractTextFromPDF(file);
    const formData = new FormData();
    formData.append("title", file.name);
    formData.append("context", extractedText);
    formData.append("file", file);
    const response = await dispatch(createChat(formData));
    if (response.meta.requestStatus === "fulfilled") {
      navigate(`/chat/${response.payload._id}`, { replace: true });
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="px-4 md:px-0 flex-1 flex items-center">
      <Dropzone
        onDrop={onDrop}
        accept={{ "application/pdf": [] }}
        disabled={isLoading}
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="dropzone border border-dashed text-center bg-gray-700 text-white rounded-lg px-4 py-4 max-w-xs md:max-w-xl mx-auto flex w-full justify-center cursor-pointer"
          >
            <input {...getInputProps()} />
            <p>Drag and drop a PDF file here, or click to select files.</p>
          </div>
        )}
      </Dropzone>
    </section>
  );
};

export default PDFUpload;
