import React from "react";
import { motion } from "framer-motion";

const aboutSections = [
  {
    title: "Who We Are",
    content: [
      "Corsiiq — Beyond Code, Into Creative Intelligence.",
      "We’re a passionate team of technologists, designers, and innovators dedicated to solving real-world problems through intelligent design and reliable software engineering.",
      "From strategy to execution, we blend creativity with precision to craft digital experiences that make technology intuitive, scalable, and human-centric."
    ],
    img: "https://picsum.photos/600/400?random=1",
    reverse: false
  },
  {
    title: "Mission & Vision",
    content: [
      "Our Mission: To architect intelligent and human-focused digital solutions that empower businesses and elevate user experiences.",
      "Our Vision: To become a global catalyst for innovation, where technology meets imagination to shape a smarter future."
    ],
    img: "https://picsum.photos/600/400?random=2",
    reverse: true
  },
  {
    title: "The Team",
    content: [
      "We're a tight-knit collective of full-stack developers, UI/UX designers, cloud architects, product thinkers, and strategists who believe in collaboration, transparency, and continuous learning.",
      "Each member brings a unique spark — together, we turn ideas into impactful digital experiences."
    ],
    img: "https://picsum.photos/600/400?random=3",
    reverse: false
  },
  {
    title: "Our Story",
    content: [
      "Corsiiq was born out of the need for digital experiences that don't just function — they inspire. Starting as a small freelance collaboration, we’ve evolved into a forward-thinking digital partner serving clients across industries and continents.",
      "Our journey has been fueled by a deep desire to solve problems creatively, automate intelligently, and build with purpose."
    ],
    img: "https://picsum.photos/600/400?random=4",
    reverse: true
  },
  {
    title: "Achievements & Milestones",
    content: [
      "Successfully delivered 50+ full-stack projects",
      "Recognized by early-stage startups for driving MVP-to-market journeys",
      "Integrated AI tools and automation in real-world business processes",
      "Maintained 100% on-time delivery with strong client retention"
    ],
    img: "https://picsum.photos/600/400?random=5",
    reverse: false
  },
  {
    title: "Culture & Work Philosophy",
    content: [
      "We believe in building with empathy, communicating with honesty, and delivering with excellence. Our work environment thrives on curiosity, respect, and a constant push to innovate.",
      "Remote-first but globally connected, we value flexibility, experimentation, and a shared commitment to craft."
    ],
    img: "https://picsum.photos/600/400?random=6",
    reverse: true
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-8 py-40 bg-white text-gray-900 transition"
    >
      <div className="max-w-6xl mx-auto space-y-32">
        {aboutSections.map((section, i) => (
          <motion.div
            key={i}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
          >
            {/* Text */}
            <div className="md:w-1/2 space-y-5 text-center md:text-left px-4 md:px-0">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
                {section.title}
              </h2>
              {section.content.map((para, idx) => (
                <p key={idx} className="text-lg md:text-xl text-gray-700">
                  {para}
                </p>
              ))}
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={section.img}
                alt={section.title}
                className="w-full h-full object-cover rounded-2xl shadow-2xl border-2 border-gray-200"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
