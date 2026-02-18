
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000;
    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return <span>{count}+</span>;
}

export default function MetricsSection() {
  const [projectCount, setProjectCount] = useState(0);
  const [githubRepos, setGithubRepos] = useState(0);
  const [yearsCoding, setYearsCoding] = useState(0);

  useEffect(() => {
    // Fetch project count from your DB
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjectCount(data.length))
      .catch(() => setProjectCount(0));

    // Fetch GitHub public repos
    fetch("https://api.github.com/users/ganeshghode2002")
      .then((res) => res.json())
      .then((data) => setGithubRepos(data.public_repos || 0))
      .catch(() => setGithubRepos(0));

    // Auto calculate years coding
    const startYear = 2022; // change to your real start year
    const currentYear = new Date().getFullYear();
    setYearsCoding(currentYear - startYear);
  }, []);

  const metrics = [
    { label: "Projects Built", value: githubRepos },
    { label: "GitHub Repositories", value: githubRepos },
    { label: "Years Coding", value: yearsCoding },
    { label: "API Endpoints", value: 18 }, // update manually for now
    { label: "Deployed Apps", value: 6 },  // update manually
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Engineering{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Metrics
            </span>
          </h2>
          <p className="mt-4 text-gray-400">
            Real-time data reflecting engineering growth and system building.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-center"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                <Counter value={metric.value} />
              </h3>
              <p className="mt-3 text-gray-400 text-sm">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

