'use client';

import React, { useState } from 'react';
import { coaTopics } from '../data/coaTopics';
import { COATopic } from '../types';
import COATopicModal from './COATopicModal';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Cpu, 
  Binary, 
  Calculator, 
  FileCode, 
  Zap, 
  Scale, 
  Layers, 
  HardDrive, 
  RefreshCw, 
  Database, 
  Workflow 
} from 'lucide-react';

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

export default function COALearningHub() {
  const [selectedTopic, setSelectedTopic] = useState<COATopic | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Fundamentals', 'Architecture', 'Processing', 'Memory & I/O'];

  const filteredTopics = activeCategory === 'All' 
    ? coaTopics 
    : coaTopics.filter(t => t.category === activeCategory);

  return (
    <section id="learning" className="py-20 md:py-28 relative bg-slate-950/60 scroll-mt-20">
      
      {/* Background Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-indigo-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-indigo-900/40">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Curriculum Knowledge Base</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            COA Learning <span className="text-cyan-400">Hub</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Explore 12 interactive Computer Organization & Architecture study modules with diagrams, formulas, logic gates, and academic summaries.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-950/50'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 12 Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTopics.map((topic) => {
            const IconComponent = iconMap[topic.iconName] || Cpu;
            return (
              <div
                key={topic.id}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-950/70 border border-cyan-800/60 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-lg bg-slate-950 text-slate-400 border border-slate-800">
                      {topic.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {topic.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mt-2.5 line-clamp-3">
                    {topic.shortDesc}
                  </p>
                </div>

                {/* Learn More Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Comprehensive Notes
                  </span>
                  <button
                    onClick={() => setSelectedTopic(topic)}
                    className="px-3 py-1.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 text-xs font-semibold border border-cyan-800/60 flex items-center gap-1.5 transition-colors group-hover:border-cyan-500 cursor-pointer"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal */}
      <COATopicModal
        topic={selectedTopic}
        onClose={() => setSelectedTopic(null)}
      />
    </section>
  );
}
