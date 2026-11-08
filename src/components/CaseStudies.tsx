'use client';

import React, { useState } from 'react';
import { coaCaseStudy } from '../data/caseStudiesData';
import CaseStudyModal from './CaseStudyModal';
import CpuCacheRamDiagram from './CpuCacheRamDiagram';
import { 
  BookMarked, 
  Eye, 
  Download, 
  ExternalLink, 
  Cpu, 
  Sparkles, 
  Zap, 
  CheckCircle2, 
  Calculator, 
  TrendingDown, 
  FileText,
  Clock,
  Layers,
  Award
} from 'lucide-react';

export default function CaseStudies() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="case-studies" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Background Separator Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-cyan-900/40">
            <BookMarked className="w-3.5 h-3.5" />
            <span>Academic Research &amp; Analysis</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Case <span className="text-cyan-400">Studies</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Rigorous Computer Organization &amp; Architecture investigative studies, hardware mathematical modeling, and experimental performance analysis.
          </p>
        </div>

        {/* Featured Case Study Hero Card */}
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 shadow-2xl overflow-hidden relative">
          
          {/* Top Decorative Gradient Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-500"></div>

          <div className="p-6 sm:p-10 space-y-8">
            
            {/* Header Meta & Badges */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                    {coaCaseStudy.assignmentNumber}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-[11px] font-mono">
                    Subject Code: {coaCaseStudy.subjectCode}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-950 border border-emerald-800/60 text-emerald-400 text-[11px] font-mono">
                    Semester 3 (601-A)
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {coaCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  {coaCaseStudy.university} • {coaCaseStudy.course} • Guided by {coaCaseStudy.facultyGuide}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="px-5 py-3 rounded-2xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-600/30 transition-all duration-200 hover:scale-105 flex items-center gap-2 cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  <span>Read Case Study</span>
                </button>

                <a
                  href={coaCaseStudy.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all duration-200 hover:border-slate-500 flex items-center gap-2 cursor-pointer"
                  title="View original 6-page submission in browser"
                >
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
                  <span>View PDF</span>
                </a>

                <a
                  href={coaCaseStudy.pdfUrl}
                  download={coaCaseStudy.pdfFileName}
                  className="px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all duration-200 hover:border-slate-500 flex items-center gap-2 cursor-pointer"
                  title="Download the official 6-page PDF"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </div>
            </div>

            {/* Synopsis & Key Findings */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Problem & Metrics */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase font-mono tracking-wider mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Executive Summary &amp; Scenario</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    A benchmark analysis of cache memory efficiency under <strong>1,000 memory access cycles</strong>. Examines hardware locality of reference, mathematical derivation of Cache Hit/Miss ratios, and Average Memory Access Time (AMAT) impact.
                  </p>
                </div>

                {/* Benchmark Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[10px] uppercase font-mono text-slate-400">Total Accesses</div>
                    <div className="text-xl font-extrabold text-white font-mono mt-0.5">1,000</div>
                    <div className="text-[10px] text-slate-400 font-mono">100% Cycles</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-800/60">
                    <div className="text-[10px] uppercase font-mono text-emerald-400">Cache Hits</div>
                    <div className="text-xl font-extrabold text-emerald-300 font-mono mt-0.5">850</div>
                    <div className="text-[10px] text-emerald-400 font-mono font-bold">85% Hit Ratio</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-800/60">
                    <div className="text-[10px] uppercase font-mono text-amber-400">Cache Misses</div>
                    <div className="text-xl font-extrabold text-amber-300 font-mono mt-0.5">150</div>
                    <div className="text-[10px] text-amber-400 font-mono font-bold">15% Miss Ratio</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-800/80">
                    <div className="text-[10px] uppercase font-mono text-cyan-300">AMAT Result</div>
                    <div className="text-xl font-extrabold text-white font-mono mt-0.5">9.5 ns</div>
                    <div className="text-[10px] text-cyan-400 font-mono font-bold">vs 52 ns Miss</div>
                  </div>
                </div>

                {/* AMAT Formula Box */}
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                  <div className="text-slate-400 uppercase text-[10px] tracking-wider font-bold">
                    Governing Equation &amp; Calculation:
                  </div>
                  <div className="text-cyan-300 font-bold sm:text-sm">
                    AMAT = Hit Time + (Miss Rate × Miss Penalty)
                  </div>
                  <div className="text-slate-300 text-[11px] pt-1">
                    AMAT = 2 ns + (0.15 × 50 ns) = 2 ns + 7.5 ns = <strong className="text-emerald-400 font-bold">9.5 ns</strong>
                  </div>
                </div>

                {/* Key Insights List */}
                <div className="space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                    Key Architectural Takeaways:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="font-bold text-white block mb-0.5">1. High Efficiency</span>
                      85% of requests served in only 2 ns directly from SRAM cache.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="font-bold text-white block mb-0.5">2. Miss Impact</span>
                      15% misses add 7.5 ns penalty, shifting average from 2 ns to 9.5 ns.
                    </div>
                    <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80">
                      <span className="font-bold text-white block mb-0.5">3. Locality Value</span>
                      Temporal and spatial program locality are vital to sustain low AMAT.
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Interactive Architecture Diagram Preview */}
              <div className="lg:col-span-5 space-y-4">
                <CpuCacheRamDiagram showCaption={false} />

                {/* Hit Rate vs AMAT Impact Summary Table */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-white uppercase tracking-wider">Hit Ratio vs AMAT Scaling</span>
                    <span className="text-[10px] text-cyan-400 font-semibold">Inverse Relationship</span>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[11px] font-mono">
                      <thead>
                        <tr className="text-slate-400 border-b border-slate-800 pb-1">
                          <th className="py-1">Hit Rate</th>
                          <th className="py-1">Miss Rate</th>
                          <th className="py-1">Penalty</th>
                          <th className="py-1 text-right">AMAT</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-900 text-slate-300">
                        <tr>
                          <td className="py-1.5">70%</td>
                          <td className="py-1.5 text-slate-400">0.30</td>
                          <td className="py-1.5">15.0 ns</td>
                          <td className="py-1.5 text-right text-amber-400 font-bold">17.0 ns</td>
                        </tr>
                        <tr className="bg-cyan-950/30 font-bold text-cyan-300">
                          <td className="py-1.5">85% (Given)</td>
                          <td className="py-1.5">0.15</td>
                          <td className="py-1.5">7.5 ns</td>
                          <td className="py-1.5 text-right text-emerald-400">9.5 ns</td>
                        </tr>
                        <tr>
                          <td className="py-1.5">95%</td>
                          <td className="py-1.5 text-slate-400">0.05</td>
                          <td className="py-1.5">2.5 ns</td>
                          <td className="py-1.5 text-right text-emerald-400 font-bold">4.5 ns</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-[10px] text-slate-400 italic">
                    When hit ratio improves from 70% to 95%, AMAT plummets from 17.0 ns to 4.5 ns.
                  </p>
                </div>

                {/* Read Full Case Study CTA */}
                <div className="text-center pt-2">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-cyan-300 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <BookMarked className="w-4 h-4 text-cyan-400" />
                    <span>Read Complete 14-Section Document &amp; Proofs</span>
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Full Screen Reading Modal */}
      <CaseStudyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  );
}

