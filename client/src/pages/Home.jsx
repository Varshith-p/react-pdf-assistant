import Header from "../components/Header";
import PDFUpload from "../components/PDFUpload";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <PDFUpload />
    </main>
  );
};

export default Home;
