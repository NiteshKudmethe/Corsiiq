import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen px-6 py-20 bg-[#0f172a] text-white dark:bg-white dark:text-black transition"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* About Us */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">WHO WE ARE</h2>
          <p className="text-lg md:text-xl text-gray-300 dark:text-gray-700">
            <span className="text-[#38bdf8] font-semibold text-xl">C</span>
            <span className="font-medium">orsiiq</span> — Beyond Code, Into Creative Intelligence.
          </p>
          <p className="text-lg mt-4 text-gray-300 dark:text-gray-700">
            We’re a passionate team of technologists, designers, and innovators dedicated to solving real-world problems through intelligent design and reliable software engineering.
          </p>
          <p className="text-lg mt-4 text-gray-300 dark:text-gray-700">
            From strategy to execution, we blend creativity with precision to craft digital experiences that make technology intuitive, scalable, and human-centric.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#38bdf8] mb-4">Mission & Vision</h3>
          <p className="text-lg text-gray-300 dark:text-gray-700">
            <strong>Our Mission:</strong> To architect intelligent and human-focused digital solutions that empower businesses and elevate user experiences.
          </p>
          <p className="text-lg mt-2 text-gray-300 dark:text-gray-700">
            <strong>Our Vision:</strong> To become a global catalyst for innovation, where technology meets imagination to shape a smarter future.
          </p>
        </div>

        {/* The Team */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#38bdf8] mb-4">The Team</h3>
          <p className="text-lg text-gray-300 dark:text-gray-700">
            We're a tight-knit collective of full-stack developers, UI/UX designers, cloud architects, product thinkers, and strategists who believe in collaboration, transparency, and continuous learning.
          </p>
          <p className="text-lg mt-2 text-gray-300 dark:text-gray-700">
            Each member brings a unique spark — together, we turn ideas into impactful digital experiences.
          </p>
        </div>

        {/* Our Story / Journey */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#38bdf8] mb-4">Our Story</h3>
          <p className="text-lg text-gray-300 dark:text-gray-700">
            Corsiiq was born out of the need for digital experiences that don't just function — they inspire. Starting as a small freelance collaboration, we’ve evolved into a forward-thinking digital partner serving clients across industries and continents.
          </p>
          <p className="text-lg mt-2 text-gray-300 dark:text-gray-700">
            Our journey has been fueled by a deep desire to solve problems creatively, automate intelligently, and build with purpose.
          </p>
        </div>

        {/* Achievements & Milestones */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#38bdf8] mb-4">Achievements & Milestones</h3>
          <ul className="text-lg text-gray-300 dark:text-gray-700 list-disc list-inside space-y-2">
            <li>Successfully delivered 50+ full-stack projects</li>
            <li>Recognized by early-stage startups for driving MVP-to-market journeys</li>
            <li>Integrated AI tools and automation in real-world business processes</li>
            <li>Maintained 100% on-time delivery with strong client retention</li>
          </ul>
        </div>

        {/* Culture & Work Philosophy */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-[#38bdf8] mb-4">Culture & Work Philosophy</h3>
          <p className="text-lg text-gray-300 dark:text-gray-700">
            We believe in building with empathy, communicating with honesty, and delivering with excellence. Our work environment thrives on curiosity, respect, and a constant push to innovate.
          </p>
          <p className="text-lg mt-2 text-gray-300 dark:text-gray-700">
            Remote-first but globally connected, we value flexibility, experimentation, and a shared commitment to craft.
          </p>
        </div>
      </div>
    </section>
  );
}
