import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { coaCaseStudy } from '../../data/caseStudiesData';
import CpuCacheRamDiagram from '../../components/CpuCacheRamDiagram';
import { 
  ArrowLeft, 
  Download, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Layers, 
  FileText,
  Sparkles,
  Info
} from 'lucide-react';

export const metadata: Metadata = {
  title: "Cache Memory Performance Analysis | COA Case Study No. 3 | Hriday Kataria",
  description: "Computer Organization and Architecture Case Study No. 3: Cache Memory Performance Analysis by Hriday Kataria, Chandigarh University. Hit ratio, miss ratio, locality of reference, AMAT calculation, and CPU-Cache-RAM architecture.",
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-800">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href={coaCaseStudy.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-slate-700"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Original PDF</span>
            </a>

            <a
              href={coaCaseStudy.pdfUrl}
              download={coaCaseStudy.pdfFileName}
              className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-cyan-900/40"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

        {/* Academic Header / Meta Banner */}
        <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-400 text-xs font-mono font-bold uppercase">
                  {coaCaseStudy.university}
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  {coaCaseStudy.campus}
                </span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {coaCaseStudy.subject} • Assignment: <span className="text-white font-semibold">{coaCaseStudy.assignmentNumber}</span> • Code: <span className="text-cyan-300">{coaCaseStudy.subjectCode}</span>
              </div>
            </div>

            <div className="text-left md:text-right text-xs font-mono text-slate-400">
              <div>Academic Year: <strong className="text-slate-200">{coaCaseStudy.academicYear}</strong></div>
              <div>Submitted To: <strong className="text-cyan-300">{coaCaseStudy.facultyGuide}</strong></div>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1">
              COA Academic Case Study No. 3
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {coaCaseStudy.title}
            </h1>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs font-mono">
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase block">Student Name</span>
              <span className="font-bold text-white">{coaCaseStudy.studentName}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase block">UID / Roll No</span>
              <span className="font-bold text-cyan-300">{coaCaseStudy.rollNumber}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase block">Branch &amp; Course</span>
              <span className="font-bold text-white">{coaCaseStudy.branch}</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800">
              <span className="text-slate-500 text-[10px] uppercase block">Semester &amp; Section</span>
              <span className="font-bold text-white">{coaCaseStudy.semester} ({coaCaseStudy.section})</span>
            </div>
          </div>
        </div>

        {/* Quick Numerical Results */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1 font-mono">Cache Hits</div>
            <div className="text-3xl font-extrabold text-emerald-400 font-mono">850</div>
            <div className="text-xs text-emerald-500/90 font-mono mt-1">85% Hit Ratio (0.85)</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1 font-mono">Cache Misses</div>
            <div className="text-3xl font-extrabold text-amber-400 font-mono">150</div>
            <div className="text-xs text-amber-500/90 font-mono mt-1">15% Miss Ratio (0.15)</div>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 text-center">
            <div className="text-xs text-slate-400 mb-1 font-mono">Cache Hit Time</div>
            <div className="text-3xl font-extrabold text-cyan-400 font-mono">2 ns</div>
            <div className="text-xs text-slate-400 font-mono mt-1">Miss Penalty: 50 ns</div>
          </div>
          <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-800/80 text-center">
            <div className="text-xs text-cyan-300 mb-1 font-mono">Calculated AMAT</div>
            <div className="text-3xl font-extrabold text-white font-mono">9.5 ns</div>
            <div className="text-xs text-cyan-400 font-mono mt-1">2 ns + 7.5 ns</div>
          </div>
        </div>

        {/* 1. Introduction */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">1</span>
            <h2 className="text-xl font-bold text-white">Introduction</h2>
          </div>
          <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <p>
              Memory is the part of a computer that stores programs and data. The CPU keeps asking memory for instructions and operands, so the speed of memory directly affects the speed of the whole system. A modern CPU can work in a fraction of a nanosecond, but main memory (RAM) is much slower. If the CPU had to wait for RAM on every access, it would spend most of its time idle.
            </p>
            <p>
              Cache memory solves this problem. It is a small and very fast memory that keeps copies of the data and instructions the CPU is likely to need soon. It is placed between the CPU and RAM so that most requests can be answered quickly from the cache, and only a few have to go to the slower RAM. Because of this, the average time taken to read data falls sharply and the processor performs better.
            </p>
          </div>
        </section>

        {/* 2. Scenario and Problem Statement */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">2</span>
            <h2 className="text-xl font-bold text-white">Scenario and Problem Statement</h2>
          </div>
          <div className="space-y-4 bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
            <p className="text-slate-300">
              A processor makes 1,000 memory accesses. Of these, 850 are found in the cache (hits) and 150 are not (misses). The values given in the assignment are shown below.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-700 text-slate-300">
                    <th className="py-2.5 px-4 font-bold">Parameter</th>
                    <th className="py-2.5 px-4 font-bold">Value</th>
                    <th className="py-2.5 px-4 font-bold">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  <tr>
                    <td className="py-2.5 px-4 text-white">Total memory accesses</td>
                    <td className="py-2.5 px-4 text-cyan-300 font-bold">1,000</td>
                    <td className="py-2.5 px-4 text-slate-400">accesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-white">Cache hits</td>
                    <td className="py-2.5 px-4 text-emerald-400 font-bold">850</td>
                    <td className="py-2.5 px-4 text-slate-400">accesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-white">Cache misses</td>
                    <td className="py-2.5 px-4 text-amber-400 font-bold">150</td>
                    <td className="py-2.5 px-4 text-slate-400">accesses</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-white">Cache hit time</td>
                    <td className="py-2.5 px-4 text-cyan-300 font-bold">2</td>
                    <td className="py-2.5 px-4 text-slate-400">ns</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 text-white">Additional miss penalty</td>
                    <td className="py-2.5 px-4 text-amber-400 font-bold">50</td>
                    <td className="py-2.5 px-4 text-slate-400">ns</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-800/40 text-xs text-slate-300">
              <strong className="text-cyan-300 font-semibold">Problem statement in my own words:</strong> We have to find out how well the cache is working by calculating its hit ratio and miss ratio. Then we have to find the average time needed for one memory access (AMAT) and show how this time depends on the hit ratio.
            </div>
          </div>
        </section>

        {/* 3. Objectives */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">3</span>
            <h2 className="text-xl font-bold text-white">Objectives of the Case Study</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "To understand what cache memory is and where it sits in the memory hierarchy.",
              "To distinguish between cache hits and cache misses.",
              "To calculate the cache hit ratio and miss ratio from the given data.",
              "To calculate Average Memory Access Time (AMAT) using the given formula.",
              "To understand locality of reference and the link between hit ratio and AMAT."
            ].map((obj, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{obj}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Definition of Cache Memory */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">4</span>
            <h2 className="text-xl font-bold text-white">Definition &amp; Characteristics of Cache Memory</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold font-mono text-cyan-400 uppercase">Definition</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cache memory is a small, high-speed memory that stores copies of frequently used data and instructions from main memory so that the CPU can get them quickly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold font-mono text-cyan-400 uppercase">Purpose</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Its job is to reduce the speed gap between the fast CPU and the slow RAM, so the CPU waits less for data.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold font-mono text-cyan-400 uppercase">Location in Memory Hierarchy</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                In the memory hierarchy, the order from fastest to slowest is <span className="text-white font-semibold">registers, cache, main memory, and secondary storage</span>. Cache sits just below the registers, between the CPU and RAM. Many processors have more than one level (L1, L2, L3), with L1 being the smallest and fastest.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="text-xs font-bold font-mono text-cyan-400 uppercase">Architectural Importance</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Cache is costly and small, but because programs reuse data, even a small cache answers most requests. This gives performance close to a fast memory at the cost of a much cheaper one.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Difference Between Hits and Misses */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">5</span>
            <h2 className="text-xl font-bold text-white">Distinguishing Cache Hits vs Cache Misses</h2>
          </div>
          
          <p className="text-xs text-slate-300">
            A <strong className="text-emerald-400">cache hit</strong> happens when the data the CPU asks for is already present in the cache. A <strong className="text-amber-400">cache miss</strong> happens when it is not present, so the data must be brought from RAM.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-slate-300 font-mono">
                  <th className="py-3 px-4 font-bold w-1/4">Point</th>
                  <th className="py-3 px-4 font-bold text-emerald-400 w-3/8 bg-emerald-950/20">Cache Hit</th>
                  <th className="py-3 px-4 font-bold text-amber-400 w-3/8 bg-amber-950/20">Cache Miss</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white font-mono">Meaning</td>
                  <td className="py-3 px-4 text-slate-300">Requested data is found in the cache.</td>
                  <td className="py-3 px-4 text-slate-300">Requested data is not in the cache.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white font-mono">What happens</td>
                  <td className="py-3 px-4 text-slate-300">Data goes to the CPU straight from the cache.</td>
                  <td className="py-3 px-4 text-slate-300">The block is fetched from RAM, copied into the cache, and then given to the CPU.</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white font-mono">Performance impact</td>
                  <td className="py-3 px-4 text-emerald-300 font-mono font-medium">Fast. Takes only the hit time (2 ns here).</td>
                  <td className="py-3 px-4 text-amber-300 font-mono font-medium">Slow. Takes the hit time plus the miss penalty (2 + 50 = 52 ns here).</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white font-mono">Simple example</td>
                  <td className="py-3 px-4 text-slate-300 italic">Reading the same array element again inside a loop.</td>
                  <td className="py-3 px-4 text-slate-300 italic">Reading a variable for the very first time.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 6 & 7. Hit Ratio & Miss Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">6</span>
              <h3 className="text-lg font-bold text-white">Cache Hit Ratio Calculation</h3>
            </div>
            
            <p className="text-xs text-slate-300">
              The hit ratio is the fraction of memory accesses that are found in the cache.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs border border-slate-800 text-center text-emerald-300 font-bold">
              Hit Ratio = Number of Cache Hits ÷ Total Memory Accesses
            </div>

            <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div>Given: Cache hits = 850, Total accesses = 1,000</div>
              <div className="pt-1">Hit Ratio = 850 ÷ 1,000</div>
              <div>Hit Ratio = <strong className="text-emerald-400">0.85</strong></div>
              <div className="pt-2 text-emerald-400 font-bold border-t border-slate-800 mt-2">
                Result: Hit ratio = 0.85, or 85%
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">7</span>
              <h3 className="text-lg font-bold text-white">Cache Miss Ratio Calculation</h3>
            </div>

            <p className="text-xs text-slate-300">
              The miss ratio is the fraction of accesses that are not found in the cache.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs border border-slate-800 text-center text-amber-300 font-bold">
              Miss Ratio = Number of Cache Misses ÷ Total Memory Accesses
            </div>

            <div className="space-y-1 text-xs font-mono text-slate-300 bg-slate-950/60 p-4 rounded-xl border border-slate-800">
              <div>Given: Cache misses = 150, Total accesses = 1,000</div>
              <div className="pt-1">Miss Ratio = 150 ÷ 1,000</div>
              <div>Miss Ratio = <strong className="text-amber-400">0.15</strong></div>
              <div className="pt-2 text-amber-400 font-bold border-t border-slate-800 mt-2">
                Result: Miss ratio = 0.15, or 15%
              </div>
            </div>
          </div>
        </div>

        {/* Mathematical Relationship */}
        <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/50 text-xs text-slate-300 flex items-start gap-3">
          <Info className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-cyan-300 font-semibold">Mathematical Relationship:</strong> Every access is either a hit or a miss, so the two ratios always add up to 1. Here, <code className="text-cyan-200">0.85 + 0.15 = 1</code>. Therefore, <code className="text-cyan-200">Miss Ratio = 1 − Hit Ratio</code>, and <code className="text-cyan-200">Hit Ratio = 1 − Miss Ratio</code>.
          </div>
        </div>

        {/* 8. Locality of Reference */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">8</span>
            <h2 className="text-xl font-bold text-white">Why Is Locality of Reference Important?</h2>
          </div>
          
          <p className="text-xs text-slate-300 leading-relaxed">
            Locality of reference means that programs tend to access the same data, or data close to it, again and again over a short time. A cache works well only because of this behaviour. There are two types:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white">Temporal Locality</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Data used recently is likely to be used again soon.
              </p>
              <div className="text-xs font-mono text-cyan-300/90 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                Example: A loop counter, or a variable inside a loop, is read in every iteration.
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-bold text-white">Spatial Locality</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Data near a recently used address is likely to be used soon.
              </p>
              <div className="text-xs font-mono text-cyan-300/90 bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                Example: When a program reads an array one element after another, the next elements are stored next to the current one.
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            Because of temporal locality, the cache keeps recently used data. Because of spatial locality, a cache copies a whole block of nearby data on one miss, so the next accesses become hits. Good locality therefore gives a high hit ratio and a lower AMAT. Without locality, the cache would miss often and would help very little.
          </p>
        </section>

        {/* 9. AMAT Calculation */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">9</span>
            <h2 className="text-xl font-bold text-white">Average Memory Access Time (AMAT) Calculation</h2>
          </div>

          <p className="text-xs text-slate-300">
            AMAT is the average time the CPU needs for one memory access, counting both hits and misses. The formula given in the assignment is:
          </p>

          <div className="p-4 rounded-2xl bg-slate-900 border-2 border-cyan-500/50 font-mono text-center text-cyan-300 font-bold text-sm sm:text-base">
            AMAT = Hit Time + (Miss Rate × Miss Penalty)
          </div>

          <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 space-y-4">
            <div className="text-xs font-mono text-slate-400 pb-2 border-b border-slate-800">
              Given: Hit time = <strong className="text-white">2 ns</strong>, Miss rate = <strong className="text-amber-400">0.15</strong> (from Q14), Miss penalty = <strong className="text-white">50 ns</strong>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-semibold">Step 1: Write the formula</span>
                <span className="text-cyan-300 font-bold mt-1 sm:mt-0">AMAT = Hit Time + (Miss Rate × Miss Penalty)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-semibold">Step 2: Substitute the values</span>
                <span className="text-cyan-300 font-bold mt-1 sm:mt-0">AMAT = 2 ns + (0.15 × 50 ns)</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <span className="text-slate-400 font-semibold">Step 3: Multiply first</span>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">The miss rate tells us that on average each access carries 15% of the 50 ns penalty.</p>
                </div>
                <span className="text-amber-300 font-bold mt-1 sm:mt-0">0.15 × 50 ns = 7.5 ns</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-slate-400 font-semibold">Step 4: Add the hit time</span>
                <span className="text-emerald-300 font-bold mt-1 sm:mt-0">AMAT = 2 ns + 7.5 ns = 9.5 ns</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/40 to-slate-950 border border-emerald-500/50 flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">Final Result</span>
              <span className="text-xl sm:text-2xl font-extrabold font-mono text-emerald-400">AMAT = 9.5 ns</span>
            </div>

            <div className="pt-2 space-y-2">
              <div className="text-xs font-bold text-white uppercase font-mono">Difference Between The Three Terms:</div>
              <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                <li><strong className="text-cyan-300">Hit time (2 ns):</strong> The time to access the cache. It is spent on every access, whether hit or miss.</li>
                <li><strong className="text-amber-300">Additional miss penalty (50 ns):</strong> The extra time spent only on a miss to fetch data from RAM. It is added on top of the hit time.</li>
                <li><strong className="text-emerald-300">AMAT (9.5 ns):</strong> The overall average per access. It is the hit time plus the penalty spread over all accesses (7.5 ns on average).</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 10. CPU-Cache-RAM Diagram */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">10</span>
            <h2 className="text-xl font-bold text-white">CPU–Cache–RAM Architecture Diagram</h2>
          </div>
          <CpuCacheRamDiagram />
        </section>

        {/* 11. Three Important Observations */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">11</span>
            <h2 className="text-xl font-bold text-white">Three Important Observations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-950 border border-emerald-800 text-emerald-400 font-bold flex items-center justify-center text-xs">1</div>
                <h4 className="text-sm font-bold text-white">The cache is working effectively</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A hit ratio of 0.85 means 85 out of every 100 accesses are served by the cache in only 2 ns. Only a small share of requests have to go to the slow RAM.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-amber-950 border border-amber-800 text-amber-400 font-bold flex items-center justify-center text-xs">2</div>
                <h4 className="text-sm font-bold text-white">Misses raise the average access time</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A hit costs 2 ns, but a miss costs 52 ns. The 15% misses add 7.5 ns to the average, so AMAT becomes 9.5 ns instead of 2 ns. Although misses are fewer in number, each one is very costly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-cyan-950 border border-cyan-800 text-cyan-400 font-bold flex items-center justify-center text-xs">3</div>
                <h4 className="text-sm font-bold text-white">Better locality improves performance</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Programs with good temporal and spatial locality get more hits, which reduces the miss rate and lowers AMAT. So writing programs that reuse data, and designing caches that exploit this, helps the CPU run faster.
              </p>
            </div>
          </div>
        </section>

        {/* 12. Relationship Between Hit Ratio and AMAT */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">12</span>
            <h2 className="text-xl font-bold text-white">Relationship Between Hit Ratio and Average Access Time</h2>
          </div>

          <div className="space-y-3 text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-5 rounded-2xl border border-slate-800">
            <p>
              Hit ratio and AMAT move in opposite directions. Since <code className="text-cyan-300 font-mono">Miss Rate = 1 − Hit Ratio</code>, the AMAT formula can be written as:
            </p>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-center text-cyan-300 font-bold">
              AMAT = Hit Time + (1 − Hit Ratio) × Miss Penalty
            </div>
            <p>
              A higher hit ratio makes the term (1 − Hit Ratio) smaller, so less penalty is added and AMAT goes down. A higher miss ratio does the opposite: more accesses pay the 50 ns penalty, so AMAT goes up.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-slate-300">
                  <th className="py-3 px-4 font-bold">Hit Ratio</th>
                  <th className="py-3 px-4 font-bold">Miss Ratio</th>
                  <th className="py-3 px-4 font-bold">Penalty added (ns)</th>
                  <th className="py-3 px-4 font-bold">AMAT (ns)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                <tr>
                  <td className="py-3 px-4 text-slate-300">70% (0.70)</td>
                  <td className="py-3 px-4 text-slate-400">0.30</td>
                  <td className="py-3 px-4 text-slate-300">0.30 × 50 = 15.0</td>
                  <td className="py-3 px-4 text-amber-400 font-bold">2 + 15.0 = 17.0 ns</td>
                </tr>
                <tr className="bg-cyan-950/30 border-l-4 border-l-cyan-400">
                  <td className="py-3 px-4 text-cyan-300 font-bold">85% (0.85) – Given Case Study</td>
                  <td className="py-3 px-4 text-cyan-300 font-bold">0.15</td>
                  <td className="py-3 px-4 text-cyan-200">0.15 × 50 = 7.5</td>
                  <td className="py-3 px-4 text-emerald-400 font-extrabold text-sm">2 + 7.5 = 9.5 ns</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-slate-300">95% (0.95)</td>
                  <td className="py-3 px-4 text-slate-400">0.05</td>
                  <td className="py-3 px-4 text-slate-300">0.05 × 50 = 2.5</td>
                  <td className="py-3 px-4 text-emerald-400 font-bold">2 + 2.5 = 4.5 ns</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-4 rounded-xl border border-slate-800">
            The table shows that when the hit ratio rises from 70% to 95%, AMAT falls from 17.0 ns to 4.5 ns. This is why designers try to raise the hit ratio. In the given scenario, the 85% hit ratio gives an AMAT of 9.5 ns, which is much closer to the cache speed (2 ns) than to the RAM-miss cost (52 ns).
          </p>
        </section>

        {/* 13. Conclusion */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">13</span>
            <h2 className="text-xl font-bold text-white">Conclusion</h2>
          </div>
          <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-6 rounded-3xl border border-slate-800">
            <p>
              This case study showed how to judge the performance of a cache using simple calculations. From 850 hits out of 1,000 accesses, the hit ratio is 0.85 (85%) and the miss ratio is 0.15 (15%). Using the formula <code className="text-cyan-300 font-mono">AMAT = Hit Time + (Miss Rate × Miss Penalty)</code>, the average memory access time comes to <code className="text-emerald-400 font-mono">2 + (0.15 × 50) = 9.5 ns</code>.
            </p>
            <p>
              The result shows why cache memory is so important. It is small, yet it lets the CPU avoid the slow RAM in most accesses, because programs follow temporal and spatial locality. Even a small number of misses affects the average time, since each miss is expensive. Therefore, the hit and miss ratios are the key measures of cache quality. A higher hit ratio means a lower AMAT, less waiting for the CPU, and better overall processor performance.
            </p>
          </div>
        </section>

        {/* 14. References */}
        <section className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">14</span>
            <h2 className="text-xl font-bold text-white">References</h2>
          </div>
          <div className="space-y-2 bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs">
            {coaCaseStudy.references.map((ref) => (
              <div key={ref.id} className="flex items-start gap-2.5 text-slate-300">
                <span className="font-mono text-cyan-400 shrink-0 font-bold">[{ref.id}]</span>
                <span>
                  <strong>{ref.authors}</strong>, <em>{ref.title}</em>, {ref.publisher}.
                </span>
              </div>
            ))}
            <div className="text-[11px] text-slate-400 italic pt-2 border-t border-slate-800/60 mt-3 font-mono">
              Note: Editions and years are not listed. Please add them from the copy you actually refer to. The problem data are taken from the assignment PDF (Case Study 3).
            </div>
          </div>
        </section>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/#case-studies"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Portfolio Homepage</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href={coaCaseStudy.pdfUrl}
              download={coaCaseStudy.pdfFileName}
              className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-2 transition-all shadow-md shadow-cyan-900/40"
            >
              <Download className="w-4 h-4" />
              <span>Download Original PDF</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

