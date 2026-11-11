'use client';

import React, { useState, useEffect } from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  Binary, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  GraduationCap, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Bot,
  Zap,
  Activity,
  Compass,
  Copy,
  Check
} from 'lucide-react';

export default function Hero() {
  const [binaryStream, setBinaryStream] = useState<string[]>([]);
  const [copiedUID, setCopiedUID] = useState(false);

  useEffect(() => {
    const generateBits = () => {
      const bits = Array.from({ length: 16 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      );
      setBinaryStream(bits);
    };

    generateBits();
    const interval = setInterval(generateBits, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyUID = () => {
    navigator.clipboard.writeText(studentConfig.uid);
    setCopiedUID(true);
    setTimeout(() => setCopiedUID(false), 2000);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden flex flex-col justify-center">
      {/* Subtle Ambient Glows & Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.15),rgba(255,255,255,0))] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Introductions & Identity */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/60 shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold text-cyan-300 tracking-wide font-mono">
                {studentConfig.subject}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">
                {studentConfig.university}
              </span>
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text text-transparent">{studentConfig.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-slate-200 pt-1 flex items-center gap-2">
                <span className="text-cyan-400">{studentConfig.branch}</span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-blue-950/80 text-blue-300 border border-blue-800/50 font-mono hidden sm:inline">Student</span>
              </p>
            </div>

            {/* Additional Intro Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {studentConfig.bio}
            </p>

            {/* Academic Information Card */}
            <div className="p-4 rounded-2xl bg-slate-900/85 border border-slate-800 backdrop-blur-sm shadow-xl grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/50">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">University</div>
                  <div className="font-bold text-slate-200">{studentConfig.university}</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-indigo-950 text-indigo-400 border border-indigo-800/50">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Student UID</div>
                    <div className="font-mono font-bold text-cyan-300 text-sm">{studentConfig.uid}</div>
                  </div>
                </div>
                <button
                  onClick={handleCopyUID}
                  title="Copy UID"
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                >
                  {copiedUID ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#about"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 shadow-md transition-all duration-200 flex items-center justify-center gap-2 group hover:border-slate-500"
              >
                <span>Explore My Profile</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#coa-tool"
                className="px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Binary className="w-4 h-4 text-slate-950" />
                <span>Try COA Learning Tool</span>
              </a>
            </div>

            {/* Personal Motto Line */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-cyan-400/90 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{studentConfig.motto}</span>
            </div>

          </div>

          {/* Right Column: AI + CPU Architecture Visual Widget */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-500 rounded-3xl blur-xl opacity-30 animate-pulse-slow"></div>

              {/* Hardware & AI Core Simulation Card */}
              <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-md space-y-4">
                
                {/* Chip Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                    <span className="text-xs font-mono font-bold text-slate-300 pl-2">AI_COA_SYSTEM.v</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                    MICROSOFT CSE-AI
                  </span>
                </div>

                {/* Subsystem Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-cyan-900/50">
                    <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-bold">
                      <Cpu className="w-3.5 h-3.5" /> CPU Datapath
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      ALU • CU • Registers
                    </div>
                    <div className="mt-2 text-[10px] text-emerald-400 font-mono">
                      STATUS: ACTIVE
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/50">
                    <div className="flex items-center gap-1.5 text-xs text-indigo-400 font-bold">
                      <Bot className="w-3.5 h-3.5" /> AI Neural Engine
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">
                      Tensor Matrix Op
                    </div>
                    <div className="mt-2 text-[10px] text-indigo-300 font-mono">
                      ACCELERATED
                    </div>
                  </div>
                </div>

                {/* Live 4-Radix Live Registers Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-700/40 space-y-2">
                  <div className="text-xs font-bold text-white flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Binary className="w-4 h-4 text-cyan-400" />
                      COA 4-Radix Number Engine
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400/80">LIVE SYNC</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center font-mono text-[10px] pt-1">
                    <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[9px]">DEC (r=10)</span>
                      <span className="text-cyan-300 font-bold">255</span>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[9px]">BIN (r=2)</span>
                      <span className="text-teal-300 font-bold">11111111</span>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[9px]">OCT (r=8)</span>
                      <span className="text-indigo-300 font-bold">377</span>
                    </div>
                    <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                      <span className="text-slate-500 block text-[9px]">HEX (r=16)</span>
                      <span className="text-purple-300 font-bold">0xFF</span>
                    </div>
                  </div>
                </div>

                {/* Floating Highlights Strip */}
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hardware + AI Synergy</span>
                  </span>
                  <span className="font-mono text-cyan-400">Chandigarh University</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
