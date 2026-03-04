"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import BlogPreview from "@/components/BlogPreview";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <main className="relative">
      
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6 max-w-5xl mx-auto">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="py-32 bg-black/40 px-6">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <Projects />
      </section>

      {/* Skills */}
      <section id="skills" className="py-32 bg-black/40 px-6">
        <Skills />
      </section>

      {/* Blog Preview */}
      <section id="blog" className="py-32 px-6 max-w-5xl mx-auto">
        <BlogPreview />
      </section>

      {/* Footer */}
      <Footer />

      {/* AI Chatbot Floating */}
      <Chatbot />

    </main>
  );
}
