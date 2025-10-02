import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
    setFormData({ name: "", email: "" });
  };

  return (
    <footer className="bg-black dark:bg-white/90 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <img src="/newlogo.png" alt="Corsiiq Logo" className="h-12 mb-4" />
          <p className="text-sm leading-relaxed">
            Corsiiq Systems Pvt Ltd delivers custom digital solutions through design, code, and intelligence. 
            We’re passionate about building future-ready apps and systems.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#38bdf8]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Services", "Team", "Careers", "Contact"].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-[#38bdf8] transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#38bdf8]">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/terms" className="hover:text-[#38bdf8] transition">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-[#38bdf8] transition">Privacy Policy</a>
            </li>
          </ul>

          <h4 className="text-lg font-semibold mt-6 mb-4 text-[#38bdf8]">Contact</h4>
          <p className="text-sm">Email: <a href="mailto:info@corsiiq.com" className="underline">info@corsiiq.com</a></p>
          <p className="text-sm">Phone: <a href="tel:+918485883977" className="underline">+91 8485883977</a></p>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#38bdf8]">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter for insights & updates.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
            <button
              type="submit"
              className="w-full bg-[#38bdf8] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#0ea5e9] transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-gray-400">&copy; {new Date().getFullYear()} Corsiiq Systems Pvt Ltd. All rights reserved.</p>
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] transition"><FaLinkedin size={18} /></a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] transition"><FaGithub size={18} /></a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] transition"><FaTwitter size={18} /></a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#38bdf8] transition"><FaInstagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
