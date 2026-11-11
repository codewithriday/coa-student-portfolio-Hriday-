'use client';

import React, { useState } from 'react';
import { Zap, Check, X } from 'lucide-react';

type GateType = 'AND' | 'OR' | 'NOT' | 'NAND' | 'NOR' | 'XOR' | 'XNOR';

export default function LogicGateSimulator() {
  const [selectedGate, setSelectedGate] = useState<GateType>('AND');
  const [inputA, setInputA] = useState<boolean>(true);
  const [inputB, setInputB] = useState<boolean>(false);

  // Compute Output
  const computeOutput = (gate: GateType, a: boolean, b: boolean): boolean => {
    switch (gate) {
      case 'AND': return a && b;
      case 'OR': return a || b;
      case 'NOT': return !a;
      case 'NAND': return !(a && b);
      case 'NOR': return !(a || b);
      case 'XOR': return a !== b;
      case 'XNOR': return a === b;
      default: return false;
    }
  };

  const output = computeOutput(selectedGate, inputA, inputB);

  const gates: GateType[] = ['AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'];

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
      {/* Gate Selector Pills */}
      <div className="flex flex-wrap gap-1.5">
        {gates.map((gate) => (
          <button
            key={gate}
            onClick={() => setSelectedGate(gate)}
            className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
              selectedGate === gate
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-900/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            {gate}
          </button>
        ))}
      </div>

      {/* Interactive Circuit Canvas Area */}
      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Inputs */}
        <div className="space-y-3 w-full sm:w-auto">
          <div className="flex items-center justify-between gap-4">
            <span className="text-xs font-mono text-slate-300">Input A:</span>
            <button
              onClick={() => setInputA(!inputA)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${
                inputA 
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' 
                  : 'bg-slate-800 text-slate-500 border-slate-700'
              }`}
            >
              {inputA ? 'HIGH (1)' : 'LOW (0)'}
            </button>
          </div>

          {selectedGate !== 'NOT' && (
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-300">Input B:</span>
              <button
                onClick={() => setInputB(!inputB)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${
                  inputB 
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50' 
                    : 'bg-slate-800 text-slate-500 border-slate-700'
                }`}
              >
                {inputB ? 'HIGH (1)' : 'LOW (0)'}
              </button>
            </div>
          )}
        </div>

        {/* Gate Symbol / Representation */}
        <div className="p-3 rounded-xl bg-slate-950 border border-cyan-900/50 text-center font-mono">
          <div className="text-[10px] text-slate-500 uppercase">Logic Gate</div>
          <div className="text-base font-extrabold text-cyan-400">{selectedGate} GATE</div>
          <div className="text-[11px] text-slate-400 mt-1">
            {selectedGate === 'AND' && 'Y = A · B'}
            {selectedGate === 'OR' && 'Y = A + B'}
            {selectedGate === 'NOT' && "Y = A'"}
            {selectedGate === 'NAND' && "Y = (A · B)'"}
            {selectedGate === 'NOR' && "Y = (A + B)'"}
            {selectedGate === 'XOR' && "Y = A ⊕ B"}
            {selectedGate === 'XNOR' && "Y = (A ⊕ B)'"}
          </div>
        </div>

        {/* Output LED */}
        <div className="text-center w-full sm:w-auto">
          <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">Output LED (Y)</div>
          <div className={`px-4 py-2 rounded-xl font-mono text-sm font-bold border flex items-center justify-center gap-2 ${
            output 
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/20 animate-pulse' 
              : 'bg-slate-950 text-slate-600 border-slate-800'
          }`}>
            <Zap className={`w-4 h-4 ${output ? 'text-emerald-400' : 'text-slate-600'}`} />
            <span>{output ? 'HIGH (1)' : 'LOW (0)'}</span>
          </div>
        </div>

      </div>

      {/* Mini Truth Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-mono text-center border-collapse">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400">
              <th className="py-1 px-2">A</th>
              {selectedGate !== 'NOT' && <th className="py-1 px-2">B</th>}
              <th className="py-1 px-2 text-cyan-400">Output (Y)</th>
              <th className="py-1 px-2 text-slate-500">State</th>
            </tr>
          </thead>
          <tbody className="text-slate-300">
            {selectedGate === 'NOT' ? (
              <>
                <tr className={inputA ? 'bg-cyan-950/40 text-cyan-300' : ''}>
                  <td className="py-1">0</td>
                  <td className="py-1 font-bold text-emerald-400">1</td>
                  <td className="py-1 text-slate-500">{!inputA ? '← Active' : ''}</td>
                </tr>
                <tr className={!inputA ? 'bg-cyan-950/40 text-cyan-300' : ''}>
                  <td className="py-1">1</td>
                  <td className="py-1 font-bold text-slate-400">0</td>
                  <td className="py-1 text-slate-500">{inputA ? '← Active' : ''}</td>
                </tr>
              </>
            ) : (
              [
                { a: false, b: false },
                { a: false, b: true },
                { a: true, b: false },
                { a: true, b: true },
              ].map((row, idx) => {
                const rowOut = computeOutput(selectedGate, row.a, row.b);
                const isCurrent = row.a === inputA && row.b === inputB;
                return (
                  <tr key={idx} className={isCurrent ? 'bg-cyan-950/40 text-cyan-300 font-bold' : ''}>
                    <td className="py-1">{row.a ? '1' : '0'}</td>
                    <td className="py-1">{row.b ? '1' : '0'}</td>
                    <td className={`py-1 font-bold ${rowOut ? 'text-emerald-400' : 'text-slate-400'}`}>
                      {rowOut ? '1' : '0'}
                    </td>
                    <td className="py-1 text-slate-500">{isCurrent ? '← Active' : ''}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
