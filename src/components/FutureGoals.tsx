'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { Target, CheckCircle2 } from 'lucide-react';

export default function FutureGoals() {
  return (
    <div className="space-y-6 pt-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Target className="w-3.5 h-3.5" />
          <span>Long-Term Vision</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Future <span className="text-cyan-400">Goals</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Realistic academic, engineering, and personal development aspirations for my journey in Computer Science & Artificial Intelligence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {studentConfig.futureGoals.map((goal) => (
          <div
            key={goal.id}
            className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 flex items-start gap-4"
          >
            <div className="w-8 h-8 rounded-xl bg-cyan-950/90 border border-cyan-800/60 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
              0{goal.id}
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  {goal.category}
                </span>
              </div>
              <h4 className="text-sm font-semibold text-slate-100 leading-snug">
                {goal.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
