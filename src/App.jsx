import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Single-page site: old page URLs redirect to their section on the home page.
function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<Navigate to="/#projects" replace />} />
        <Route path="/work" element={<Navigate to="/#projects" replace />} />
        <Route path="/experience" element={<Navigate to="/#experience" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
