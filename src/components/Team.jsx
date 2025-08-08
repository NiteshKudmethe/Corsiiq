import React from "react";

const teamMembers = [
  {
    name: "Nitesh Kudmethe",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150", // Replace with real image URLs
  },
  {
    name: "Priyesh Nagdeote",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Nitin Yadav",
    role: "Founder & CEO",
    image: "https://via.placeholder.com/150",
  },
 
];

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-screen bg-[#0f172a] dark:bg-white text-white dark:text-black px-6 py-16 transition"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-300 dark:text-gray-700 text-lg mb-12">
          Meet the minds behind <span className="text-[#38bdf8] font-semibold">Corsiiq</span> — passionate, creative, and committed to innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-[#1e293b] dark:bg-gray-100 p-6 rounded-xl shadow-md hover:scale-105 transform transition duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-400 dark:text-gray-600">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
