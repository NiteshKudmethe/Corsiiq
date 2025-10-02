import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nitesh Kudmethe",
    title: "Founder & Director",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/niteshkudmethe",
      twitter: "https://twitter.com/niteshkudmethe",
      github: "https://github.com/niteshkudmethe",
    },
  },
  {
    name: "Nitin Yadav",
    title: "Founder & Director",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/nitinyadav",
      twitter: "https://twitter.com/nitinyadav",
      github: "https://github.com/nitinyadav",
    },
  },
  {
    name: "Priyesh Nagdeote",
    title: "Founder & Director",
    image: "https://randomuser.me/api/portraits/men/85.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/priyeshnagdeote",
      twitter: "https://twitter.com/priyeshnagdeote",
      github: "https://github.com/priyeshnagdeote",
    },
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className=" bg-white text-black px-6 py-8 rounded-2xl"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 text-lg mb-12">
          Meet the minds behind{" "}
          <span className="text-blue-500 font-semibold">Corsiiq</span> — passionate, creative, and committed to innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-xl shadow-lg group cursor-pointer transform transition duration-300 hover:scale-105"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 mx-auto rounded-full object-cover border-2 border-blue-500"
              />

              {/* Name & Title */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-gray-500">{member.title}</p>

              {/* Hover Overlay with Social Icons */}
              <div className="absolute inset-0 bg-blue-500 bg-opacity-90 rounded-xl flex flex-col items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold">{member.name}</h3>
                <p className="text-md">{member.title}</p>
                <div className="flex space-x-6 mt-2">
                  <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <FaLinkedin className="text-white text-2xl hover:text-gray-200" />
                  </a>
                  <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter className="text-white text-2xl hover:text-gray-200" />
                  </a>
                  <a href={member.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <FaGithub className="text-white text-2xl hover:text-gray-200" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
