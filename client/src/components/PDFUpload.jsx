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
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setPDF } from "../redux/pdfSlice";

const PDFUpload = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   * Handle file drop or selection event.
   *
   * @param {File[]} acceptedFiles - An array of accepted File objects (in this case, PDF files).
   */
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    dispatch(setPDF({ file }));
    navigate("/chat");
  };

  return (
    <section className="px-4 md:px-0 flex-1 flex items-center">
      <Dropzone onDrop={onDrop} accept={{ "application/pdf": [] }}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="dropzone bg-green-100 border border-green-200 rounded-lg px-4 py-4 md:py-8 max-w-xs md:max-w-xl mx-auto flex w-full justify-center md:text-xl text-gray-500 cursor-pointer"
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
