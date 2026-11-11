'use client';

import React from 'react';
import { COATopic } from '../types';
import { 
  X, 
  BookOpen, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Zap, 
  Calculator, 
  FileCode, 
  Scale, 
  HardDrive, 
  RefreshCw, 
  Database, 
  Workflow,
  Sparkles
} from 'lucide-react';
import LogicGateSimulator from './LogicGateSimulator';

const iconMap: Record<string, any> = {
  Binary: Calculator,
  Calculator: Calculator,
  FileCode: FileCode,
  Zap: Zap,
  Cpu: Cpu,
  Scale: Scale,
  Layers: Layers,
  HardDrive: HardDrive,
  RefreshCw: RefreshCw,
  Database: Database,
  Workflow: Workflow,
};

interface COATopicModalProps {
  topic: COATopic | null;
  onClose: () => void;
}

export default function COATopicModal({ topic, onClose }: COATopicModalProps) {
  if (!topic) return null;

  const IconComponent = iconMap[topic.iconName] || Cpu;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800/60 text-cyan-400 flex items-center justify-center shadow-md">
              <IconComponent className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-semibold uppercase px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
                {topic.category}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                {topic.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm text-slate-300">
          
          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" /> Comprehensive Academic Overview
            </h4>
            <p className="leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-slate-200">
              {topic.detailedContent.overview}
            </p>
          </div>

          {/* Logic Gate Interactive Sandbox for Topic 4 */}
          {topic.id === 'logic-gates' && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-amber-400 tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Live Interactive Gate Simulator
              </h4>
              <LogicGateSimulator />
            </div>
          )}

          {/* Key Architecture Points */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Key Concepts & Takeaways
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {topic.detailedContent.keyPoints.map((point, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/70 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Formula / Structure */}
          {topic.detailedContent.formulaOrStructure && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-indigo-400 tracking-wider flex items-center gap-1.5">
                <Cpu className="w-4 h-4" /> Formula / Architectural Structure
              </h4>
              <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-300 overflow-x-auto whitespace-pre-wrap">
                {topic.detailedContent.formulaOrStructure}
              </pre>
            </div>
          )}

          {/* Example Calculation */}
          {topic.detailedContent.example && (
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-bold text-emerald-400 tracking-wider flex items-center gap-1.5">
                <Calculator className="w-4 h-4" /> Practical University Example
              </h4>
              <div className="p-4 rounded-xl bg-slate-950/90 border border-emerald-900/40 font-mono text-xs text-emerald-300 overflow-x-auto whitespace-pre-wrap">
                {topic.detailedContent.example}
              </div>
            </div>
          )}

          {/* Real-World Significance */}
          <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-800/40 space-y-1">
            <div className="text-[11px] uppercase font-bold text-cyan-300 tracking-wider">
              Course & Industry Significance
            </div>
            <p className="text-xs text-slate-300">
              {topic.detailedContent.importance}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            COA Curriculum Ref: Unit Study Notes
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
          >
            Close Topic
          </button>
        </div>

      </div>
    </div>
  );
}
