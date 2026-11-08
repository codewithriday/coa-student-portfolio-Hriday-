'use client';

import React from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  X, 
  Printer, 
  Download, 
  GraduationCap, 
  Cpu, 
  Award, 
  Sparkles, 
  Phone, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Printable Sheet */}
      <div className="relative w-full max-w-4xl rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col">
        
        {/* Modal Action Bar */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <span>Hriday-Kataria-Resume.pdf (Live Preview)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / Save PDF</span>
            </button>
            <a
              href={studentConfig.resumePath}
              download="Hriday-Kataria-Resume.pdf"
              className="px-3.5 py-1.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors ml-2 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="p-6 sm:p-10 space-y-7 overflow-y-auto bg-slate-900 text-slate-300 print:bg-white print:text-black print:p-0 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white print:text-black">
                  {studentConfig.name}
                </h1>
                <p className="text-sm font-bold text-cyan-400 print:text-blue-700 mt-0.5">
                  B.Tech CSE (AI) | Python • AI/ML • Azure Certified
                </p>
                <p className="text-xs text-slate-400 print:text-gray-600 mt-0.5">
                  Faculty Evaluator: Prof. Ruchika Gupta • Chandigarh University
                </p>
              </div>

              <div className="text-xs space-y-1 font-mono text-slate-300 print:text-gray-800 sm:text-right">
                <div>Phone: +91 7974990049</div>
                <div>Email: {studentConfig.email}</div>
                <div>Location: Mohali/Chandigarh, Punjab</div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-300 print:text-gray-700">
              <span className="font-bold text-slate-200 print:text-black">Career Objective: </span>
              {studentConfig.bio}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider flex items-center gap-2 border-b border-slate-800 pb-1">
              <GraduationCap className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3 text-xs">
              <div className="space-y-0.5">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Bachelor of Technology (Computer Science - AI, Microsoft)</span>
                  <span className="font-mono text-cyan-400">Currently in 2nd Year, Sem 3</span>
                </div>
                <div className="text-slate-400 print:text-gray-600">Chandigarh University, Gharuan, Punjab</div>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Senior Secondary Education (Science-PCM, 78%)</span>
                  <span className="font-mono text-slate-400">2025</span>
                </div>
                <div className="text-slate-400 print:text-gray-600">SSSVV, Vijay Nagar, Indore, MP</div>
              </div>

              <div className="space-y-0.5">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Secondary Education (86%)</span>
                  <span className="font-mono text-slate-400">2023</span>
                </div>
                <div className="text-slate-400 print:text-gray-600">SSSVV, Vijay Nagar, Indore, MP</div>
              </div>
            </div>
          </div>

          {/* Trainings & Projects */}
          <div className="space-y-3">
            <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider flex items-center gap-2 border-b border-slate-800 pb-1">
              <Cpu className="w-4 h-4" /> Trainings & Projects
            </h2>
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Hand Gesture Recognition System</span>
                  <span className="font-mono text-slate-400 font-normal">Python, OpenCV, MediaPipe</span>
                </div>
                <p className="text-slate-300 print:text-gray-700">
                  • Engineered a real-time hand gesture recognition system using OpenCV and MediaPipe to detect, track, and classify hand movements from a live camera feed.
                </p>
                <p className="text-slate-300 print:text-gray-700">
                  • Applied landmark-detection techniques to translate hand gestures into recognizable classes.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>COA Instruction Set Simulator & Number System Converter</span>
                  <span className="font-mono text-slate-400 font-normal">Python, C++, Next.js</span>
                </div>
                <p className="text-slate-300 print:text-gray-700">
                  • Authored an educational COA platform modeling multi-radix conversions (Decimal, Binary, Octal, Hexadecimal) and instruction cycle execution.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Scientific Calculator</span>
                  <span className="font-mono text-slate-400 font-normal">Python</span>
                </div>
                <p className="text-slate-300 print:text-gray-700">
                  • Developed a Python-based scientific calculator supporting arithmetic, trigonometric, and logarithmic operations with a modular, function-driven design.
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between font-bold text-white print:text-black">
                  <span>Simple AI Chatbot</span>
                  <span className="font-mono text-slate-400 font-normal">C++, Python</span>
                </div>
                <p className="text-slate-300 print:text-gray-700">
                  • Built a rule-based conversational chatbot combining C++ and Python to process user input and generate context-appropriate responses.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications & Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            <div className="space-y-3">
              <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider flex items-center gap-2 border-b border-slate-800 pb-1">
                <Award className="w-4 h-4" /> Certifications
              </h2>
              <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
                <div>• <strong>Microsoft Certified:</strong> Azure AI Fundamentals (AI-900)</div>
                <div>• <strong>Microsoft Certified:</strong> Azure Fundamentals (AZ-900)</div>
                <div>• <strong>Coursera:</strong> Generative AI Essentials</div>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-xs uppercase font-bold text-cyan-400 print:text-blue-800 tracking-wider flex items-center gap-2 border-b border-slate-800 pb-1">
                <Sparkles className="w-4 h-4" /> Achievements & Roles
              </h2>
              <div className="space-y-2 text-xs text-slate-300 print:text-gray-800">
                <div>• <strong>Lawn Tennis:</strong> Tournament Winner & Multi-sports athlete</div>
                <div>• <strong>DSW Club:</strong> Data Science & Web Club Member (CU)</div>
                <div>• <strong>Discipline Team:</strong> College Discipline Committee Member</div>
              </div>
            </div>

          </div>

          {/* Technical Skills & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-slate-800">
            <div className="space-y-1.5 text-xs">
              <div className="font-bold text-white print:text-black">Technical Skills:</div>
              <div className="text-slate-300 print:text-gray-700"><strong>Programming:</strong> Python, C++, C</div>
              <div className="text-slate-300 print:text-gray-700"><strong>Cloud & Data:</strong> Microsoft Azure (AI-900, AZ-900), NumPy, Pandas, Scikit-learn, OpenCV, MediaPipe</div>
              <div className="text-slate-300 print:text-gray-700"><strong>Tools & OS:</strong> Git, GitHub, VS Code, Jupyter Notebook, Linux, Kali Linux</div>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="font-bold text-white print:text-black">Interpersonal & Languages:</div>
              <div className="text-slate-300 print:text-gray-700"><strong>Interpersonal:</strong> Adaptability, Teamwork, Problem Solving, Communication</div>
              <div className="text-slate-300 print:text-gray-700"><strong>Languages:</strong> Hindi (Native), English (Professional Working)</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
