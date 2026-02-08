"use client";

import { useEffect } from "react";

export default function BackgroundCursorEffect() {
  useEffect(() => {
    const root = document.body;

    const setPos = (x: number, y: number) => {
      root.style.setProperty("--cursor-x", `${x}px`);
      root.style.setProperty("--cursor-y", `${y}px`);
    };

    const handleMove = (event: PointerEvent) => {
      setPos(event.clientX, event.clientY);
    };

    const handleLeave = () => {
      setPos(window.innerWidth / 2, window.innerHeight / 3);
    };

    setPos(window.innerWidth / 2, window.innerHeight / 3);
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return null;
}
