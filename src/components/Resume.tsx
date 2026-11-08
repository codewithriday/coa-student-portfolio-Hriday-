'use client';

import React, { useState } from 'react';
import { studentConfig } from '../data/studentConfig';
import ResumeModal from './ResumeModal';
import { 
  FileText, 
  Download, 
  Eye, 
  GraduationCap, 
  Cpu, 
  Award, 
  Sparkles,
  Info
} from 'lucide-react';

export default function Resume() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="resume" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Student <span className="text-cyan-400">Resume</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Academic profile, education, technical focus, and coursework at Chandigarh University.
          </p>
        </div>

        {/* Resume Banner Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-left">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                Academic Curriculum Vitae
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {studentConfig.name}
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              {studentConfig.branch} student at {studentConfig.university} (UID: {studentConfig.uid}). Focused on AI/ML, Computer Systems, and low-level computer architecture.
            </p>
            
            {/* Clear documented file path note */}
            <div className="flex items-center gap-2 text-xs text-slate-400 font-mono pt-1">
              <Info className="w-3.5 h-3.5 text-cyan-400" />
              <span>File location: <code className="text-cyan-300">{studentConfig.resumePath}</code></span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-3.5 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-lg shadow-cyan-600/30 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <a
              href={studentConfig.resumePath}
              download="Hriday-Kataria-Resume.pdf"
              className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-sm transition-all duration-200 hover:border-slate-500 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Structured Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Education */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
              <GraduationCap className="w-5 h-5 text-cyan-400" /> Education
            </h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between font-bold text-white text-sm">
                <span>BE – Computer Science & Engineering (AI - Microsoft)</span>
                <span className="font-mono text-cyan-400">2025 – Present</span>
              </div>
              <div className="text-slate-400">{studentConfig.university}</div>
              <p className="text-slate-300 pt-1 leading-relaxed">
                Focused on Artificial Intelligence, Computer Architecture, Data Structures & Algorithms, and Computer Systems.
              </p>
            </div>
          </div>

          {/* Academic Projects */}
          <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 pb-2 border-b border-slate-800">
              <Cpu className="w-5 h-5 text-cyan-400" /> Academic Projects
            </h3>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between items-center font-bold text-white text-sm">
                <span>COA Number System Converter & Academic Portal</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                  COA Project
                </span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Full-featured 4-radix number system converter with bit visualizers and 12 COA study modules.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Modal */}
      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
