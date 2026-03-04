"use client";
import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6">
      <button
        onClick={() => setOpen(!open)}
        className="bg-primary px-4 py-2 rounded-full"
      >
        AI
      </button>

      {open && (
        <div className="mt-2 bg-black p-4 w-72 h-80 rounded-xl">
          <p className="text-sm">
            Ask about skills, projects or experience.
          </p>
        </div>
      )}
    </div>
  );
}
