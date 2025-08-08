import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Form Submitted:", formData);
    // You can later integrate email service or backend API here
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0f172a] text-white dark:bg-white dark:text-black transition px-6 py-16"
    >
      <div className="max-w-2xl w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Contact Us
        </h2>
        <p className="text-gray-300 dark:text-gray-700 mb-10 text-center">
          Have a question or want to work together? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Your Message</label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 dark:bg-gray-200 text-white dark:text-black focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#38bdf8] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#0ea5e9] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
