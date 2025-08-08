import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white dark:bg-white dark:text-[#0f172a] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <img src="/mainl.png" alt="Corsiiq Logo" className="h-10" />
            <span className="text-2xl font-bold text-[#38bdf8] dark:text-[#0f172a]">
              CORSIIQ
            </span>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-600">
            Corsiiq Technologies Pvt Ltd delivers custom digital solutions through design, code, and intelligence. We’re passionate about building future-ready apps and systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#38bdf8] dark:text-[#0f172a]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Team", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-[#38bdf8] dark:hover:text-blue-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#38bdf8] dark:text-[#0f172a]">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a href="#home" className="hover:text-[#38bdf8] transition">
              <FaLinkedin size={20} />
            </a>
            <a href="#home" className="hover:text-[#38bdf8] transition">
              <FaGithub size={20} />
            </a>
            <a href="#home" className="hover:text-[#38bdf8] transition">
              <FaTwitter size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-300 dark:text-gray-600">
            Email: <a href="mailto:info@corsiiq.com" className="underline">info@corsiiq.com</a>
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-700 dark:border-gray-300 pt-4">
        © {new Date().getFullYear()} Corsiiq Technologies Pvt Ltd. All rights reserved.
      </div>
    </footer>
  );
}
