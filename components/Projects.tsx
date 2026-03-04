"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Resume Job Match System",
    description:
      "AI-powered resume screening system using NLP and machine learning to automate candidate-job matching for HR workflows.",
    tech: ["Python", "NLP", "Machine Learning"],
    github: "https://github.com/DurgaPavan0923/AI-Resume-Job-Match-System",
  },
  {
    title: "AGORA PROXIMA",
    description:
      "Advanced web-based project system focusing on scalable architecture and modern frontend engineering.",
    tech: ["JavaScript", "Web Architecture"],
    github: "https://github.com/DurgaPavan0923/AGORA-PROXIMA",
  },
  {
    title: "Human Activity Recognition Model",
    description:
      "Machine learning model that classifies physical activities using accelerometer and gyroscope sensor data.",
    tech: ["Deep Learning", "HAR", "Jupyter Notebook"],
    github:
      "https://github.com/DurgaPavan0923/Human_Activity_RecognitionModel",
  },
  {
    title: "Seq2Seq Text Summarization",
    description:
      "Neural network-based Seq2Seq model for newspaper text summarization using encoder-decoder architecture.",
    tech: ["NLP", "Seq2Seq", "Deep Learning"],
    github:
      "https://github.com/DurgaPavan0923/Seq2Seq-model-newspaper-text-summarization",
  },
  {
    title: "Real Estate Price Prediction",
    description:
      "Predictive analytics model estimating real estate prices using regression techniques and feature engineering.",
    tech: ["Machine Learning", "Regression", "Data Science"],
    github:
      "https://github.com/DurgaPavan0923/real-estate-prediction",
  },
  {
    title: "SOA NCC Official Website",
    description:
      "Official institutional website project with structured frontend styling and responsive UI.",
    tech: ["CSS", "Frontend Development"],
    github:
      "https://github.com/DurgaPavan0923/SOA-NCC-official-website",
  },
];

export default function Projects() {
  return (
    <div className="space-y-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold tracking-tight"
      >
        Selected Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-gray-800 rounded-2xl p-8 hover:border-primary transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-800 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-6 items-center">
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 hover:text-primary transition"
              >
                <Github size={18} />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
