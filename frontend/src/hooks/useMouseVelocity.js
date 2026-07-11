import { useState, useEffect } from "react";

function useMouseVelocity() {
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = Date.now();

    function handleMove(event) {
      const now = Date.now();

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const dt = now - lastTime;

      if (dt > 0) {
        setVelocity((distance / dt).toFixed(2));
      }

      lastX = event.clientX;
      lastY = event.clientY;
      lastTime = now;
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return velocity;
}

export default useMouseVelocity;