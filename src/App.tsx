import About from "./pages/about";
import Home from "./pages/home";
import Activity from "./pages/activity";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import { EmptyInputGroup } from "./pages/404Found";
import { ScrollToTop } from "./components/ScrollToTop";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<EmptyInputGroup />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
