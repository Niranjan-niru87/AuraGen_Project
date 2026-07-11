import { useState, useEffect } from "react";

function useHesitationTracker() {
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    let timer;

    function resetTimer() {
      setIdleTime(0);

      clearInterval(timer);

      timer = setInterval(() => {
        setIdleTime((prev) => prev + 1);
      }, 1000);
    }

    window.addEventListener("mousemove", resetTimer);

    resetTimer();

    return () => {
      clearInterval(timer);
      window.removeEventListener("mousemove", resetTimer);
    };
  }, []);

  return idleTime;
}

export default useHesitationTracker;