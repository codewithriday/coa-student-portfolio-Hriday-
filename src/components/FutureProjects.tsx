'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { Lightbulb, ArrowUpRight } from 'lucide-react';

export default function FutureProjects() {
  return (
    <div className="space-y-6 pt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>Future Innovations</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Things I Want to <span className="text-cyan-400">Build</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Areas I'm interested in exploring and engineering as I advance in CSE, AI, and systems architecture.
          </p>
        </div>

        <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-slate-900 text-slate-400 border border-slate-800 self-start sm:self-auto">
          Exploration Roadmap
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentConfig.futureProjects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                  {project.category}
                </span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </div>

              <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                {project.title}
              </h4>

              <p className="text-xs text-slate-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-5 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
              {project.techTags.map((tag, tIdx) => (
                <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
