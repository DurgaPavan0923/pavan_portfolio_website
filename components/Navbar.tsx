"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-md bg-black/40 p-5 z-50">
      <div className="max-w-6xl mx-auto flex justify-between">
        <h1 className="font-bold text-xl">Pavan</h1>
        <div className="space-x-6 hidden md:block">
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/resume">Resume</Link>
        </div>
      </div>
    </nav>
  );
}
