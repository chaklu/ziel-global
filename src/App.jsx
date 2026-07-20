import { Routes, Route } from "react-router-dom";
import ZielGlobalHome from "./ZielGlobalHome";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import Blog from "./Blog";
import Work from "./Work";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ZielGlobalHome />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/Blog" element={<Blog />} />
      <Route path="/Work" element={<Work />} />
    </Routes>
  );
}

export default App; 
