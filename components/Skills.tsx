"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "JavaScript", "TypeScript"]
  },
  {
    title: "AI / Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Knowledge Graphs",
      "Data Analysis"
    ]
  },
  {
    title: "Web & Frameworks",
    skills: [
      "Next.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "REST APIs"
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "Vercel",
      "Docker (Basics)",
      "Canva",
      "Figma",
      "Postman"
    ]
  }
];

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold tracking-tight mb-16 text-center"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary transition duration-300"
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 text-sm rounded-full bg-white/10 hover:bg-primary hover:text-white transition duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
