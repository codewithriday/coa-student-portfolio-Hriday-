'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  Compass, 
  GraduationCap, 
  BookOpen, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Lightbulb,
  Cpu
} from 'lucide-react';
import FutureGoals from './FutureGoals';
import FutureProjects from './FutureProjects';

export default function Journey() {
  return (
    <section id="journey" className="py-20 md:py-28 relative bg-slate-950/60 scroll-mt-20">
      
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            My <span className="text-cyan-400">Journey</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Education roadmap, practical learning, current semester focus, and long-term aspirations in Computer Science & AI.
          </p>
        </div>

        {/* 1. Education & Learning Chronology */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left: Education History */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Education History</h3>
                <p className="text-xs text-slate-400">Academic background and qualifications</p>
              </div>
            </div>

            <div className="space-y-4">
              
              <div className="relative pl-6 border-l-2 border-cyan-500/50 space-y-1">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400"></span>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white text-sm">B.Tech CSE (Artificial Intelligence - Microsoft)</span>
                  <span className="font-mono text-cyan-400">2025 – Present</span>
                </div>
                <div className="text-xs text-slate-300">Chandigarh University, Gharuan, Punjab</div>
                <p className="text-[11px] text-slate-400 pt-0.5">
                  Currently in 2nd Year (Semester 3). Coursework includes Computer Organization & Architecture (Prof. Ruchika Gupta), Data Structures, AI/ML foundations, and Cloud Computing.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 space-y-1">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600"></span>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white text-sm">Senior Secondary Education (Science - PCM)</span>
                  <span className="font-mono text-slate-400">2025</span>
                </div>
                <div className="text-xs text-slate-300">SSSVV, Vijay Nagar, Indore, MP</div>
                <p className="text-[11px] text-slate-400 pt-0.5">
                  Graduated with <strong>78%</strong> with Physics, Chemistry, and Mathematics foundations.
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-slate-700 space-y-1">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-slate-600"></span>
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-white text-sm">Secondary School Education (Class X)</span>
                  <span className="font-mono text-slate-400">2023</span>
                </div>
                <div className="text-xs text-slate-300">SSSVV, Vijay Nagar, Indore, MP</div>
                <p className="text-[11px] text-slate-400 pt-0.5">
                  Graduated with <strong>86%</strong> distinction.
                </p>
              </div>

            </div>
          </div>

          {/* Right: Learning Philosophy & Current Focus */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Learning & Current Focus</h3>
                <p className="text-xs text-slate-400">How I learn and what I am currently working on</p>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <Cpu className="w-4 h-4" />
                  <span>Computer Organization & Architecture (COA)</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Building deep conceptual understanding of low-level processor execution, ALU status flags, memory hierarchies, and multi-radix mathematical conversions for course evaluation under Prof. Ruchika Gupta.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-teal-400 font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Computer Vision & Applied AI</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Engineering practical CV tools with OpenCV and MediaPipe (such as real-time hand gesture tracking) and exploring conversational NLP structures combining C++ and Python.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-blue-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>Collegiate Collaboration & Leadership</span>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Active member of the Data Science & Web (DSW) Club collaborating on student projects, and serving on the campus Discipline Committee during university events.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 2. Future Goals */}
        <FutureGoals />

        {/* 3. Things I Want to Build */}
        <FutureProjects />

      </div>
    </section>
  );
}
