"use client";
import React, { useEffect, useRef } from "react";

const WordAnimation: React.FC = () => {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    spansRef.current.forEach((span, idx) => {
      if (!span) return;

      // Event listener for click
      const handleClick = (e: MouseEvent) => {
        (e.target as HTMLElement).classList.add("active");
      };
      span.addEventListener("click", handleClick);

      // Event listener for animation end
      const handleAnimationEnd = (e: AnimationEvent) => {
        (e.target as HTMLElement).classList.remove("active");
      };
      span.addEventListener("animationend", handleAnimationEnd);

      // Initial animation
      setTimeout(() => {
        span.classList.add("active");
      }, 750 * (idx + 1));

      // Clean up event listeners
      return () => {
        span.removeEventListener("click", handleClick);
        span.removeEventListener("animationend", handleAnimationEnd);
      };
    });
  }, []);

  return (
    <div className="word flex gap-4 font-bold">
      {["W", "E", "L", "C", "O", "M", "E"].map((letter, idx) => (
        <span
          key={idx}
          ref={(el) => {
            spansRef.current[idx] = el;
          }}
          className="word text-4xl md:text-8xl th"
        >
          {letter}
        </span>
      ))}
    </div>
  );
};

export default WordAnimation;
