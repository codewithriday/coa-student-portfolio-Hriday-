'use client';

import React, { useState } from 'react';
import { academicDocuments } from '../data/academicWorkData';
import AssignmentModal from './AssignmentModal';
import CaseStudyModal from './CaseStudyModal';
import { 
  GraduationCap, 
  FileText, 
  Download, 
  ExternalLink, 
  Eye, 
  Sparkles, 
  Cpu, 
  Zap, 
  Clock, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Server,
  ArrowRight
} from 'lucide-react';

export default function AcademicWork() {
  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [isCaseStudyModalOpen, setIsCaseStudyModalOpen] = useState(false);

  const doc1 = academicDocuments[0];
  const doc2 = academicDocuments[1];

  return (
    <section id="academic-work" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Invisible anchor for backward compatibility with case-studies link */}
      <div id="case-studies" className="absolute -top-20"></div>

      {/* Top Gradient Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-cyan-900/40">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Work &amp; Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic <span className="text-cyan-400">Work</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Official coursework, verified submissions, and technical case studies for Computer Organization and Architecture (25CST-238) at Chandigarh University.
          </p>
        </div>

        {/* Two Separate Document Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* =================================================================== */}
          {/* DOCUMENT ONE: ASSIGNMENT NO. 1 */}
          {/* =================================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-cyan-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400"></div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-950/80 border border-blue-800/80 text-blue-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                      {doc1.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {doc1.pageCount} Pages • {doc1.fileSize}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Code: <strong className="text-slate-300">{doc1.subjectCode}</strong>
                  </span>
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {doc1.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono mt-1">
                    <span>Author: <strong className="text-slate-200">{doc1.author}</strong></span>
                    <span>•</span>
                    <span className="text-cyan-400">{doc1.category}</span>
                  </div>
                </div>

                {/* Document Thumbnail / PDF Preview Mock */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <FileText className="w-4 h-4 text-cyan-400" />
                      <span className="font-semibold text-slate-200">Assignment-No-1.pdf</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                      Verified Document
                    </span>
                  </div>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    {doc1.highlights?.map((h, i) => (
                      <div key={i} className="p-2 rounded-xl bg-slate-900 border border-slate-800/60">
                        <span className="text-[10px] text-slate-400 block">{h.label}</span>
                        <span className="font-bold text-white text-xs">{h.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Mini Question Excerpt */}
                  <div className="text-[11px] text-slate-400 font-mono space-y-1 pt-1">
                    <div className="text-slate-300 truncate">Q1. What is Yotta? (Data centers &amp; cloud services)</div>
                    <div className="text-slate-300 truncate">Q6. Why is GPU faster than CPU? (Parallel processing)</div>
                    <div className="text-slate-300 truncate">Q10. CPU Organization: AMD Ryzen 5 (6C / 12T)</div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {doc1.description}
                </p>

                {/* Academic Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc1.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono hover:border-slate-700 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={doc1.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    title="Open Assignment No. 1 PDF in a new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Assignment</span>
                  </a>

                  <a
                    href={doc1.pdfUrl}
                    download={doc1.downloadFileName}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-slate-500"
                    title="Download Assignment No. 1 PDF"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsAssignmentModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-mono font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Interactive Overview (13 Questions &amp; Answers)</span>
                </button>
              </div>

            </div>

          </div>

          {/* =================================================================== */}
          {/* DOCUMENT TWO: CASE STUDY NO. 3 */}
          {/* =================================================================== */}
          <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-950 border border-slate-800 hover:border-emerald-500/50 shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
            
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-cyan-400 to-indigo-500"></div>

            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              
              <div className="space-y-4">
                {/* Meta Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                      {doc2.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                      {doc2.pageCount} Pages • {doc2.fileSize}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Code: <strong className="text-slate-300">{doc2.subjectCode}</strong>
                  </span>
                </div>

                {/* Title & Author */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white group-hover:text-emerald-300 transition-colors">
                    {doc2.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 font-mono mt-1">
                    <span>Author: <strong className="text-slate-200">{doc2.author}</strong></span>
                    <span>•</span>
                    <span className="text-emerald-400">{doc2.university}</span>
                    <span>•</span>
                    <span>{doc2.academicYear}</span>
                  </div>
                </div>

                {/* Document Thumbnail / Technical Metric Highlights Mock */}
                <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800/80 space-y-3 relative overflow-hidden">
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-slate-200">COA-Cache-Memory-Case-Study.pdf</span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                      Verified Case Study
                    </span>
                  </div>

                  {/* Highlights Grid with Specific Required Values */}
                  <div className="grid grid-cols-3 gap-2 text-center font-mono">
                    <div className="p-2.5 rounded-xl bg-emerald-950/30 border border-emerald-800/60">
                      <span className="text-[10px] text-emerald-400 block uppercase">Hit Ratio</span>
                      <span className="font-extrabold text-emerald-300 text-base">85%</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">850 / 1000</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-amber-950/30 border border-amber-800/60">
                      <span className="text-[10px] text-amber-400 block uppercase">Miss Ratio</span>
                      <span className="font-extrabold text-amber-300 text-base">15%</span>
                      <span className="text-[9px] text-slate-400 block mt-0.5">150 / 1000</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-cyan-950/40 border border-cyan-800/70">
                      <span className="text-[10px] text-cyan-300 block uppercase">AMAT</span>
                      <span className="font-extrabold text-white text-base">9.5 ns</span>
                      <span className="text-[9px] text-cyan-400 block mt-0.5">vs 52 ns Miss</span>
                    </div>
                  </div>

                  {/* Mini Mathematical Proof */}
                  <div className="text-[11px] text-slate-400 font-mono text-center bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                    <span className="text-cyan-300 font-semibold">AMAT Formula:</span> 2 ns + (0.15 × 50 ns) = <strong className="text-emerald-400">9.5 ns</strong>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {doc2.description}
                </p>

                {/* Academic Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {doc2.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-950 text-slate-300 border border-slate-800 text-[10px] font-mono hover:border-slate-700 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={doc2.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    title="Open Case Study No. 3 PDF in a new tab"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View Case Study</span>
                  </a>

                  <a
                    href={doc2.pdfUrl}
                    download={doc2.downloadFileName}
                    className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer hover:border-slate-500"
                    title="Download Case Study No. 3 PDF"
                  >
                    <Download className="w-4 h-4 text-emerald-400" />
                    <span>Download</span>
                  </a>
                </div>

                <button
                  onClick={() => setIsCaseStudyModalOpen(true)}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-slate-300 hover:text-white text-xs font-mono font-semibold border border-slate-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Deep Dive Analysis &amp; CPU-Cache-RAM Diagram</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Assignment 1 Full Screen Reader Modal */}
      <AssignmentModal 
        isOpen={isAssignmentModalOpen} 
        onClose={() => setIsAssignmentModalOpen(false)} 
      />

      {/* Case Study 3 Full Screen Reader Modal */}
      <CaseStudyModal 
        isOpen={isCaseStudyModalOpen} 
        onClose={() => setIsCaseStudyModalOpen(false)} 
      />

    </section>
  );
}

