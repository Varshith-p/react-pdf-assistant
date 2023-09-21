/* eslint-disable react/prop-types */
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = ({ title, url }) => {
  return (
    <section className="col-span-3 h-screen border flex flex-col">
      <h1 className="font-medium text-lg py-2 px-2 border-b">{title}</h1>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.min.js">
        <div className="flex-1 overflow-y-auto">
          <Viewer fileUrl={url} />
        </div>
      </Worker>
    </section>
  );
};

export default PDFViewer;
