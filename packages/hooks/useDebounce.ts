import React, { useRef } from "react";

function useDebounce(fn, delay = 500) {
  const timer = useRef<NodeJS.Timeout | null>(null);

  return (...args) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      fn.call(this, ...args);
    }, delay);
  };
}

export default useDebounce;
