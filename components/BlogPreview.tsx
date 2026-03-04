"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Building AI-Based Help Bots with Knowledge Graphs",
    description:
      "How I designed an intelligent chatbot system using NLP techniques and graph-based knowledge representation.",
    date: "Feb 2026",
    slug: "/blog"
  },
  {
    title: "Designing Scalable AI Systems for Real-World Applications",
    description:
      "Exploring system architecture, model optimization, and deployment strategies for scalable AI solutions.",
    date: "Jan 2026",
    slug: "/blog"
  }
];

export default function BlogPreview() {
  return (
    <div>
      {/* Section Title */}
      <div className="mb-16 text-center">
        <h2 className="text-5xl font-bold tracking-tight mb-4">
          Insights & Articles
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Writing about AI engineering, scalable systems, and technical design.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="border border-gray-800 rounded-2xl p-8 hover:border-primary transition duration-300 hover:scale-[1.02] bg-black/40 backdrop-blur-md"
          >
            <p className="text-sm text-gray-500 mb-3">{post.date}</p>

            <h3 className="text-2xl font-semibold mb-4">
              {post.title}
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              {post.description}
            </p>

            <Link
              href={post.slug}
              className="text-primary font-medium hover:underline"
            >
              Read Article →
            </Link>
          </motion.div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-16">
        <Link
          href="/blog"
          className="px-8 py-3 border border-gray-700 rounded-full hover:border-primary transition"
        >
          View All Articles
        </Link>
      </div>
    </div>
  );
}
