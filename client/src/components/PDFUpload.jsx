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
import { useState } from "react";
import Dropzone from "react-dropzone";

const PDFUpload = () => {
  const [pdf, setPdf] = useState(null);

  /**
   * Handle file drop or selection event.
   *
   * @param {File[]} acceptedFiles - An array of accepted File objects (in this case, PDF files).
   */
  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setPdf(file);
  };

  return (
    <section className="m-8">
      <Dropzone onDrop={onDrop} accept={{ "application/pdf": [] }}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className="dropzone border-2 p-4 max-w-xl mx-auto flex w-full justify-center text-xl text-gray-500 cursor-pointer"
          >
            <input {...getInputProps()} />
            <p>Drag and drop a PDF file here, or click to select files.</p>
          </div>
        )}
      </Dropzone>
      {pdf && <div>{pdf.name}</div>}
    </section>
  );
};

export default PDFUpload;
