import PDFViewer from "./components/PDFViewer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<PDFViewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
