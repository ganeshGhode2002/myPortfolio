"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
  return (
  
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left Side – Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-relaxed text-lg">
            I focus on building scalable backend systems, secure APIs,
            and production-ready full-stack applications. My approach
            prioritizes clean architecture, performance optimization,
            and maintainable codebases.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-lg">
            I continuously improve by integrating modern technologies,
            optimizing system performance, and designing solutions
            that scale efficiently.
          </p>
        </motion.div>

        {/* Right Side – Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-6"
        >
          {[
            "Scalable API Design",
            "JWT Authentication",
            "MongoDB & Data Modeling",
            "Docker & Deployment",
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-sm text-gray-300 hover:border-white/20 transition-all"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>

  );
}
