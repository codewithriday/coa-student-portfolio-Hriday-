'use client';

import React, { useState, useEffect } from 'react';
import { NumberSystem } from '../types';
import { convertNumber, validateInput, ConversionResult } from '../utils/converter';
import { 
  Binary, 
  RotateCcw, 
  Copy, 
  Check, 
  ArrowRightLeft, 
  Calculator, 
  AlertCircle, 
  BookOpen, 
  Sparkles, 
  Play, 
  Info,
  Layers,
  ChevronDown
} from 'lucide-react';

export default function NumberConverter() {
  const [inputValue, setInputValue] = useState('255');
  const [inputSystem, setInputSystem] = useState<NumberSystem>('decimal');
  const [result, setResult] = useState<ConversionResult>(convertNumber('255', 'decimal'));
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Instant calculation while typing
  useEffect(() => {
    const res = convertNumber(inputValue, inputSystem);
    setResult(res);
  }, [inputValue, inputSystem]);

  const handleManualConvert = () => {
    const res = convertNumber(inputValue, inputSystem);
    setResult(res);
  };

  const handleSystemChange = (system: NumberSystem) => {
    if (result.isValid && inputValue.trim()) {
      let nextValue = '';
      if (system === 'decimal') nextValue = result.decimal;
      else if (system === 'binary') nextValue = result.binary;
      else if (system === 'octal') nextValue = result.octal;
      else if (system === 'hexadecimal') nextValue = result.hexadecimal;
      
      if (nextValue) {
        setInputValue(nextValue);
      }
    }
    setInputSystem(system);
  };

  const handleClear = () => {
    setInputValue('');
  };

  const handleReset = () => {
    setInputSystem('decimal');
    setInputValue('255');
  };

  const handleSwapSystem = () => {
    const sequence: NumberSystem[] = ['decimal', 'binary', 'octal', 'hexadecimal'];
    const nextIdx = (sequence.indexOf(inputSystem) + 1) % sequence.length;
    handleSystemChange(sequence[nextIdx]);
  };

  const handleCopy = (text: string, key: string) => {
    if (!text || text === '—') return;
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="coa-tool" className="py-20 md:py-28 relative scroll-mt-20">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 text-xs font-semibold uppercase tracking-wider shadow-sm shadow-emerald-900/40">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Academic Assignment Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            COA Number System <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Converter</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Convert numbers between Decimal, Binary, Octal and Hexadecimal.
          </p>
        </div>

        {/* TWO-PANEL CONVERTER CARD */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl overflow-hidden">
          
          {/* Card Top Strip */}
          <div className="px-6 py-4 bg-slate-950/80 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                COA_RADIX_CONVERTER • TWO-PANEL ENGINE
              </span>
            </div>

            {/* Actions: Swap, Reset, Clear */}
            <div className="flex items-center gap-2 text-xs">
              <button
                onClick={handleSwapSystem}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1 transition-colors"
                title="Cycle Input System"
              >
                <ArrowRightLeft className="w-3 h-3 text-cyan-400" />
                <span>Swap Base</span>
              </button>

              <button
                onClick={handleReset}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 flex items-center gap-1 transition-colors"
                title="Reset to sample value 255"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>

              <button
                onClick={handleClear}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-red-950 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-800/50 transition-colors"
                title="Clear input"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Two-Panel Layout (Left: Input, Right: Output) */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT PANEL: INPUT SECTION */}
            <div className="lg:col-span-5 space-y-5 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" />
                  INPUT PANEL
                </span>
                <span className="text-[10px] font-mono text-slate-500">Live Auto-Update</span>
              </div>

              {/* Number Input Box */}
              <div className="space-y-1.5">
                <label htmlFor="coa-input-field" className="text-xs font-semibold text-slate-400">
                  Enter Number Value:
                </label>
                <input
                  id="coa-input-field"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder={`Enter ${inputSystem} number...`}
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900 border font-mono text-base text-white focus:outline-none focus:ring-2 transition-all ${
                    !result.isValid 
                      ? 'border-red-500/80 focus:ring-red-500/50 text-red-200' 
                      : 'border-slate-700 focus:border-cyan-500 focus:ring-cyan-500/30'
                  }`}
                />
              </div>

              {/* Input System Dropdown */}
              <div className="space-y-1.5">
                <label htmlFor="coa-system-select" className="text-xs font-semibold text-slate-400">
                  Select Number System:
                </label>
                <div className="relative">
                  <select
                    id="coa-system-select"
                    value={inputSystem}
                    onChange={(e) => handleSystemChange(e.target.value as NumberSystem)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white font-semibold text-sm focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 appearance-none cursor-pointer"
                  >
                    <option value="decimal">Decimal (Base 10)</option>
                    <option value="binary">Binary (Base 2)</option>
                    <option value="octal">Octal (Base 8)</option>
                    <option value="hexadecimal">Hexadecimal (Base 16)</option>
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Convert Button */}
              <button
                onClick={handleManualConvert}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 text-slate-950 fill-current" />
                <span>Convert</span>
              </button>

              {/* Validation & Error Message */}
              {!result.isValid && result.errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-800 text-red-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Validation Error: </span>
                    {result.errorMessage}
                  </div>
                </div>
              )}

              {/* Quick Preset Buttons */}
              <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 block">Quick Demonstration Presets:</span>
                <div className="flex flex-wrap gap-1.5">
                  <button onClick={() => { setInputSystem('decimal'); setInputValue('255'); }} className="text-[11px] font-mono px-2 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 border border-slate-800">255 (Dec)</button>
                  <button onClick={() => { setInputSystem('decimal'); setInputValue('25'); }} className="text-[11px] font-mono px-2 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 border border-slate-800">25 (Dec)</button>
                  <button onClick={() => { setInputSystem('binary'); setInputValue('11111111'); }} className="text-[11px] font-mono px-2 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 border border-slate-800">11111111 (Bin)</button>
                  <button onClick={() => { setInputSystem('hexadecimal'); setInputValue('FF'); }} className="text-[11px] font-mono px-2 py-1 rounded bg-slate-900 hover:bg-cyan-950 text-slate-300 border border-slate-800">0xFF (Hex)</button>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: OUTPUT SECTION */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  OUTPUT PANEL
                </span>
                <span className="text-[11px] text-slate-400">Click copy icon to copy</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Output 1: Decimal */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-slate-950/70 border transition-all ${
                  inputSystem === 'decimal' ? 'border-blue-500/60 shadow-md shadow-blue-950/40' : 'border-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-bold text-white uppercase">Decimal (Base 10)</span>
                    {inputSystem === 'decimal' && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300">Input</span>}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <div className="font-mono text-lg font-bold text-blue-300 break-all select-all">
                      {result.isValid && result.decimal !== '' ? result.decimal : '—'}
                    </div>
                    <button
                      onClick={() => handleCopy(result.decimal, 'dec')}
                      disabled={!result.decimal || !result.isValid}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 disabled:opacity-30"
                      title="Copy Decimal"
                    >
                      {copiedKey === 'dec' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-2">Digits 0–9</div>
                </div>

                {/* Output 2: Binary */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-slate-950/70 border transition-all ${
                  inputSystem === 'binary' ? 'border-teal-500/60 shadow-md shadow-teal-950/40' : 'border-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-bold text-white uppercase">Binary (Base 2)</span>
                    {inputSystem === 'binary' && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-teal-950 text-teal-300">Input</span>}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <div className="font-mono text-lg font-bold text-teal-300 break-all select-all">
                      {result.isValid && result.binary !== '' ? result.binary : '—'}
                    </div>
                    <button
                      onClick={() => handleCopy(result.binary, 'bin')}
                      disabled={!result.binary || !result.isValid}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 disabled:opacity-30"
                      title="Copy Binary"
                    >
                      {copiedKey === 'bin' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-2">Digits 0, 1</div>
                </div>

                {/* Output 3: Octal */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-slate-950/70 border transition-all ${
                  inputSystem === 'octal' ? 'border-indigo-500/60 shadow-md shadow-indigo-950/40' : 'border-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-bold text-white uppercase">Octal (Base 8)</span>
                    {inputSystem === 'octal' && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300">Input</span>}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <div className="font-mono text-lg font-bold text-indigo-300 break-all select-all">
                      {result.isValid && result.octal !== '' ? result.octal : '—'}
                    </div>
                    <button
                      onClick={() => handleCopy(result.octal, 'oct')}
                      disabled={!result.octal || !result.isValid}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 disabled:opacity-30"
                      title="Copy Octal"
                    >
                      {copiedKey === 'oct' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-2">Digits 0–7 (3-bit groups)</div>
                </div>

                {/* Output 4: Hexadecimal */}
                <div className={`p-4 sm:p-5 rounded-2xl bg-slate-950/70 border transition-all ${
                  inputSystem === 'hexadecimal' ? 'border-purple-500/60 shadow-md shadow-purple-950/40' : 'border-slate-800'
                }`}>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span className="font-bold text-white uppercase">Hexadecimal (Base 16)</span>
                    {inputSystem === 'hexadecimal' && <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950 text-purple-300">Input</span>}
                  </div>
                  <div className="flex items-center justify-between gap-2 mt-2">
                    <div className="font-mono text-lg font-bold text-purple-300 break-all select-all">
                      {result.isValid && result.hexadecimal !== '' ? result.hexadecimal : '—'}
                    </div>
                    <button
                      onClick={() => handleCopy(result.hexadecimal, 'hex')}
                      disabled={!result.hexadecimal || !result.isValid}
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 disabled:opacity-30"
                      title="Copy Hexadecimal"
                    >
                      {copiedKey === 'hex' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                  <div className="text-[10px] text-slate-500 font-mono mt-2">Digits 0–9, A–F (4-bit nibbles)</div>
                </div>

              </div>
            </div>

          </div>

          {/* Bottom Card Helper */}
          <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              Full bidirectional radix math verified
            </span>
            <span className="font-mono text-cyan-400">CSE-AI Academic Assignment</span>
          </div>
        </div>

        {/* UNDERSTANDING NUMBER SYSTEMS (4 Educational Cards) */}
        <div className="space-y-6 pt-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              Understanding Number Systems
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Fundamental principles of positional radix bases and character encoding in computer architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Decimal Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">DECIMAL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800/50">Base 10</span>
              </div>
              <div className="text-xs font-mono font-bold text-blue-400">
                Digits: 0–9
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The standard human counting system. Each position represents successive powers of 10 (10⁰, 10¹, 10²...).
              </p>
            </div>

            {/* Binary Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">BINARY</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-800/50">Base 2</span>
              </div>
              <div className="text-xs font-mono font-bold text-teal-400">
                Digits: 0–1
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                The foundational language of electronic computers. Corresponds directly to transistor switch states (0 = Low voltage, 1 = High voltage).
              </p>
            </div>

            {/* Octal Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">OCTAL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800/50">Base 8</span>
              </div>
              <div className="text-xs font-mono font-bold text-indigo-400">
                Digits: 0–7
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                A compact base-8 representation where every octal digit precisely represents a 3-bit binary group (2³ = 8).
              </p>
            </div>

            {/* Hexadecimal Card */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white text-base">HEXADECIMAL</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800/50">Base 16</span>
              </div>
              <div className="text-xs font-mono font-bold text-purple-400">
                Digits: 0–9 and A–F
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Widely used for memory addresses and byte dumps. One hexadecimal digit maps directly to 4 binary bits (1 nibble, 2⁴ = 16).
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
