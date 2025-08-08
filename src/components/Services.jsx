import React from "react";

export default function Services() {
  const services = [
    {
      title: "Custom Software Development",
      description: `We specialize in building scalable, secure, and high-performance software tailored specifically to your business needs. From internal tools to enterprise-grade platforms, we ensure seamless integration, fast performance, and long-term maintainability.`,
    },
    {
      title: "UI/UX Design",
      description: `Our design team crafts intuitive and visually appealing user interfaces with a strong focus on user experience. Every design is tested for usability and optimized for conversions to ensure that your digital product is not only beautiful but also effective.`,
    },
    {
      title: "AI & ML Solutions",
      description: `From predictive analytics to natural language processing, our AI and ML services enable businesses to automate processes, discover insights, and offer intelligent solutions. We help you unlock value from your data.`,
    },
    {
      title: "Web & Mobile App Development",
      description: `We develop responsive web applications and cross-platform mobile apps using cutting-edge frameworks like React, Next.js, Flutter, and Node.js. Whether it's a startup MVP or a full-scale enterprise product, we've got you covered.`,
    },
    {
      title: "Product Strategy",
      description: `We work with founders and product teams to turn ideas into viable digital products. Through user research, market analysis, prototyping, and roadmap planning, we help ensure that your product meets real-world needs and achieves business goals.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white  text-[#0f172a] dark:text-white px-6 py-16">
      {/* Hero Title */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#38bdf8] mb-4">
          Our Services
        </h1>
        <p className="text-lg text-gray-700 dark:text-black-300">
          We help businesses design, build, and scale world-class digital products.
        </p>
      </div>

      {/* Services List */}
      <div className="max-w-4xl mx-auto space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-xl bg-[#f1f5f9] dark:bg-[#1e293b] shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold text-[#0f172a] dark:text-white mb-2">
              {service.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
