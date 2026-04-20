import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import EmergencyServices from "./pages/EmergencyServices";
import EnvironmentalServices from "./pages/EnvironmentalServices";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import { Contact } from "./pages/SupportPages";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/emergency-services" element={<EmergencyServices />} />
          <Route path="/environmental-services" element={<EnvironmentalServices />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
