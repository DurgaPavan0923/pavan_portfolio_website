"use client";

import Link from "next/link";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-dark text-white flex flex-col">

      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <Link
          href="/"
          className="text-sm text-gray-400 hover:text-white transition"
        >
          ← Back to Home
        </Link>

        <a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-primary px-4 py-2 rounded-full text-sm hover:scale-105 transition"
        >
          <Download size={16} />
          Download Resume
        </a>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1">
        <iframe
          src="/resume.pdf"
          className="w-full h-full"
          title="Resume"
        />
      </div>

    </div>
  );
}
