import { useState, useEffect } from "react";

function useClickTracker() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    function handleClick() {
      setClicks((prev) => prev + 1);
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return clicks;
}

export default useClickTracker;