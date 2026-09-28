import { useEffect, useState } from 'react';
export default function useCountdown(target) {
  const [ms, setMs] = useState(target ? new Date(target) - Date.now() : 0);
  useEffect(() => {
    if (!target) return;
    const tick = () => setMs(new Date(target) - Date.now());
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, [target]);
  return ms;
}
