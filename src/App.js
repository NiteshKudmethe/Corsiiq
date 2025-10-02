import "./index.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation(); // detect route changes

  useEffect(() => {
    // Initialize AOS
    AOS.init({ duration: 800, once: true });

    // Load theme from localStorage
    const storedMode = localStorage.getItem("theme");
    if (storedMode === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <main className="min-h-screen font-poppins overflow-x-hidden bg-gradient-to-b from-[#121212] to-[#1d1d1d] text-white dark:from-white dark:to-gray-200 dark:text-black transition-all">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Routes */}
      <div >{/* offset for fixed navbar */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
      
      
      <ScrollToTopButton />
    </main>
  );
}

export default App;
