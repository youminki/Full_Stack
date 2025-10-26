import React from 'react';
import CalculatorDisplay from '../components/CalculatorDisplay';
import CalculatorButtons from '../components/CalculatorButtons';
import { useCalculator } from '../hooks/useCalculator';

const buttons = [
  ['C', '←', '%', '/'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const Calc = () => {
  const { display, flash, handleClick, isOperator } = useCalculator('0');
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 relative flex items-center justify-center p-6">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -left-20 -top-16 bg-teal-300 bg-clip-padding rounded-full bg-opacity-100 bg-gradient-to-br from-teal-400 to-cyan-300 bg-blob bg-blob--large"
          aria-hidden
        />
        <div
          className="absolute right-6 top-28 bg-purple-300 rounded-full bg-gradient-to-br from-violet-400 to-purple-300 bg-blob bg-blob--slow bg-blob--small"
          aria-hidden
        />
        <div className="spotlight" aria-hidden />
      </div>

      <div className="absolute inset-0 bg-black/45 backdrop-blur-sm" aria-hidden />
      <div className="w-full max-w-sm relative z-10">
        <div className="flex justify-center">
          <div className="w-full">
            <div className="relative bg-gradient-to-b from-white/95 to-gray-100/90 border border-gray-300/20 p-6 rounded-3xl shadow-[0_20px_60px_rgba(2,6,23,0.6),0_6px_18px_rgba(0,0,0,0.25)] ring-1 ring-white/10">
              <div
                className="absolute -left-8 -top-8 w-36 h-36 rounded-full bg-indigo-100 opacity-30 blur-2xl"
                aria-hidden
              />
              <div
                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-pink-100 opacity-25 blur-2xl"
                aria-hidden
              />

              <div className="mb-4">
                <CalculatorDisplay display={display} flash={flash} />
              </div>

              <CalculatorButtons buttons={buttons} onPress={handleClick} isOperator={isOperator} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calc;
