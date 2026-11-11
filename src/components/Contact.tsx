'use client';

import React, { useState } from 'react';
import { studentConfig } from '../data/studentConfig';
import { 
  Mail, 
  Github, 
  Linkedin, 
  GraduationCap, 
  ShieldCheck, 
  Send, 
  Check, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-slate-950/60 scroll-mt-20">
      
      {/* Background Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect & Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Reach out for academic collaborations, project ideas, or discussions on AI and Computer Architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Student Details & Contact Placeholders */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white">
                Student & Academic Information
              </h3>
              
              <div className="space-y-3 text-xs sm:text-sm">
                
                {/* Student Name */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-xl bg-cyan-950 text-cyan-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Student Name</div>
                    <div className="font-semibold text-white">{studentConfig.name}</div>
                  </div>
                </div>

                {/* University */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-xl bg-indigo-950 text-indigo-400">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">University</div>
                    <div className="font-semibold text-white">{studentConfig.university}</div>
                  </div>
                </div>

                {/* Branch */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-xl bg-blue-950 text-blue-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Program / Branch</div>
                    <div className="font-semibold text-cyan-300">{studentConfig.branch}</div>
                  </div>
                </div>

                {/* UID */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div className="p-2 rounded-xl bg-purple-950 text-purple-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Student UID</div>
                    <div className="font-mono font-bold text-cyan-300">{studentConfig.uid}</div>
                  </div>
                </div>

                {/* Contact Placeholders */}
                <div className="pt-2 border-t border-slate-800 space-y-2">
                  
                  {/* Email Placeholder */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-cyan-400" />
                      <span className="text-xs font-semibold text-slate-300">Email</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {studentConfig.email}
                    </span>
                  </div>

                  {/* GitHub Placeholder */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Github className="w-4 h-4 text-slate-300" />
                      <span className="text-xs font-semibold text-slate-300">GitHub</span>
                    </div>
                    <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {studentConfig.github}
                    </span>
                  </div>

                  {/* LinkedIn Placeholder */}
                  <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/70 border border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-4 h-4 text-blue-400" />
                      <span className="text-xs font-semibold text-slate-300">LinkedIn</span>
                    </div>
                    <span className="text-xs font-mono text-blue-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      {studentConfig.linkedin}
                    </span>
                  </div>

                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-sm shadow-xl space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-cyan-400" />
                  Send a Message
                </h3>
                <p className="text-xs text-slate-400">
                  Have a question about the COA Number System Converter or course project? Leave a message below.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800 text-center space-y-2 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-900 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">Message Transmitted!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. Your academic note has been recorded.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-sender-name" className="text-xs uppercase font-semibold text-slate-400">Your Full Name *</label>
                      <input
                        id="contact-sender-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Professor / Student Name"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-sender-email" className="text-xs uppercase font-semibold text-slate-400">Your Email Address *</label>
                      <input
                        id="contact-sender-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. faculty@cumail.in"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-sender-subject" className="text-xs uppercase font-semibold text-slate-400">Subject / Inquiry</label>
                    <input
                      id="contact-sender-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. COA Assignment Review / Project Discussion"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-sender-message" className="text-xs uppercase font-semibold text-slate-400">Message Content *</label>
                    <textarea
                      id="contact-sender-message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-950/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
