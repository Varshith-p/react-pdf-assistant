import { useSelector } from "react-redux";
import { pdfjs, Document, Page } from "react-pdf";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import Header from "./Header";

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

  if (!pdf) {
    console.log("Hello");
    return <Navigate to={"/"} />;
  }

  return (
    <main>
      <Header />
      <section className="pt-20 flex w-full pb-10">
        <div className="w-1/2 h-full overflow-auto">
          {pdf && (
            <Document file={pdf} onLoadSuccess={handleDocumentLoadSuccess}>
              <Page
                size="A4"
                pageNumber={currentPage}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                style={{ flexDirection: "row", backgroundColor: "#E4E4E4" }}
                className="overflow-y-auto"
              />
            </Document>
          )}
          <div className="w-full justify-center flex gap-5">
            <button
              className="bg-[#ffc41b] font-medium p-2 flex items-center gap-1 disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={currentPage == 1}
              onClick={() => handlePageChange(-1)}
            >
              <AiOutlineArrowLeft /> <span>Prev</span>
            </button>
            <button
              className="bg-[#ffc41b] font-medium p-2 flex items-center gap-1 disabled:cursor-not-allowed disabled:bg-blue-300"
              disabled={currentPage == numPages}
              onClick={() => handlePageChange(1)}
            >
              <span>Next</span> <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PDFViewer;
