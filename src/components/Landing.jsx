import React from "react";
import { Link } from "react-router-dom"; // Add this import
import { FaBrain, FaPaintBrush, FaCogs, FaLightbulb } from "react-icons/fa";
import Team from "./Team";
import Contact from "./Contact";

export default function Landing() {
  return (
    <>
      {/* Landing Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-[#0f172a] text-white dark:bg-white dark:text-black transition-all"
      >
        {/* Left Content */}
        <div className="w-full md:w-3/4 md:pr-10 mb-12 md:mb-0">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
            Driven by <span className="text-[#38bdf8]">Creativity</span>
          </h1>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
            Defined by <span className="text-[#38bdf8]">Innovation</span>
          </h1>
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Delivered with <span className="text-[#38bdf8]">Quality</span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-700 mb-4">
            At <span className="text-[#38bdf8] font-semibold">Corsiiq</span>, we don’t just build software—we craft intelligent digital solutions that redefine how businesses operate.
          </p>

          <p className="text-md leading-relaxed text-gray-400 dark:text-gray-600 mb-8">
            From AI-powered platforms to cloud-native systems, our tailored services empower brands to thrive. We focus on functionality, scale, and future-readiness while delivering experiences users love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-[#38bdf8] text-white text-lg font-medium rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 shadow-md">
              Explore Our Work
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-[#38bdf8] text-[#38bdf8] text-lg font-medium rounded-lg hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-md">
              Schedule Consultation
            </button>
          </div>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-end">
          <div className="w-[300px] md:w-[100%] max-w-[340px] rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 dark:ring-black/10">
            <video
              className="w-full h-full object-cover rounded-xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/testvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#0f172a] text-white dark:bg-white dark:text-black transition"
      >
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">WHO WE ARE</h1>

          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700 leading-relaxed">
            <span className="text-[#38bdf8] font-semibold text-xl">C</span>
            <span className="font-medium">orsiiq</span> — Beyond Code, Into Creative Intelligence.
          </p>

          <p className="text-lg md:text-xl mt-4 text-gray-300 dark:text-gray-700 leading-relaxed">
            We’re a passionate team of technologists, designers, and innovators dedicated to solving real-world problems through intelligent design and reliable software engineering.
          </p>

          <p className="text-lg md:text-xl mt-4 text-gray-300 dark:text-gray-700 leading-relaxed">
            From strategy to execution, we blend creativity with precision to craft digital experiences that make technology intuitive, scalable, and human-centric.
          </p>

          {/* Know More Button */}
          <Link to="/about">
            <button className="mt-8 px-6 py-3 bg-[#38bdf8] text-white text-lg font-medium rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 shadow-md">
              Know More
            </button>
          </Link>
        </div>
      </section>
      
            {/* Services Section */}
              <section
      id="services"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-[#0f172a] text-white dark:bg-white dark:text-black transition"
    >
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">
          WHAT WE DO
        </h1>

        <h2 className="text-2xl font-semibold text-[#38bdf8] mb-6">
          Our Core Offerings:
        </h2>

        <ul className="space-y-6 text-lg">
          <li className="flex items-start">
            <FaBrain className="text-[#38bdf8] mt-1 mr-3" />
            <span>
              <strong>Intelligent Software Solutions:</strong><br />
              AI-enhanced tools, automation platforms, and smart web/mobile apps tailored to your business.
            </span>
          </li>

          <li className="flex items-start">
            <FaPaintBrush className="text-[#38bdf8] mt-1 mr-3" />
            <span>
              <strong>Creative Product Engineering:</strong><br />
              From UX/UI to full-stack architecture, we build products that are functional, fast, and future-proof.
            </span>
          </li>

          <li className="flex items-start">
            <FaCogs className="text-[#38bdf8] mt-1 mr-3" />
            <span>
              <strong>Scalable Systems Architecture:</strong><br />
              Modular, maintainable, and enterprise-grade solutions that grow with your users.
            </span>
          </li>

          <li className="flex items-start">
            <FaLightbulb className="text-[#38bdf8] mt-1 mr-3" />
            <span>
              <strong>Innovation Consulting:</strong><br />
              We help companies modernize with emerging technologies like AI, blockchain, IoT, and more.
            </span>
          </li>
        </ul>
        
          {/* Know More Button */}
          <Link to="/services">
            <button className="mt-8 px-6 py-3 bg-[#38bdf8] text-white text-lg font-medium rounded-lg hover:bg-[#0ea5e9] transition-all duration-300 shadow-md">
              Know More
            </button>
          </Link>
      </div>
    </section>
    <Team/>
    <Contact/>
    </>
  );
}
