import { useSelector } from "react-redux";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const PDFViewer = () => {
  const { pdf } = useSelector((store) => store.pdf);
  const [currentPage, setCurrentPage] = useState(1);
  const [numPages, setNumPages] = useState(1);

  const handleDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const handlePageChange = (num) => {
    setCurrentPage(currentPage + num);
  };

  return (
    <div className="w-1/2 bg-red-50">
      {pdf.name}
      <div className="w-full justify-center flex gap-5">
        <button
          className="bg-blue-500 text-white p-4 flex items-center gap-1 disabled:cursor-not-allowed disabled:bg-blue-300"
          disabled={currentPage == 1}
          onClick={() => handlePageChange(-1)}
        >
          <AiOutlineArrowLeft /> <span>Prev</span>
        </button>
        <button
          className="bg-blue-500 text-white p-4 flex items-center gap-1 disabled:cursor-not-allowed disabled:bg-blue-300"
          disabled={currentPage == numPages}
          onClick={() => handlePageChange(1)}
        >
          <span>Next</span> <AiOutlineArrowRight />
        </button>
      </div>
      <Document file={pdf} onLoadSuccess={handleDocumentLoadSuccess}>
        <Page
          size="A4"
          pageNumber={currentPage}
          renderTextLayer={false}
          renderAnnotationLayer={false}
          style={{ flexDirection: "row", backgroundColor: "#E4E4E4" }}
        />
      </Document>
    </div>
  );
};

export default PDFViewer;
