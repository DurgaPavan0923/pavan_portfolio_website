"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold tracking-tight"
      >
        Rajana Durga <span className="text-primary">Pavan Kumar</span>
      </motion.h1>

      <p className="mt-6 text-gray-400 max-w-2xl text-lg">
        AI/ML Engineer building intelligent systems and scalable applications.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="/resume"
          className="px-6 py-3 bg-primary rounded-full"
        >
          View Resume
        </a>
        <a
          href="mailto:rdpkumar2308@gmail.com"
          className="underline"
        >
          Contact
        </a>
      </div>
    </section>
  );
}
