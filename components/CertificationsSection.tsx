"use client";

import { motion } from "framer-motion";

const certifications = [
  {
    title: "Full Stack Development",
    issuer: "Self Projects & Industry Practice",
    year: "2024",
  },
  {
    title: "MongoDB & Backend Architecture",
    issuer: "Hands-on Production Experience",
    year: "2024",
  },
  {
    title: "Docker & Deployment Fundamentals",
    issuer: "DevOps Learning Track",
    year: "2025",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Credentials
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Continuous learning and professional validation.
          </p>
        </div>

        {/* Timeline Style Layout */}
        <div className="relative border-l border-white/10 pl-8 space-y-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow Dot */}
              <div className="absolute -left-[38px] top-2 w-4 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.6)]" />

              <h3 className="text-xl font-semibold">
                {cert.title}
              </h3>
              <p className="text-gray-400 text-sm mt-1">
                {cert.issuer}
              </p>
              <span className="text-xs text-gray-500 mt-2 block">
                {cert.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
