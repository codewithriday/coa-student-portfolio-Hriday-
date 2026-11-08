'use client';

import React from 'react';
import { Cpu, Zap, Database, ArrowRight, ArrowLeft, ArrowLeftRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface CpuCacheRamDiagramProps {
  className?: string;
  showCaption?: boolean;
}

export default function CpuCacheRamDiagram({ className = '', showCaption = true }: CpuCacheRamDiagramProps) {
  return (
    <div className={`p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md ${className}`}>
      
      {/* Top Header / Sequence Steps */}
      <div className="mb-6 pb-4 border-b border-slate-800/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Hardware Architecture Model
          </span>
          <span className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-lg border border-slate-700/60">
            Figure 1: CPU – Cache – RAM Organisation
          </span>
        </div>

        {/* 4 Execution Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs font-mono">
          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 flex items-start gap-2">
            <span className="w-5 h-5 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 font-bold flex items-center justify-center shrink-0 text-[11px]">1</span>
            <div>
              <div className="font-semibold text-slate-200">Request address</div>
              <div className="text-[10px] text-slate-400">CPU initiates access</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 flex items-start gap-2">
            <span className="w-5 h-5 rounded-md bg-amber-950 border border-amber-800 text-amber-400 font-bold flex items-center justify-center shrink-0 text-[11px]">2</span>
            <div>
              <div className="font-semibold text-slate-200">On miss, fetch block</div>
              <div className="text-[10px] text-slate-400">Query RAM for line</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 flex items-start gap-2">
            <span className="w-5 h-5 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-400 font-bold flex items-center justify-center shrink-0 text-[11px]">3</span>
            <div>
              <div className="font-semibold text-slate-200">Block copied to cache</div>
              <div className="text-[10px] text-slate-400">Spatial locality load</div>
            </div>
          </div>

          <div className="p-2 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 flex items-start gap-2">
            <span className="w-5 h-5 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold flex items-center justify-center shrink-0 text-[11px]">4</span>
            <div>
              <div className="font-semibold text-slate-200">Data returned</div>
              <div className="text-[10px] text-slate-400">Operand to registers</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Visual Datapath Diagram */}
      <div className="relative py-4">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-4 items-center">
          
          {/* Node 1: CPU */}
          <div className="lg:col-span-3 p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-cyan-500/50 shadow-lg shadow-cyan-950/30 flex flex-col items-center text-center relative group">
            <div className="w-12 h-12 rounded-xl bg-cyan-950/90 border border-cyan-800 text-cyan-400 flex items-center justify-center mb-3 shadow-inner">
              <Cpu className="w-6 h-6" />
            </div>
            <div className="text-base font-extrabold text-white tracking-wide">CPU</div>
            <div className="text-xs font-semibold text-cyan-400 mt-0.5">Processor Core</div>
            <div className="text-[11px] font-mono text-slate-400 mt-1 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
              (registers, ALU)
            </div>
            <div className="mt-3 text-[10px] text-slate-400">
              Fraction of a nanosecond cycle
            </div>
          </div>

          {/* Interconnect 1: CPU <-> Cache */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="w-full flex items-center justify-center relative">
              <div className="hidden lg:flex flex-col items-center gap-1 w-full">
                <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full relative">
                  <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-cyan-400"></div>
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-emerald-400"></div>
                </div>
                <div className="text-[10px] font-mono font-bold text-emerald-400 text-center whitespace-nowrap mt-1">
                  Fast Path (2 ns)
                </div>
                <div className="text-[9px] font-mono text-slate-400 text-center whitespace-nowrap">
                  Address / Data
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="lg:hidden flex items-center gap-2 text-xs font-mono text-emerald-400 py-1">
                <ArrowLeftRight className="w-4 h-4 text-emerald-400" />
                <span>Address / data (fast path: 2 ns)</span>
              </div>
            </div>
          </div>

          {/* Node 2: Cache Memory */}
          <div className="lg:col-span-3 p-5 rounded-2xl bg-gradient-to-b from-emerald-950/40 via-slate-900 to-slate-950 border-2 border-emerald-500/60 shadow-xl shadow-emerald-950/40 flex flex-col items-center text-center relative group">
            <div className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              85% Hit Ratio
            </div>
            <div className="w-12 h-12 rounded-xl bg-emerald-950/90 border border-emerald-800 text-emerald-400 flex items-center justify-center mb-3 shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <div className="text-base font-extrabold text-white tracking-wide">Cache Memory</div>
            <div className="text-xs font-semibold text-emerald-400 mt-0.5">Small &amp; Very Fast (SRAM)</div>
            <div className="text-[11px] font-mono text-emerald-300 mt-1 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800/60 font-bold">
              Hit time = 2 ns
            </div>
            <div className="mt-3 text-[10px] text-slate-400">
              850 / 1,000 accesses served directly
            </div>
          </div>

          {/* Interconnect 2: Cache <-> RAM */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center py-2 lg:py-0">
            <div className="w-full flex items-center justify-center relative">
              <div className="hidden lg:flex flex-col items-center gap-1 w-full">
                <div className="w-full h-1 bg-gradient-to-r from-emerald-400 to-amber-500 rounded-full relative">
                  <div className="absolute left-0 -top-1 w-2 h-2 rounded-full bg-emerald-400"></div>
                  <div className="absolute right-0 -top-1 w-2 h-2 rounded-full bg-amber-400"></div>
                </div>
                <div className="text-[10px] font-mono font-bold text-amber-400 text-center whitespace-nowrap mt-1">
                  Slow Path (+50 ns)
                </div>
                <div className="text-[9px] font-mono text-slate-400 text-center whitespace-nowrap">
                  Block Transfer
                </div>
              </div>

              {/* Mobile Arrow */}
              <div className="lg:hidden flex items-center gap-2 text-xs font-mono text-amber-400 py-1">
                <ArrowLeftRight className="w-4 h-4 text-amber-400" />
                <span>Block transfer (slow path: +50 ns)</span>
              </div>
            </div>
          </div>

          {/* Node 3: Main Memory (RAM) */}
          <div className="lg:col-span-3 p-5 rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-indigo-500/50 shadow-lg shadow-indigo-950/30 flex flex-col items-center text-center relative group">
            <div className="absolute -top-3 px-2.5 py-0.5 rounded-full bg-amber-950 border border-amber-700/80 text-amber-400 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
              15% Miss Rate
            </div>
            <div className="w-12 h-12 rounded-xl bg-indigo-950/90 border border-indigo-800 text-indigo-400 flex items-center justify-center mb-3 shadow-inner">
              <Database className="w-6 h-6" />
            </div>
            <div className="text-base font-extrabold text-white tracking-wide">Main Memory</div>
            <div className="text-xs font-semibold text-indigo-400 mt-0.5">(RAM) Large &amp; Slower</div>
            <div className="text-[11px] font-mono text-amber-300 mt-1 bg-amber-950/80 px-2.5 py-0.5 rounded border border-amber-800/60 font-bold">
              Miss penalty = 50 ns
            </div>
            <div className="mt-3 text-[10px] text-slate-400">
              Total miss cost: 2 + 50 = 52 ns
            </div>
          </div>

        </div>
      </div>

      {/* Explanatory Caption verbatim from PDF */}
      {showCaption && (
        <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
          <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
            Architectural Principle:
          </p>
          <p>
            The CPU sends every memory request to the cache first. If the data is there (a <strong className="text-emerald-400">hit</strong>), it returns to the CPU quickly in just <strong>2 ns</strong>. If not (a <strong className="text-amber-400">miss</strong>), the cache asks RAM for the block, stores a copy, and then passes the data to the CPU. The double-headed arrows show that information moves in both directions. <span className="text-cyan-300 font-medium">The CPU does not talk to RAM directly in this model.</span>
          </p>
        </div>
      )}

    </div>
  );
}

