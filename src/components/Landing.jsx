import React from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaPaintBrush, FaCogs, FaLightbulb } from "react-icons/fa";
import Team from "./Team";

export default function Landing() {
  const services = [
    {
      icon: <FaBrain />,
      title: "AI-Powered Solutions",
      desc: "Automate workflows and enhance decision-making with intelligent AI tools.",
      img: "/wap.avif",
    },
    {
      icon: <FaPaintBrush />,
      title: "Brand & Product Design",
      desc: "Elegant, minimalistic designs that elevate your brand presence.",
     img: "/wap.avif",    },
    {
      icon: <FaCogs />,
      title: "Custom Software Development",
      desc: "High-performance, scalable applications crafted for your business.",
     img: "/wap.avif",    },
    {
      icon: <FaLightbulb />,
      title: "Innovation Consulting",
      desc: "Strategic guidance to adopt emerging technologies and stay ahead.",
     img: "/wap.avif",    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex flex-col md:flex-row bg-white text-black overflow-hidden">
     
        {/* Left Content */}
        <div className="z-20 w-full md:w-1/2 flex flex-col justify-center px-12 md:px-24 h-full space-y-6 animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
            Building Digital Experiences<br/>
            that <span className="text-blue-500">Inspire</span> & <span className="text-gray-700">Perform</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            At <span className="font-semibold text-black">Corsiiq</span>, we craft minimal, clean digital solutions that resonate with users and deliver results.
          </p>
          <div className="flex gap-6 mt-4">
            <Link to="/services">
              <button className="px-6 py-3 rounded-full bg-black text-white font-medium shadow-md hover:scale-105 transition-transform duration-300">
                What We Offer
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-6 py-3 rounded-full border border-black text-black font-medium hover:bg-black hover:text-white transition-colors duration-300">
                Schedule Consultation
              </button>
            </Link>
          </div>
        </div>

 

{/* Right Visual */}
<div className="relative w-full md:w-1/2 flex justify-center items-center px-6 md:px-0">
  <div className="w-full max-w-lg h-96 md:h-[480px] overflow-hidden rounded-3xl shadow-xl">
    <video
      className="w-full h-full object-cover"
      autoPlay
      muted
      loop
      playsInline
    >
      <source src="/vdeo.mp4" type="video/mp4" />
    </video>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/60 to-transparent"></div>
  </div>
</div>



        {/* Floating Highlights */}
        <div className="absolute top-32 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-[80px] animate-float pointer-events-none"></div>
        <div className="absolute bottom-40 right-24 w-48 h-48 bg-gray-200/10 rounded-full blur-[120px] animate-float pointer-events-none"></div>
      </section>

    {/* ABOUT SECTION */}
<section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-24 bg-black space-y-12">
  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
    Who We Are
  </h2>
  <p className="max-w-2xl text-center text-gray-300 text-lg">
    Corsiiq is a clean digital agency focused on crafting elegant, intuitive, and high-performing digital experiences.
  </p>

  {/* Image Grid */}
  <div className="flex flex-wrap gap-6 justify-center mt-12">
    <img
      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
      alt="Team Collaboration"
      className="w-72 rounded-xl shadow-lg object-cover"
    />
    <img
      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80"
      alt="Workspace"
      className="w-72 rounded-xl shadow-lg object-cover"
    />
  </div>

  {/* Learn More Button */}
  <Link to="/about">
    <button className="mt-8 px-6 py-3 bg-white text-black rounded-full font-medium shadow-md hover:scale-105 transition-transform duration-300">
      Learn More About Us
    </button>
  </Link>

  {/* Team Section */}
  <div className="w-full mt-20">
    <Team />
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-12 py-24 bg-white space-y-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black">What We Do</h2>
        
        <p className="text-center text-gray-600 max-w-3xl text-lg">
          Elegant solutions designed to solve today’s challenges while anticipating tomorrow’s.
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 w-full mt-12">
          {services.map((service, i) => (
            <div key={i} className="relative group bg-gray-50 rounded-2xl p-6 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 pointer-events-none"/>
              <div className="relative z-10 flex flex-col gap-3">
                <div className="text-black text-4xl">{service.icon}</div>
                <h3 className="text-xl font-semibold text-black">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link to="/services">
          <button className="mt-12 px-6 py-3 bg-black text-white rounded-full font-medium shadow-md hover:scale-105 transition-transform duration-300">
            View All Services
          </button>
        </Link>
      </section>

      
      
    {/* FAQ Section */}
<section className="bg-white dark:bg-[#1e293b] py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#38bdf8] mb-12">
      Frequently Asked Questions
    </h2>

    <div className="space-y-4 text-left">
      {[
        {
          question: "What services do you offer?",
          answer:
            "We offer web development, custom software, mobile apps, IT solutions, and consultancy services tailored to your business needs.",
        },
        {
          question: "How long does development take?",
          answer:
            "Project timelines vary based on complexity, but we strive to deliver projects efficiently without compromising quality.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve various industries including healthcare, finance, education, retail, and more, providing tailored software solutions.",
        },
        {
          question: "Do you offer support services?",
          answer:
            "Yes, we provide ongoing support and maintenance to ensure your systems run smoothly post-launch.",
        },
        {
          question: "What is your pricing model?",
          answer:
            "Our pricing is project-based and depends on specific requirements, scope, and technologies used.",
        },
        {
          question: "Can I request a consultation?",
          answer:
            "Absolutely! We offer free consultations to discuss your project needs and how we can assist you.",
        },
      ].map(({ question, answer }, idx) => (
        <details
          key={idx}
          className="bg-gray-50 dark:bg-[#2e3a4b] rounded-xl p-5 cursor-pointer transition hover:shadow-lg"
        >
          <summary className="font-semibold text-lg text-black dark:text-white">
            {question}
          </summary>
          <p className="mt-2 text-gray-700 dark:text-gray-300">{answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>



   
      
      
    </>
  );
}
