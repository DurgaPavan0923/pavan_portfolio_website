"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import BlogPreview from "../components/BlogPreview";
import Footer from "../components/Footer";
import Chatbot from "../components/Chatbot";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <BlogPreview />
      <Footer />
      <Chatbot />
    </main>
  );
}
