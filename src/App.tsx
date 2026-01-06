import About from "./pages/about";
import Home from "./pages/home";
import Activity from "./pages/activity";
import { Route, Routes } from "react-router-dom";
import "./index.css";
import GalleryPage from "./pages/gallery";
import ContactPage from "./pages/contact";
import { EmptyInputGroup } from "./pages/404Found";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:aboutId?" element={<About />} />
        <Route path="/activity/:activityId?" element={<Activity />} />
        <Route path="/gallery/:galleryId?" element={<GalleryPage />} />
        <Route path="/contact/:contactId?" element={<ContactPage />} />
        <Route path="*" element={<EmptyInputGroup />} />
      </Routes>
    </>
  );
}

export default App;
