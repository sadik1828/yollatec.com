import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import SolutionsPage from "./pages/SolutionsPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServiceDetail from "./pages/ServiceDetail.jsx"; // ← new

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-gray-900">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} /> {/* new */}
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
