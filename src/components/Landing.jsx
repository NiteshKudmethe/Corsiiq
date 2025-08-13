import React from "react";
import { Link } from "react-router-dom";
import {
  FaBrain,
  FaPaintBrush,
  FaCogs,
  FaLightbulb,
} from "react-icons/fa";
import Team from "./Team";
import Contact from "./Contact";

export default function Landing() {
  const services = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Solutions",
      desc: "We integrate artificial intelligence into your workflows to automate tasks, predict trends, and enhance decision-making.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Brand & Product Design",
      desc: "From logos to full product interfaces, we create visual experiences that inspire trust and drive engagement.",
    },
    {
      icon: <FaCogs />,
      title: "Custom Software Development",
      desc: "Tailor-made applications designed for performance, scalability, and your specific business needs.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Consulting",
      desc: "We help you identify opportunities, adopt emerging technologies, and stay ahead of the competition.",
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 overflow-hidden bg-[#000000] text-white dark:bg-white dark:text-black font-inter"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#38bdf8] via-[#0ea5e9] to-[#6366f1] opacity-10 animate-gradientMove"></div>

        {/* Left Text */}
        <div className="relative z-10 w-full md:w-3/4 md:pr-10 mb-12 md:mb-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fadeInUp">
            Building{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text">
              Digital Experiences
            </span>
            <br />
            that{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text">
              Inspire
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text">
              Perform
            </span>
          </h1>

          <p className="text-lg leading-relaxed text-gray-300 dark:text-gray-700 mb-6 max-w-2xl">
            At <span className="text-[#38bdf8] font-semibold">Corsiiq</span>, we
            merge creativity with cutting-edge technology to deliver solutions
            that connect, engage, and convert. We don’t just follow trends — we
            set them.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services">
              <button className="px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-lg font-medium rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
                What We Offer
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-3 border-2 border-[#38bdf8] text-[#38bdf8] text-lg font-medium rounded-lg hover:bg-[#38bdf8] hover:text-white transition-all duration-300 shadow-lg">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>

        {/* Right Video */}
        <div className="relative z-10 w-full md:w-1/4 flex justify-center md:justify-end animate-fadeIn">
          <div className="w-[300px] max-w-[340px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 dark:ring-black/10">
            <video
              className="w-full h-full object-cover rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/testvideo.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section
        id="about"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0f172a] text-white dark:bg-white dark:text-black"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] to-[#1e293b] dark:from-white dark:to-gray-100 opacity-70"></div>
        <div className="relative max-w-4xl w-full text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Who We Are</h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 mb-4">
            <span className="bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-transparent bg-clip-text font-semibold">
              Corsiiq
            </span>{" "}
            is more than a digital agency — we’re your innovation partner.
          </p>
          <p className="text-lg text-gray-300 dark:text-gray-700">
            With a multidisciplinary team of developers, designers, and
            strategists, we deliver high-impact solutions that help brands
            thrive in a competitive digital world. Our focus is on creating
            meaningful connections between your brand and your audience.
          </p>
          <Link to="/about">
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Learn More About Us
            </button>
          </Link>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section
        id="services"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-[#0f172a] text-white dark:bg-white dark:text-black"
      >
        <div className="relative max-w-7xl w-full text-center animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">What We Do</h2>
          <p className="text-lg text-gray-300 dark:text-gray-700 mb-16 max-w-3xl mx-auto">
            We provide end-to-end digital solutions that not only meet today’s
            demands but anticipate tomorrow’s challenges.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white/10 dark:bg-black/5 backdrop-blur-lg rounded-2xl p-6 text-left transform transition duration-500 hover:-translate-y-3 hover:shadow-xl border border-white/10 dark:border-black/10"
              >
                <div className="text-[#38bdf8] text-4xl mb-4 transition-transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-300 dark:text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <Link to="/services">
            <button className="mt-12 px-6 py-3 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-lg rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              View All Services
            </button>
          </Link>
        </div>
      </section>

      {/* TEAM SECTION */}
      <Team />

      {/* CONTACT SECTION */}
      <Contact />
    </>
  );
}
