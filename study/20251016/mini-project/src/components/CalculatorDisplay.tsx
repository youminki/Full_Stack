import React from 'react';

type Props = {
  display: string;
  flash?: boolean;
};

const CalculatorDisplay = ({ display, flash }: Props) => (
  <div
    id="display"
    className={`bg-gradient-to-b from-gray-900/95 to-gray-800/95 text-white text-right text-4xl font-mono p-5 rounded-2xl mt-2 shadow-[inset_0_-6px_30px_rgba(0,0,0,0.7)] ${flash ? 'ring-4 ring-amber-300/40 animate-pulse' : ''}`}
  >
    {display}
  </div>
);

export default CalculatorDisplay;
