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
   <section
  id="home"
  className="relative h-screen -mt-24 flex md:flex-row w-full text-white font-inter bg-black overflow-hidden"
>

        {/* Left Content */}
        <div className="relative z-20 w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 h-full">
          <div className="relative h-full flex flex-col justify-center">
            <h1 className="lg:text-5xl font-extrabold leading-tight mb-6 animate-fadeInUp">
              Building Digital Experiences
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

            <p className="text-lg leading-relaxed text-gray-300 mb-6 max-w-2xl">
              At <span className="text-[#38bdf8] font-semibold">Corsiiq</span>,
              we merge creativity with cutting-edge technology to deliver
              solutions that connect, engage, and convert. We don’t just follow
              trends — we set them.
            </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-start items-center">
  {/* Button 1 */}
  <Link to="/services">
    <div className="group inline-block [perspective:1000px]">
      <button
        className="
          relative px-6 py-3 rounded-full text-white text-lg font-medium
          bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9]
          shadow-lg transition-all duration-300
          hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(56,189,248,0.6)]
          overflow-hidden
        "
      >
        <span className="relative block transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          {/* Front */}
          <span className="block [backface-visibility:hidden]">What We Offer</span>
          {/* Back */}
          <span className="absolute inset-0 flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
            Check Now
          </span>
        </span>

        {/* Shine */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
      </button>
    </div>
  </Link>

  {/* Button 2 */}
  <Link to="/contact">
    <div className="group inline-block [perspective:1000px]">
      <button
        className="
          relative px-6 py-3 border-[1px] border-[#38bdf8] rounded-full text-[#38bdf8] text-lg font-medium
          transition-all duration-300 shadow-lg overflow-hidden
          hover:bg-[#38bdf8] hover:text-white
          hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(56,189,248,0.6)]
        "
      >
        <span className="relative block transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          {/* Front */}
          <span className="block [backface-visibility:hidden]">Schedule Consultation</span>
          {/* Back */}
          <span className="absolute inset-0 flex items-center justify-center [transform:rotateX(180deg)] [backface-visibility:hidden]">
            Book Now
          </span>
        </span>

        {/* Shine */}
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
      </button>
    </div>
  </Link>
</div>
          </div>
        </div>

        {/* Video Right Side */}
        <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/12359943_1920_1080_24fps.mp4" type="video/mp4" />
          </video>

          {/* Fade Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Strong left → right fade (0% to 50%) */}
            <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

            {/* Top fade */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/80 to-transparent"></div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
          </div>
        </div>

        {/* Bottom-left glow */}
        <div className="absolute bottom-0 left-0 w-2/5 h-2/5 bg-purple-700/30 rounded-full blur-[150px] animate-float pointer-events-none"></div>
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
<section className="relative min-h-screen flex flex-col items-center justify-center px-12 py-24 bg-gradient-to-b from-black via-gray-900 to-black space-y-12">
  <h2 className="text-4xl md:text-5xl font-bold text-center text-white">
    What We Do
  </h2>

  <p className="text-center text-gray-300 max-w-3xl text-lg">
    Elegant solutions designed to solve today’s challenges while anticipating tomorrow’s.
  </p>

  {/* Services Grid */}
  <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 w-full mt-12">
    {services.map((service, i) => (
      <div
        key={i}
        className="relative group bg-white/5 backdrop-blur-md rounded-2xl p-6 overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        {/* Background Image with subtle overlay */}
        <img
          src={service.img}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-20 pointer-events-none"
        />
        <div className="relative z-10 flex flex-col gap-3">
          <div className="text-[#38bdf8] text-4xl">{service.icon}</div>
          <h3 className="text-xl font-semibold text-white">{service.title}</h3>
          <p className="text-gray-300">{service.desc}</p>
        </div>
      </div>
    ))}
  </div>

  <Link to="/services">
    <button className="mt-12 px-6 py-3 bg-white text-black rounded-full font-medium shadow-md hover:scale-105 transition-transform duration-300">
      View All Services
    </button>
  </Link>
</section>

{/* FAQ Section */}
<section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12">
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
          className="bg-white/5 backdrop-blur-md rounded-xl p-5 cursor-pointer transition hover:shadow-lg"
        >
          <summary className="font-semibold text-lg text-white">
            {question}
          </summary>
          <p className="mt-2 text-gray-300">{answer}</p>
        </details>
      ))}
    </div>
  </div>
</section>



   
      
      
    </>
  );
}
