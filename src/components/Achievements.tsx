'use client';

import React from 'react';
import { achievementsList } from '../data/studentConfig';
import { 
  Trophy, 
  Calendar, 
  CheckCircle2, 
  Award, 
  GraduationCap, 
  Terminal, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';

const categoryIconMap: Record<string, any> = {
  Academic: GraduationCap,
  Certification: Award,
  Technical: Terminal,
  Participation: Sparkles,
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 relative bg-slate-950/40 scroll-mt-20">
      
      {/* Background Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Academic & Course Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Achievements & <span className="text-cyan-400">Certifications</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A verified timeline of academic achievements, technical projects, and ongoing coursework at Chandigarh University.
          </p>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievementsList.map((item) => {
            const Icon = categoryIconMap[item.category] || Trophy;
            return (
              <div
                key={item.id}
                className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 rounded-xl bg-cyan-950/90 border border-cyan-800/60 text-cyan-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">
                        {item.organization}
                      </span>
                    </div>

                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {item.date}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-base font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>

                {/* Status Badge */}
                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-slate-950 text-cyan-400 border border-slate-800">
                    {item.category}
                  </span>

                  <span className="text-emerald-400 font-semibold flex items-center gap-1 text-[11px]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.status}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
