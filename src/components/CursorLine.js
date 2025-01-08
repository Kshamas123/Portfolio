import React, { useRef, useEffect } from "react";

const LaserTrail = () => {
  const canvasRef = useRef(null);
  const trail = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;
      trail.current.push({ x, y, opacity: 1 });
    };

    document.addEventListener("mousemove", handleMouseMove);

    const drawTrail = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each point in the trail
      trail.current.forEach((point, index) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, 4, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(138, 43, 226, ${point.opacity})`; // Purple laser color
        ctx.fill();

        // Gradually fade the trail
        trail.current[index].opacity -= 0.02;
      });

      // Remove faded points
      trail.current = trail.current.filter((point) => point.opacity > 0);

      requestAnimationFrame(drawTrail);
    };

    drawTrail();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: 1000 }} />;
};

export default LaserTrail;

