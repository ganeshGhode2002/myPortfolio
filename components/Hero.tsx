"use client";

import { motion } from "framer-motion";

export default function Hero() {
    
    return (
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

            {/* Animated AI Background Glow */}
            <motion.div
                animate={{ y: [0, -30, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 opacity-20 blur-[200px] rounded-full -z-10"
            />

            <div className="max-w-5xl text-center">
                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight"
                >
                    Building{" "}
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        Scalable AI Systems
                    </span>
                </motion.h1>


                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Full-Stack Engineer focused on backend architecture,
                    high-performance APIs, and production-ready web applications.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="mt-12 flex justify-center gap-6 flex-wrap"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 text-white font-semibold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all duration-300"
                    >
                        View Projects
                    </a>

                    <a
                        href="/resume.pdf"
                        className="px-8 py-3 rounded-xl border border-white/20 text-gray-300 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
