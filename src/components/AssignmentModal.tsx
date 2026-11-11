'use client';

import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  BookOpen, 
  Cpu, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  Server, 
  GraduationCap, 
  Award, 
  Tv, 
  Microchip,
  Activity,
  HardDrive
} from 'lucide-react';

interface AssignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AssignmentModal({ isOpen, onClose }: AssignmentModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Main Modal Card */}
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10 max-h-[94vh] flex flex-col my-auto">
        
        {/* Top Control Bar */}
        <div className="px-5 sm:px-8 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-cyan-950 border border-cyan-800/80 text-cyan-400 flex items-center justify-center shadow-sm">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-white tracking-wide">
                  COA Assignment No. 1
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                  25CST-238
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                Computer Organization and Architecture • Hriday Kataria (25BAI10046)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:flex px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>

            <a
              href="/academic-work/Assignment-No-1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-slate-700 hover:border-slate-600"
              title="Open the original 3-page assignment PDF in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">View PDF</span>
            </a>

            <a
              href="/academic-work/Assignment-No-1.pdf"
              download="Assignment-No-1.pdf"
              className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-cyan-900/30 cursor-pointer"
              title="Download original assignment PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content Sheet */}
        <div className="p-6 sm:p-10 space-y-10 overflow-y-auto bg-slate-900 text-slate-300 print:bg-white print:text-black print:p-0 text-sm">
          
          {/* Header Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800 space-y-6 relative overflow-hidden print:border-black print:bg-white">
            <div className="border-b border-slate-800/80 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-800/80 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                    Chandigarh University
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    Gharuan, Mohali, Punjab
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  Computer Organization and Architecture • Assignment: <strong className="text-white font-semibold">Assignment 1</strong> • Code: <span className="text-cyan-300">25CST-238</span>
                </div>
              </div>

              <div className="text-left md:text-right text-xs font-mono text-slate-400">
                <div>Academic Year: <strong className="text-slate-200">2026–27</strong></div>
                <div>Author: <strong className="text-cyan-300">Hriday Kataria (25BAI10046)</strong></div>
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold mb-1">
                Academic Assignment No. 1
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Computer Organization and Architecture – Assignment 1
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Comprehensive study covering modern cloud data centers, e-learning initiatives, the Turing Award, parallel architectures, processor organization, concurrency hazards, and ethical AI.
              </p>
            </div>
          </div>

          {/* 1. What is Yotta? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">1</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">What is Yotta?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                <strong>Yotta</strong> is an Indian tech company that provides cloud computing solutions and data center services.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs font-bold text-cyan-400 uppercase font-mono mb-2">Yotta Features:</div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
                    <li>Cloud computing services</li>
                    <li>Data storage security</li>
                    <li>Lower energy consumption in data centers</li>
                    <li>Disaster recovery options</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="text-xs font-bold text-emerald-400 uppercase font-mono mb-2">Uses &amp; Domains:</div>
                  <ul className="space-y-1.5 list-disc list-inside text-xs text-slate-300">
                    <li>Artificial Intelligence (AI)</li>
                    <li>Healthcare systems</li>
                    <li>Banking and financial services</li>
                    <li>Public services &amp; e-Governance</li>
                    <li>Education and advanced research</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 2. What is NPTEL? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">2</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">What is NPTEL?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                <strong>NPTEL (National Programme on Technology Enhanced Learning)</strong> is an initiative funded by the Ministry of Education, Government of India, to offer online courses and certifications in different fields.
              </p>
              <p>
                It provides free online classes, video lectures recorded by IIT professors, and certificates if you pass the final exam.
              </p>
              <p>
                It helps spread tech awareness, supports us during internships and placements, offers recognized industry certificates, and lets us learn whenever and wherever we want. Overall, NPTEL is a great platform for students to upgrade their skills and learn straight from top Indian institutions.
              </p>
            </div>
          </section>

          {/* 3. Who won Turing Award recently? What is the Turing Award? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">3</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Who won Turing Award recently? What is the Turing Award?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                The <strong>A.M. Turing Award</strong> is the highest honor in computer science, often referred to as the <em>"Nobel Prize of Computing."</em> It recognizes individuals who have made major contributions to computing and computer science.
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-cyan-800/50">
                <div className="text-cyan-300 font-bold mb-1">Recent Awardees (2026): Andrew G. Barto &amp; Richard S. Sutton</div>
                <p className="text-xs text-slate-300">
                  Given for their groundbreaking work in <strong>Reinforcement Learning</strong>, a key area of Artificial Intelligence. Their research helped establish how computers learn through experience—by trying different actions, receiving feedback through rewards or penalties, and improving over time. Their contributions have significantly impacted machine learning and decision-making systems, ranging from robotics to game-playing AI.
                </p>
              </div>
            </div>
          </section>

          {/* 4. What is Raspberry-Pi? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">4</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">What is Raspberry-Pi?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                <strong>Raspberry Pi</strong> is a tiny, affordable computer developed by the Raspberry Pi Foundation in the UK. Launched in 2012, it was designed to help students learn programming, computer science, and electronics through hands-on practice. Even though it's roughly the size of a credit card, it can handle basic daily tasks like browsing the web, streaming videos, coding programs, and running an operating system.
              </p>
              <p>
                It is widely used in projects related to robotics, IoT, home automation, AI, and embedded systems.
              </p>
            </div>
          </section>

          {/* 5. Parameters to decide programming language */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">5</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Parameters to Decide Programming Language for an Application</h2>
            </div>
            <div className="space-y-3 bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>Choosing the right programming language depends on a few key factors:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-cyan-300 font-bold block">Type of Application</span>
                  <span className="text-[10px] text-slate-400">Web, Mobile, AI, Systems</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-emerald-300 font-bold block">Speed &amp; Security</span>
                  <span className="text-[10px] text-slate-400">Execution latency, safety</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-indigo-300 font-bold block">Platform Support</span>
                  <span className="text-[10px] text-slate-400">OS, Hardware, Cloud</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <span className="text-amber-300 font-bold block">Ease of Development</span>
                  <span className="text-[10px] text-slate-400">Libraries, syntax, tools</span>
                </div>
              </div>
              <p className="text-xs text-slate-300 pt-1">
                For example, <strong>Python</strong> is commonly chosen for AI, <strong>Java</strong> is widely used for Android applications, and <strong>C++</strong> is popular for game development and system software. Picking the right language helps boost performance while saving development time.
              </p>
            </div>
          </section>

          {/* 6. Why is GPU faster than CPU? */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">6</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Why is GPU Faster than CPU?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                A <strong>Graphics Processing Unit (GPU)</strong> handles tasks involving lots of repetitive calculations much faster than a <strong>Central Processing Unit (CPU)</strong>. That's because a GPU contains hundreds or thousands of smaller cores working together at the same time—a process known as <em>parallel processing</em>.
              </p>
              <p>
                This makes it super efficient for graphics rendering, gaming, video editing, and AI tasks. On the other hand, a CPU has fewer but more powerful cores built to execute sequential tasks one by one. So while a CPU handles everyday general computing better, a GPU excels at heavy, parallel workloads.
              </p>
            </div>
          </section>

          {/* 7. Explain CPU, GPU, TPU */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">7</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Architectural Comparison: CPU vs. GPU vs. TPU</h2>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-slate-800">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-300 font-mono">
                    <th className="py-3 px-4 font-bold text-cyan-400 w-1/3">CPU</th>
                    <th className="py-3 px-4 font-bold text-emerald-400 w-1/3">GPU</th>
                    <th className="py-3 px-4 font-bold text-indigo-400 w-1/3">TPU</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/60 font-sans">
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Stands for Central Processing Unit.</td>
                    <td className="py-3 px-4 text-slate-300">Stands for Graphics Processing Unit.</td>
                    <td className="py-3 px-4 text-slate-300">Stands for Tensor Processing Unit.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Handles general computing tasks.</td>
                    <td className="py-3 px-4 text-slate-300">Focused on graphics and parallel processing tasks.</td>
                    <td className="py-3 px-4 text-slate-300">Specifically designed for Artificial Intelligence workloads.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Has a small number of powerful cores.</td>
                    <td className="py-3 px-4 text-slate-300">Has a large number of smaller processing cores.</td>
                    <td className="py-3 px-4 text-slate-300">Uses specialized AI processing units (Matrix Multiplication Units).</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-slate-300">Used for general daily tasks.</td>
                    <td className="py-3 px-4 text-slate-300">Used for graphics rendering and gaming.</td>
                    <td className="py-3 px-4 text-slate-300">Used for machine learning and deep learning applications.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. RAM Size, Word Size, Speed & OS */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">8</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">System Hardware Specifications (My Computer)</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] block">RAM Size</span>
                <span className="text-base font-bold text-white mt-0.5">8 GB</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] block">Word Size</span>
                <span className="text-base font-bold text-cyan-300 mt-0.5">64-bit</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] block">Clock Speed</span>
                <span className="text-base font-bold text-emerald-300 mt-0.5">2.10 GHz</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-slate-500 uppercase text-[10px] block">Operating System</span>
                <span className="text-base font-bold text-indigo-300 mt-0.5">Windows 64-bit</span>
              </div>
            </div>
          </section>

          {/* 9. Founders of Intel & AMD */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">9</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Founders of Intel and AMD</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-400 font-mono uppercase">Intel Corporation</div>
                <p className="text-slate-300">Founded by <strong>Gordon Moore</strong> and <strong>Robert Noyce</strong>.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800 space-y-1">
                <div className="font-bold text-emerald-400 font-mono uppercase">AMD (Advanced Micro Devices)</div>
                <p className="text-slate-300">Founded by <strong>Jerry Sanders</strong> along with seven co-founders.</p>
              </div>
            </div>
          </section>

          {/* 10. CPU Organization */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">10</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">CPU Organization of Processor Used in Laptop</h2>
            </div>
            <div className="space-y-2 bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                My laptop uses an <strong>AMD Ryzen 5 5500U</strong> processor.
              </p>
              <p>
                It has a <strong>64-bit x86-64 CPU organization</strong> with <strong>6 physical cores and 12 logical processors (threads)</strong>. It is a multicore and multithreaded processor, which helps the laptop run many tasks at the same time efficiently.
              </p>
            </div>
          </section>

          {/* 11. Stampeding Herd Problem */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">11</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">What is the Stampeding Herd Problem?</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                The <strong>Stampeding Herd Problem</strong> happens when multiple threads or processes are waiting for a single shared resource. The moment that resource opens up, all of them try to access it at the exact same time. This sudden surge overloads the CPU, causing heavy processing overhead and slowing down the system's performance.
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs italic text-slate-400">
                💡 <strong>Classroom Analogy:</strong> You can imagine it like students standing outside a classroom before a lecture. As soon as the teacher opens the door, everyone tries to rush in together. Instead of getting in smoothly, people get stuck in the doorway and everything becomes crowded and slow. The same thing happens in computers when many processes compete for one resource simultaneously.
              </div>
            </div>
          </section>

          {/* 12. India AI Impact Summit 2026 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">12</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Takeaways from India AI Impact Summit 2026</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {[
                "AI should benefit everyone, not just big corporate entities and developed countries.",
                "Responsible AI must remain fair, safe, transparent, and respectful of user privacy.",
                "India aims to lead globally in AI by building solutions and tech for the world.",
                "AI can transform sectors like healthcare, education, farming, finance, and public services.",
                "Addressing AI challenges requires global cooperation across countries.",
                "Investing in core infrastructure like compute power and data centers is essential for future growth.",
                "Upskilling students and working professionals in AI is necessary for upcoming job markets.",
                "Ethical guidelines and security measures need to be built into AI development right from the start.",
                "Startups and research centers play a crucial role in driving AI innovation and economic growth.",
                "AI shouldn't stay confined to research labs; it needs to solve real-world problems and improve everyday life."
              ].map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold shrink-0">•</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 13. The Imitation Game */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-800 text-cyan-400 font-mono font-bold flex items-center justify-center text-xs">13</span>
              <h2 className="text-lg sm:text-xl font-bold text-white">Insights from The Imitation Game (Alan Turing)</h2>
            </div>
            <div className="space-y-3 text-slate-300 leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800/80 text-xs sm:text-sm">
              <p>
                Watching <em>The Imitation Game</em> showed me that intelligence alone isn't enough—<strong>perseverance and patience matter just as much</strong>. The movie highlights how Alan Turing relied on his knowledge and stayed persistent even when people doubted him, proving how one person's ideas can impact the entire world.
              </p>
              <p>
                It also taught me the value of <strong>teamwork</strong>. Even with incredible talent, Turing couldn't have achieved his breakthrough without his team. Working together always leads to better results than working alone.
              </p>
            </div>
          </section>

          {/* Bottom Action Bar */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-cyan-950/50 to-slate-950 border border-cyan-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-sm font-bold text-white">Original Academic Assignment Document</div>
              <div className="text-xs text-slate-400 font-mono">
                Assignment-No-1.pdf • 3 Pages • Verified Submission
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="/academic-work/Assignment-No-1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer border border-slate-700"
              >
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Full PDF</span>
              </a>

              <a
                href="/academic-work/Assignment-No-1.pdf"
                download="Assignment-No-1.pdf"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-cyan-900/40 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

