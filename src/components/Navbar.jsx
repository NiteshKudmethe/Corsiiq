import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = (hash) => {
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location]);

  const navItems = ["home", "about", "services", "team", "contact", "Blog" , "Careers"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#121212]/90 py-2 shadow-md backdrop-blur-sm" : "bg-dark py-6"
      } dark:bg-white/90`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/mainl.png"
            alt="Corsiiq Logo"
            className={`transition-all duration-300 object-contain w-auto ${
              isScrolled ? "h-[50px]" : "h-[90px]"
            }`}
          />
          <div className="text-2xl font-bold text-[#38bdf8] dark:text-[#0f172a]">CORSIIQ</div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-lg">
          {navItems.map((id) => (
            <Link
              key={id}
              to={`/#${id}`}
              className={`transition ${
                activeSection === id
                  ? "text-[#38bdf8] font-semibold"
                  : "text-white dark:text-black hover:text-[#38bdf8]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 text-white dark:text-black hover:text-[#38bdf8] transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-8.66l-.707.707M4.34 4.34l-.707.707M21 12h-1M4 12H3m16.66 4.66l-.707-.707M4.34 19.66l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none ml-4 text-white dark:text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#1e293b] dark:bg-gray-200 px-6 py-4 space-y-2"
        >
          {navItems.map((id) => (
            <Link
              key={id}
              to={`/#${id}`}
              onClick={() => setMenuOpen(false)}
              className={`block ${
                activeSection === id
                  ? "text-[#38bdf8] font-semibold"
                  : "text-white dark:text-black hover:text-[#38bdf8]"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Link>
          ))}
        </motion.div>
      )}
    </header>
  );
}
