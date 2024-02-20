import { useEffect } from "react";

const useTimeout = (callback: () => void, delay: number) => {
  useEffect(() => {
    const timeoutId = setTimeout(callback, delay);
    return () => clearTimeout(timeoutId);
  }, [callback, delay]);
};

export default useTimeout;
