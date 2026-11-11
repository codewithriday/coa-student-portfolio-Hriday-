'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { Code, Cpu, Wrench, CheckCircle } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (name: string) => {
    if (name.includes('Languages')) return Code;
    if (name.includes('COA') || name.includes('Hardware')) return Cpu;
    return Wrench;
  };

  return (
    <div id="skills" className="space-y-6 pt-6">
      <div>
        <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Code className="w-5 h-5 text-cyan-400" />
          Technical Skills & Architecture Competencies
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Proficiency across programming languages, hardware organization theories, and development tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {(studentConfig.skillCategories || []).map((category, idx) => {
          const Icon = getCategoryIcon(category.name);
          return (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800">
                  <div className="p-2 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-white text-sm sm:text-base">
                    {category.name}
                  </h4>
                </div>

                <div className="space-y-4 mt-5">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="font-mono text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Track */}
                      <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      {skill.tag && (
                        <div className="text-[10px] text-slate-400 font-mono flex items-center gap-1 pt-0.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
                          <span>{skill.tag}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Evaluated Competency</span>
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
