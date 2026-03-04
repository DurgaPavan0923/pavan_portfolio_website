"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold tracking-tight mb-12"
      >
        About Me
      </motion.h2>

      {/* Main Description */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-gray-400 text-lg leading-relaxed mb-12"
      >
        I am <span className="text-white font-medium">Rajana Durga Pavan Kumar</span>, 
        an AI/ML Engineer passionate about building intelligent systems, 
        scalable web applications, and impactful digital experiences.
        <br /><br />
        With leadership experience as a Design Lead and Campus Ambassador, 
        I combine technical depth with creativity and strategic thinking. 
        My focus lies in Artificial Intelligence, Machine Learning, 
        and full-stack engineering — building solutions that are both 
        technically strong and user-centric.
      </motion.p>

      {/* Highlights Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8"
      >
        <div className="p-6 border border-gray-800 rounded-2xl hover:border-primary transition duration-300">
          <h3 className="text-xl font-semibold mb-3">AI & Machine Learning</h3>
          <p className="text-gray-400 text-sm">
            Developing intelligent systems using ML algorithms, 
            NLP techniques, and data-driven models.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-2xl hover:border-primary transition duration-300">
          <h3 className="text-xl font-semibold mb-3">Scalable Web Systems</h3>
          <p className="text-gray-400 text-sm">
            Building high-performance, production-ready applications 
            using modern frameworks like Next.js and React.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-2xl hover:border-primary transition duration-300">
          <h3 className="text-xl font-semibold mb-3">Leadership & Innovation</h3>
          <p className="text-gray-400 text-sm">
            Leading teams, managing design strategy, and driving 
            innovative technical initiatives.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
