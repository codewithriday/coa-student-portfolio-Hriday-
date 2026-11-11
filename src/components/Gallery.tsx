'use client';

import React, { useState } from 'react';
import { galleryItems } from '../data/studentConfig';
import { GalleryItem } from '../types';
import GalleryLightbox from './GalleryLightbox';
import { 
  ImageIcon, 
  Award, 
  Calendar, 
  Maximize2, 
  Cpu, 
  Binary, 
  Activity, 
  Compass, 
  FileCheck 
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Award,
  Cpu,
  Binary,
  Activity,
  Compass,
  FileCheck,
};

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Certificates',
    'Achievements',
    'Academic',
    'Projects',
    'Events',
    'Personal Highlights'
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const currentItem = selectedIdx !== null ? filteredItems[selectedIdx] : null;

  const handlePrev = () => {
    if (selectedIdx !== null && selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1);
    }
  };

  const handleNext = () => {
    if (selectedIdx !== null && selectedIdx < filteredItems.length - 1) {
      setSelectedIdx(selectedIdx + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic & Milestone <span className="text-cyan-400">Gallery</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            A visual record of academic showcases, course projects, upcoming certificates, and personal highlights.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setSelectedIdx(null);
              }}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const IconComponent = iconMap[item.iconType] || Award;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedIdx(idx)}
                className="group p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image/Icon Container */}
                  <div className="h-44 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/30 border border-slate-800 flex flex-col items-center justify-center relative overflow-hidden group-hover:border-cyan-700/50 transition-colors">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-950/80 border border-cyan-700/40 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                      <IconComponent className="w-7 h-7" />
                    </div>

                    <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-900/80 text-slate-400 group-hover:text-cyan-300 border border-slate-800">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    <div className="absolute bottom-3 left-3 text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-950/90 text-cyan-400 border border-cyan-900/50">
                      {item.category}
                    </div>
                  </div>

                  {/* Title & Date */}
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-400" /> {item.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800 font-mono">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={currentItem}
        onClose={() => setSelectedIdx(null)}
        onPrev={handlePrev}
        onNext={handleNext}
        hasPrev={selectedIdx !== null && selectedIdx > 0}
        hasNext={selectedIdx !== null && selectedIdx < filteredItems.length - 1}
      />
    </section>
  );
}
