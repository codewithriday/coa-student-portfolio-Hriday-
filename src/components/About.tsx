'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  User, 
  BookOpen, 
  Sparkles, 
  Cpu, 
  Layers
} from 'lucide-react';
import AcademicProfile from './AcademicProfile';
import TechStack from './TechStack';
import Interests from './Interests';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative bg-slate-950/40 scroll-mt-20">
      
      {/* Subtle Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Personal & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A CSE-AI student exploring artificial intelligence, hardware architecture, athletic discipline, and technology.
          </p>
        </div>

        {/* 1. Introduction Bio Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
            <BookOpen className="w-6 h-6 text-cyan-400" />
            Welcome to My Portfolio
          </h3>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            {studentConfig.extendedBio}
          </p>
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-cyan-300 border border-slate-800">#ArtificialIntelligence</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-teal-300 border border-slate-800">#ComputerArchitecture</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-blue-300 border border-slate-800">#MicrosoftCSE_AI</span>
            <span className="px-3 py-1 rounded-lg bg-slate-950 text-amber-300 border border-slate-800">#LawnTennisWinner</span>
          </div>
        </div>

        {/* Academic Profile Card */}
        <AcademicProfile />

        {/* 2. Academic Interests Section */}
        <div className="space-y-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Intellectual Curiosity</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Academic <span className="text-cyan-400">Interests</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Core computer science, artificial intelligence, and hardware domains I am passionate about learning and mastering.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {studentConfig.academicInterests.map((interest, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                    {interest.category}
                  </span>
                </div>
                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {interest.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Tech Stack */}
        <TechStack />

        {/* 4. Personal Interests (Beyond the Classroom: Lawn Tennis & Multi-Sports, Tech Trends, Adventure) */}
        <Interests />

      </div>
    </section>
  );
}
