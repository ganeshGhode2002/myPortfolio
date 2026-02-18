"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "JWT Auth", "REST APIs"],
  },
  {
    title: "Database",
    items: ["MongoDB", "Mongoose", "Data Modeling"],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD", "Vercel", "AWS Basics"],
  },
];

export default function TechStackSection() {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Tech{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Technologies I use to build scalable and production-ready systems.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, i) => (
                  <motion.span
                    key={i}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
