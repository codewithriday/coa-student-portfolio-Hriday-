'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { Cpu, ArrowUp, Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'COA Converter', href: '#coa-tool' },
    { name: 'COA Learning Hub', href: '#learning' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
          
          {/* Col 1: Brand & Academic Details */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-600 flex items-center justify-center text-white font-extrabold text-xs shadow-md">
                {studentConfig.initials}
              </div>
              <span className="font-bold text-base text-white">
                {studentConfig.name}
              </span>
            </div>
            
            <p className="text-cyan-400 font-semibold text-xs sm:text-sm">
              {studentConfig.branch}
            </p>

            <div className="text-[11px] text-slate-400 font-mono space-y-0.5">
              <div>{studentConfig.university}</div>
              <div>UID: {studentConfig.uid} • {studentConfig.subject}</div>
            </div>

            <p className="text-slate-400 text-xs italic pt-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Built with curiosity, code and continuous learning.</span>
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Back to top & Info */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Navigation Action
            </div>
            
            <div>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-slate-800 text-xs font-semibold transition-colors cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p>
            © 2026 <span className="text-slate-200 font-semibold">{studentConfig.name}</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Next.js • TypeScript • Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
