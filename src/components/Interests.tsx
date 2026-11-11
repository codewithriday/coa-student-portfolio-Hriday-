'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { Activity, Compass, Flame, Sparkles } from 'lucide-react';

const iconMap: Record<string, any> = {
  Activity,
  Compass,
  Flame,
};

export default function Interests() {
  return (
    <div className="space-y-6 pt-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Personality & Lifestyle</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Beyond the <span className="text-cyan-400">Classroom</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Balancing technical engineering with athletic discipline, cultural exploration, and adventurous learning.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {studentConfig.personalInterests.map((interest, idx) => {
          const Icon = iconMap[interest.icon] || Activity;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${interest.color} flex items-center justify-center border shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-slate-800">
                    {interest.badge}
                  </span>
                </div>

                <h4 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                  {interest.title}
                </h4>

                <div className="text-xs font-mono text-cyan-400 font-semibold mt-1">
                  {interest.tagline}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                  {interest.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500">
                Core Personal Dimension
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
