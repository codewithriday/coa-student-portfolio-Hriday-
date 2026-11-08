'use client';

import React from 'react';
import { 
  Code2, 
  Cloud, 
  Terminal, 
  Layers, 
  Cpu, 
  Binary, 
  Database,
  CheckCircle2
} from 'lucide-react';

export default function TechStack() {
  const stackCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
      skills: [
        { name: "Python", level: "Advanced", desc: "Computer Vision, Data Analysis, Scripting" },
        { name: "C++", level: "Intermediate", desc: "Systems Programming, OOP, Performance" },
        { name: "C", level: "Foundational", desc: "Low-level Memory & Architecture" }
      ]
    },
    {
      title: "AI, ML & Computer Vision",
      icon: Cpu,
      color: "text-teal-400 border-teal-800/60 bg-teal-950/40",
      skills: [
        { name: "OpenCV", level: "Hands-on", desc: "Camera Feed & Image Processing" },
        { name: "MediaPipe", level: "Hands-on", desc: "Real-time Hand Landmark Tracking" },
        { name: "NumPy & Pandas", level: "Proficient", desc: "Data Manipulation & Matrix Math" },
        { name: "Scikit-learn", level: "Intermediate", desc: "Classical Machine Learning Models" }
      ]
    },
    {
      title: "Cloud & Microsoft Azure",
      icon: Cloud,
      color: "text-blue-400 border-blue-800/60 bg-blue-950/40",
      skills: [
        { name: "Azure AI-900", level: "Certified", desc: "Computer Vision, NLP & Machine Learning" },
        { name: "Azure AZ-900", level: "Certified", desc: "Cloud Architecture, Security & Governance" },
        { name: "Generative AI", level: "Certified", desc: "Coursera Generative AI Essentials" }
      ]
    },
    {
      title: "Developer Tools & Platforms",
      icon: Terminal,
      color: "text-purple-400 border-purple-800/60 bg-purple-950/40",
      skills: [
        { name: "Linux & Kali Linux", level: "Environment", desc: "Bash Scripting & System Commands" },
        { name: "Git & GitHub", level: "Version Control", desc: "Source Control & Collaborative Workflows" },
        { name: "VS Code & Jupyter", level: "IDE", desc: "Modular Development & Prototyping" }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
          <Layers className="w-3.5 h-3.5" />
          <span>Core Competencies</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Technical <span className="text-cyan-400">Stack</span>
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Programming languages, cloud frameworks, AI/ML tools, and environments I use to build projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {stackCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">
                  {cat.title}
                </h4>
              </div>

              <div className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <div 
                    key={sIdx}
                    className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
                  >
                    <div>
                      <span className="font-bold text-slate-200 block sm:inline">{skill.name}</span>
                      <span className="text-slate-400 sm:ml-2 text-[11px] block sm:inline">{skill.desc}</span>
                    </div>
                    <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800 font-semibold">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
