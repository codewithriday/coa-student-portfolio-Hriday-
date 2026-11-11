'use client';

import React from 'react';
import { GalleryItem } from '../types';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Award, 
  Cpu, 
  Binary, 
  Activity, 
  Compass, 
  FileCheck,
  Calendar,
  Tag
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Award,
  Cpu,
  Binary,
  Activity,
  Compass,
  FileCheck,
};

interface GalleryLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export default function GalleryLightbox({ 
  item, 
  onClose, 
  onPrev, 
  onNext, 
  hasPrev, 
  hasNext 
}: GalleryLightboxProps) {
  if (!item) return null;

  const IconComponent = iconMap[item.iconType] || Award;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Lightbox Dialog */}
      <div className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        
        {/* Header Strip */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/40">
              {item.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
              <Calendar className="w-3.5 h-3.5" /> {item.date}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto text-sm">
          
          {/* Visual Showcase Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-800/40 flex flex-col items-center justify-center text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-cyan-950/80 border border-cyan-600/50 text-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-950/50">
              <IconComponent className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="text-xs text-cyan-400 font-mono">
                {item.placeholderText || "Academic Portfolio Showcase"}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Description & Details:
            </h4>
            <p className="text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800 text-xs sm:text-sm">
              {item.description}
            </p>
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase font-bold text-slate-400 tracking-wider flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-cyan-400" /> Tags:
            </h4>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="text-xs px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 border border-slate-700 font-mono">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Navigation (Prev, Next, Close) */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              disabled={!hasPrev}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </button>
            <button
              onClick={onNext}
              disabled={!hasNext}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-1 transition-colors disabled:opacity-30 cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
