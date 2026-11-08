'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { GraduationCap, ShieldCheck, BookOpen, Layers, Bot, MapPin } from 'lucide-react';

export default function AcademicProfile() {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm shadow-xl space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center border border-cyan-800/60">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Academic Profile
            </h3>
            <p className="text-xs text-slate-400">
              {studentConfig.university} • Department of Computer Science & Engineering
            </p>
          </div>
        </div>

        <span className="text-xs font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 self-start sm:self-auto">
          UID: {studentConfig.uid}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        
        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
          <span className="text-slate-500 uppercase font-bold text-[10px]">Student Name</span>
          <div className="text-sm font-bold text-white">{studentConfig.name}</div>
          <div className="text-slate-400 text-[11px]">Undergraduate</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
          <span className="text-slate-500 uppercase font-bold text-[10px]">Specialization</span>
          <div className="text-sm font-bold text-cyan-400">{studentConfig.branch}</div>
          <div className="text-slate-400 text-[11px]">Microsoft Aligned Track</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
          <span className="text-slate-500 uppercase font-bold text-[10px]">University</span>
          <div className="text-sm font-bold text-white">{studentConfig.university}</div>
          <div className="text-slate-400 text-[11px]">Punjab, India</div>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-1">
          <span className="text-slate-500 uppercase font-bold text-[10px]">Subject Focus</span>
          <div className="text-sm font-bold text-emerald-400">{studentConfig.subject}</div>
          <div className="text-slate-400 text-[11px]">Core Architecture Assignment</div>
        </div>

      </div>
    </div>
  );
}
