'use client';

import React, { useState, useEffect } from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  Menu, 
  X, 
  Cpu, 
  Binary, 
  User, 
  Award, 
  FileText, 
  Mail, 
  Image as ImageIcon,
  BookOpen,
  BookMarked,
  Compass,
  Sparkles
} from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'HOME', href: '#home', icon: Cpu },
    { name: 'ABOUT', href: '#about', icon: User },
    { name: 'JOURNEY', href: '#journey', icon: Compass },
    { name: 'COA LAB ⭐', href: '#coa-tool', icon: Binary, highlight: true },
    { name: 'COA LEARNING', href: '#learning', icon: BookOpen },
    { name: 'ACADEMIC WORK', href: '#academic-work', icon: BookMarked },
    { name: 'ACHIEVEMENTS', href: '#achievements', icon: Award },
    { name: 'GALLERY', href: '#gallery', icon: ImageIcon },
    { name: 'RESUME', href: '#resume', icon: FileText },
    { name: 'CONTACT', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'journey', 'coa-tool', 'learning', 'academic-work', 'case-studies', 'achievements', 'gallery', 'resume', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/25 py-3' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a 
            href="#home" 
            onClick={(e) => handleScrollTo(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-sm tracking-wider shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-200">
              {studentConfig.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base sm:text-lg text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                  {studentConfig.name}
                </span>
                <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-950/80 text-cyan-400 border border-cyan-800/50 font-mono">
                  CSE-AI
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden md:block">
                {studentConfig.university} • {studentConfig.uid}
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1.5 2xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    link.highlight
                      ? 'bg-emerald-950/70 text-emerald-400 border border-emerald-800/70 hover:bg-emerald-900/60 shadow-sm shadow-emerald-950'
                      : isActive
                        ? 'bg-cyan-950/80 text-cyan-400 border border-cyan-800/60 shadow-inner'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  <link.icon className={`w-3.5 h-3.5 ${link.highlight ? 'text-emerald-400' : isActive ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* CTA & Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#coa-tool"
              onClick={(e) => handleScrollTo(e, '#coa-tool')}
              className="px-3.5 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 via-teal-400 to-blue-500 text-slate-950 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-200 flex items-center gap-1.5"
            >
              <Binary className="w-3.5 h-3.5" />
              <span>COA Lab</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden px-4 pt-3 pb-6 bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold tracking-wider transition-colors ${
                    link.highlight
                      ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-800/60'
                      : isActive
                        ? 'bg-cyan-950/70 text-cyan-400 border border-cyan-800/60'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  <link.icon className={`w-4 h-4 ${link.highlight ? 'text-emerald-400' : 'text-cyan-400'}`} />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
