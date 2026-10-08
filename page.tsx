'use client';

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Journey from '../components/Journey';
import NumberConverter from '../components/NumberConverter';
import COALearningHub from '../components/COALearningHub';
import Achievements from '../components/Achievements';
import Gallery from '../components/Gallery';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col bg-slate-950 text-slate-100 overflow-x-hidden min-h-screen">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Main Content Flow strictly aligned to the requested structure */}
      <main className="flex-1">
        {/* 1. HOME: Hero, Quick Student Info, COA Tool CTA */}
        <Hero />

        {/* 2. ABOUT: Introduction, Academic Interests, Tech Stack, Personal Interests */}
        <About />

        {/* 3. MY JOURNEY: Education, Learning, Current Focus, Future Goals */}
        <Journey />

        {/* 4. COA LAB ⭐: Number Converter, Step-by-Step Proofs, Explanations, Gate Sim */}
        <NumberConverter />

        {/* 5. COA LEARNING: CPU, ALU, Memory, Registers, Cache, Logic Gates, Instruction Cycle */}
        <COALearningHub />

        {/* 6. ACHIEVEMENTS: Timeline, Certifications */}
        <Achievements />

        {/* 7. GALLERY: Certificates, Projects, Events, Highlights */}
        <Gallery />

        {/* 8. RESUME: View / Download Modal & Printable Sheet */}
        <Resume />

        {/* 9. CONTACT & FOOTER */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
