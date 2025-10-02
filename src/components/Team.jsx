import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    name: "Nitesh Kudmethe",
    title: "Founder & Director",
    image: "/cropped_circle_image.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/nitesh-kudmethe-93342914a/",
      twitter: "https://twitter.com/niteshkudmethe",
      github: "https://github.com/niteshkudmethe",
    },
  },
  {
    name: "Nitin Yadav",
    title: "Founder & Director",
    image: "/nitiny.png",
    socials: {
      linkedin: "https://www.linkedin.com/in/nitin-yadav-b946a050",
      twitter: "https://twitter.com/nitinyadav",
      github: "https://github.com/nitinyadav",
    },
  },
];

export default function Team() {
  return (
    <section
      id="team"
      className="relative flex flex-col items-center justify-center px-6 md:px-12 bg-gradient-to-b from-black via-[#0f172a] to-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 text-lg mb-12">
          Meet the minds behind{" "}
          <span className="text-[#38bdf8] font-semibold">Corsiiq</span> — passionate, creative, and committed to innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-black/40 p-6 rounded-xl shadow-lg group cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Profile Image */}
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-2 border-[#38bdf8] flex items-center justify-center bg-black">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-contain w-full h-full"
                />
              </div>

              {/* Name & Title */}
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.title}</p>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#38bdf8]/90 rounded-xl flex flex-col items-center justify-center gap-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
