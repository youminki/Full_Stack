import React from 'react';

type Props = {
  buttons: string[][];
  onPress: (b: string) => void;
  isOperator: (c: string) => boolean;
};

const CalculatorButtons = ({ buttons, onPress, isOperator }: Props) => {
  return (
    <div id="buttons" className="grid grid-cols-4 gap-3">
      {buttons.flat().map((b, idx) => {
        const isEq = b === '=';
        const isClear = b === 'C' || b === '←';
        const isZero = b === '0';
        const base =
          'w-full h-14 flex items-center justify-center text-lg font-semibold transform transition-all duration-150 active:scale-95';

        let styles = '';
        if (isClear)
          styles =
            'bg-white/80 text-gray-800 rounded-full shadow-[0_8px_24px_rgba(2,6,23,0.12)] hover:bg-white/90 backdrop-blur-sm';
        else if (isEq)
          styles =
            'col-span-1 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500 text-white rounded-full shadow-[0_14px_34px_rgba(245,158,11,0.22)] hover:scale-[1.02]';
        else if (isOperator(b))
          styles =
            'bg-gradient-to-br from-slate-800 to-slate-700 text-white rounded-full shadow-[0_10px_26px_rgba(0,0,0,0.28)] hover:scale-[1.02]';
        else if (isZero)
          styles =
            'col-span-2 bg-white/85 text-gray-900 rounded-full shadow-[0_8px_24px_rgba(2,6,23,0.12)] hover:bg-white/95 justify-start pl-6 backdrop-blur-sm';
        else
          styles =
            'bg-white/85 text-gray-900 rounded-full shadow-[0_8px_24px_rgba(2,6,23,0.12)] hover:bg-white/95 backdrop-blur-sm';

        return (
          <button
            key={idx}
            type="button"
            aria-label={`button-${b}`}
            id={b === '←' ? 'backspace' : b === '=' ? 'equal' : b === 'C' ? 'clear' : b}
            className={`${base} ${styles}`}
            onClick={() => onPress(b)}
          >
            {b}
          </button>
        );
      })}
    </div>
  );
};

export default CalculatorButtons;
