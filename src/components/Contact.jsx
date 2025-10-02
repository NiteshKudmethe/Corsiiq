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
    console.log("Form Submitted:", formData);
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="font-sans text-gray-900 dark:text-white">
      {/* Section 1: Form + Image */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-32 gap-16">
        {/* Form */}
        <div className="flex-1 max-w-lg bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Contact Us</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Have a question or want to work together? Fill out the form below and we’ll get back to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#38bdf8]"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-[#38bdf8] text-white font-medium rounded-xl hover:bg-[#0ea5e9] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="flex-1 max-w-lg">
          <img
            src="https://picsum.photos/600/800?grayscale"
            alt="Contact Illustration"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </div>
      </div>

      {/* Section 2: Map + Address */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 md:py-32 gap-16 bg-white dark:bg-gray-900">
        {/* Map */}
        <div className="flex-1 w-full h-80 md:h-[500px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Our Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.1234567890123!2d-122.41941508468148!3d37.77492977975952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808b3b123456%3A0xabcdef1234567890!2sYour%20Business%20Address!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Address */}
        <div className="flex-1 max-w-lg bg-white dark:bg-gray-900 rounded-2xl p-10 shadow-md">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Location</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            <strong>Address:</strong> 123 Your Street, City, State, ZIP, Country
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Phone:</strong> +91 1234567890
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            <strong>Email:</strong> info@yourbusiness.com
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We are open Monday to Friday, 9AM to 6PM
          </p>
        </div>
      </div>
    </section>
  );
}
