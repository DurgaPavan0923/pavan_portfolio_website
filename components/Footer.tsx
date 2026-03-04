"use client";

import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold tracking-tight">
              Rajana Durga <span className="text-primary">Pavan Kumar</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-md">
              AI/ML Engineer building intelligent systems, scalable applications,
              and impactful digital experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-gray-400">
            
            <a
              href="https://github.com/DurgaPavan0923"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <Github size={22} />
            </a>

            <a
              href="https://www.linkedin.com/in/rajana-durga-pavan-kumar-432248298"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="https://x.com/PavanKu74939078"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <Twitter size={22} />
            </a>

            <a
              href="https://www.instagram.com/pavan_rajana_0923"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <Instagram size={22} />
            </a>

            <a
              href="https://www.facebook.com/share/18JtcJiNt8/"
              target="_blank"
              className="hover:text-white transition duration-300"
            >
              <Facebook size={22} />
            </a>

            <a
              href="mailto:rdpkumar2308@gmail.com"
              className="hover:text-white transition duration-300"
            >
              <Mail size={22} />
            </a>

          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
          
          <p>
            © {new Date().getFullYear()} Rajana Durga Pavan Kumar. All rights reserved.
          </p>

          <p>
            Built with Next.js, Tailwind & Three.js — Designed for Google-level engineering.
          </p>

        </div>

      </div>
    </footer>
  );
}
