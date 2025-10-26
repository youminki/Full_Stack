import { useCallback, useEffect, useRef, useState } from 'react';

export function useCalculator(initial = '0') {
  const [display, setDisplay] = useState<string>(initial);
  const [flash, setFlash] = useState<boolean>(false);
  const timeoutRef = useRef<number | null>(null);

  const append = useCallback((v: string) => {
    setDisplay((prev) => (prev === '0' && v !== '.' ? v : prev + v));
  }, []);

  const isOperator = useCallback((c: string) => ['/', '*', '-', '+'].includes(c), []);

  const handleClick = useCallback(
    (val: string) => {
      if (val === 'C') {
        setDisplay('0');
        return;
      }
      if (val === '←') {
        setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : '0'));
        return;
      }
      if (val === '%') {
        try {
          const n = parseFloat(display);
          if (!isNaN(n)) setDisplay(String(n / 100));
        } catch {
          /* ignore */
        }
        return;
      }
      if (val === '=') {
        try {
          const safe = display.replace(/[^0-9.+\-*/()%]/g, '');
          const res = eval(safe as any);
          setFlash(true);
          if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
          timeoutRef.current = window.setTimeout(() => setFlash(false), 200) as unknown as number;
          setDisplay(String(res));
        } catch (e) {
          setDisplay('Error');
        }
        return;
      }

      append(val);
    },
    [display, append]
  );

  // Keyboard support
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key;
      if (/^[0-9]$/.test(k)) {
        append(k);
      } else if (k === '.') {
        append(k);
      } else if (k === 'Enter') {
        e.preventDefault();
        handleClick('=');
      } else if (k === 'Backspace') {
        handleClick('←');
      } else if (k === 'Escape') {
        handleClick('C');
      } else if (['+', '-', '*', '/', '%'].includes(k)) {
        append(k);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [display, handleClick, append]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  return { display, flash, handleClick, append, isOperator } as const;
}
