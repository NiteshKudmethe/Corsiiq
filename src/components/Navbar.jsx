import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["home", "about", "services", "team", "blog", "careers"];

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-black dark:bg-white/90 
                   flex items-center py-3 px-4 md:py-5 md:px-8">  <div className="container mx-auto flex items-center justify-between px-6">

        {/* Logo (Left) */}
        <div className="flex items-center">
          <img
            src="/logggo.jpeg"
            alt="Corsiiq Logo"
            className="object-contain h-8 w-auto"
          />
          <span class="px-3 font-bold"> Corsiiq </span>
        </div>

        {/* Desktop Nav (Center) */}
        <nav className="hidden md:flex flex-1 justify-center px-5">
          <div className="flex gap-6 text-sm bg-white/10 dark:bg-black/10 px-4 py-2 rounded-full backdrop-blur-md">
            {navItems.map((id) => (
              <Link
                key={id}
                to={`/#${id}`}
                className={`px-2 py-1 rounded-md transition-transform duration-200
                  ${
                    activeSection === id
                      ? "text-[#38bdf8] font-bold"
                      : "text-white dark:text-black"
                  } hover:scale-110`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
        </nav>

        {/* Contact Us (Right) */}
        <div className="hidden md:flex">
          <div className="flex gap-6 text-sm bg-white/10 dark:bg-black/10 px-4 py-2 rounded-full backdrop-blur-md">
            <Link
              to="/#contact"
              className={`px-6 py-1 rounded-full transition-transform duration-200
                ${
                  activeSection === "contact"
                    ? "text-[#38bdf8] font-bold"
                    : "text-white dark:text-[#45484a]"
                } hover:scale-110`}
            >
              Contact Us
            </Link>
          </div>
        </div>
        
        {/* Theme Toggle */}
        {/* <button
          onClick={toggleDarkMode}
          className="ml-4 text-white dark:text-black hover:text-[#38bdf8] transition"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m8.66-8.66l-.707.707M4.34 4.34l-.707.707M21 12h-1M4 12H3m16.66 4.66l-.707-.707M4.34 19.66l-.707-.707M12 5a7 7 0 100 14a7 7 0 000-14z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button> */}

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none ml-2 text-white dark:text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden px-4 py-3">
          <div className="flex flex-col gap-2 bg-[#1e293b] dark:bg-gray-200 rounded-xl p-3">
            {[...navItems, "contact"].map((id) => (
              <Link
                key={id}
                to={`/#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded-md transition ${
                  activeSection === id
                    ? "bg-[#38bdf8] text-white font-semibold"
                    : "text-white dark:text-black hover:bg-[#38bdf8]/20"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
