"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Design Lead",
    organization: "Campus Technical Community",
    duration: "2024 – Present",
    description:
      "Led UI/UX strategy, branding, and visual identity for technical initiatives. Collaborated with cross-functional teams to deliver scalable and engaging digital experiences.",
  },
  {
    role: "Campus Ambassador",
    organization: "Tech & Innovation Programs",
    duration: "2023 – 2024",
    description:
      "Represented national-level programs at the campus level. Organized technical workshops, increased student engagement, and strengthened community outreach.",
  },
  {
    role: "AI/ML Project Developer",
    organization: "Independent Projects",
    duration: "2023 – Present",
    description:
      "Built AI-based systems including intelligent chatbots and resource architecture models using machine learning, NLP, and modern web technologies.",
  },
];

export default function Experience() {
  return (
    <div className="max-w-5xl mx-auto">
      
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold tracking-tight mb-16"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative border-l border-gray-800 ml-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-14 ml-8"
          >
            {/* Timeline Dot */}
            <div className="absolute w-3 h-3 bg-primary rounded-full -left-1.5 mt-2" />

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-gray-800 hover:border-primary transition-all duration-300">
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h3 className="text-xl font-semibold">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <p className="text-primary mt-2 text-sm">
                {exp.organization}
              </p>

              <p className="text-gray-400 mt-4 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
