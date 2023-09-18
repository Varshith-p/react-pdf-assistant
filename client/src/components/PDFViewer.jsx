import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFViewer = () => {
  return (
    <section className="col-span-3 h-screen border flex flex-col">
      <h1 className="font-medium text-lg py-2 px-2 border-b">Name of PDF</h1>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div className="flex-1 overflow-y-auto">
          <Viewer
            fileUrl={
              "https://res.cloudinary.com/dvdbxvg7z/image/upload/v1695054743/dswhdtrytf7ugxiaenuy.pdf"
            }
          />
        </div>
      </Worker>
    </section>
  );
};

export default PDFViewer;
