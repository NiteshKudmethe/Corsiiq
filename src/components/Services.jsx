import React from "react";
import {
  FaCode,
  FaPalette,
  FaRobot,
  FaMobileAlt,
  FaLightbulb,
  FaCloud,
  FaLock,
  FaChartLine,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCode className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Custom Software Development",
      description:
        "We build scalable, secure, and tailor-made software solutions that streamline your business operations and drive efficiency.",
      benefits: [
        "Tailored solutions to meet unique business needs",
        "Robust, maintainable, and scalable architecture",
        "Seamless integration with existing systems",
        "High performance and security standards",
      ],
      technologies: ["JavaScript", "Node.js", "Java", "Python", "AWS", "Docker"],
      img: "/pexels-luis-gomes-166706-546819.jpg",
    },
    {
      icon: <FaPalette className="text-[#38bdf8] text-5xl mb-5" />,
      title: "UI/UX Design & Branding",
      description:
        "Our design team crafts engaging, user-centric interfaces backed by data-driven research.",
      benefits: [
        "User research and persona creation",
        "Intuitive navigation and interaction design",
        "Consistent brand voice and visual identity",
        "Conversion-optimized layouts and flows",
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Photoshop"],
      img: "/pexels-pavel-danilyuk-7190953.jpg",
    },
    {
      icon: <FaRobot className="text-[#38bdf8] text-5xl mb-5" />,
      title: "AI & Machine Learning Solutions",
      description:
        "Leverage AI to automate workflows, uncover insights, and build intelligent features.",
      benefits: [
        "Automated data-driven decision making",
        "Improved operational efficiency",
        "Personalized customer experiences",
        "Advanced predictive analytics capabilities",
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "AWS SageMaker", "R"],
      img: "/pexels-pavel-danilyuk-8294663.jpg",
    },
    {
      icon: <FaMobileAlt className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Web & Mobile App Development",
      description:
        "We create responsive web and mobile apps that perform flawlessly across devices and platforms.",
      benefits: [
        "Cross-platform compatibility (iOS, Android, Web)",
        "Fast and smooth user experiences",
        "Scalable codebases for future growth",
        "Robust backend APIs and cloud deployment",
      ],
      technologies: ["React", "Next.js", "Flutter", "Node.js", "Firebase", "AWS"],
      img: "/pexels-morthy-jameson-108384720-9577225.jpg",
    },
    {
      icon: <FaLightbulb className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Product Strategy & Innovation Consulting",
      description:
        "We partner with founders and teams to align technology, market, and customer insights into actionable product strategies.",
      benefits: [
        "User and market research analysis",
        "Product roadmap and MVP definition",
        "Go-to-market and scaling strategies",
        "Technology trend advisory and risk management",
      ],
      technologies: ["Agile", "Lean Startup", "Design Thinking", "OKRs"],
      img: "/pexels-a-darmel-7710090.jpg",
    },
    {
      icon: <FaCloud className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Cloud Infrastructure & DevOps",
      description:
        "We help you migrate, build, and maintain cloud-native infrastructures that ensure reliability, scalability, and cost-efficiency.",
      benefits: [
        "Automated deployment pipelines",
        "Infrastructure as Code (IaC)",
        "24/7 monitoring and incident response",
        "Cost optimization and security compliance",
      ],
      technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      img: "/pexels-pixabay-373543.jpg",
    },
    {
      icon: <FaLock className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Cybersecurity & Compliance",
      description:
        "Protect your digital assets with our comprehensive cybersecurity solutions.",
      benefits: [
        "Risk assessments and vulnerability testing",
        "Data encryption and secure authentication",
        "Compliance with GDPR, HIPAA, PCI-DSS",
        "Incident response and recovery planning",
      ],
      technologies: ["OAuth2", "JWT", "SIEM", "Firewalls", "Encryption Algorithms"],
      img: "/pexels-pixabay-60504.jpg",
    },
    {
      icon: <FaChartLine className="text-[#38bdf8] text-5xl mb-5" />,
      title: "Data Analytics & Business Intelligence",
      description:
        "Transform raw data into actionable insights using modern BI tools.",
      benefits: [
        "Custom dashboards and KPIs",
        "Real-time data processing",
        "Data visualization for stakeholder clarity",
        "Predictive modeling and trend analysis",
      ],
      technologies: ["Power BI", "Tableau", "Looker", "SQL", "Python", "ETL"],
      img: "/pexels-rdne-7947663.jpg",
    },
  ];

  return (
    <section
      className="min-h-screen px-8 py-20 font-inter 
                 bg-gradient-to-b from-black via-[#0f172a] to-black text-white"
    >
      {/* Title Section */}
      <div className="max-w-7xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold text-[#38bdf8] mb-4 tracking-tight">
          Our Services
        </h1>
        <p className="max-w-4xl mx-auto text-gray-300 leading-relaxed">
          Empowering businesses with comprehensive digital solutions tailored to
          your unique needs. From concept to launch and beyond, we deliver
          excellence across technology, design, and strategy.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid gap-14 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon, title, description, benefits, technologies, img }, idx) => (
          <div
            key={idx}
            className="relative bg-black/40 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col overflow-hidden"
          >
            {/* Image */}
            <div className="relative h-64 w-full">
              <img
                src={img}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col">
              <div>{icon}</div>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow">
                {description}
              </p>

              {/* Benefits */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2 text-[#38bdf8]">Key Benefits:</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  {benefits.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold mb-2 text-[#38bdf8]">Technologies:</h3>
                <p className="text-gray-400 italic">{technologies.join(", ")}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto text-center text-[#38bdf8] mt-20">
        <h2 className="text-3xl font-extrabold mb-6">
          Ready to transform your business with cutting-edge technology?
        </h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
          Get in touch with our experts today to discuss your project and how we
          can help you succeed.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-4 bg-gradient-to-r from-[#38bdf8] to-[#0ea5e9] text-white text-xl font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}
