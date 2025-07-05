"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function ProgressBar({ progress = 75, totalXP = 1000, currentXP = 750 }) {
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);

  useGSAP(() => {
    // Animate the progress bar
    gsap.fromTo(
      progressBarRef.current,
      { width: "0%" },
      {
        width: `${progress}%`,
        duration: 2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Animate the progress text
    gsap.fromTo(
      ".progress-text",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.3,
      }
    );

    // Animate the chips
    gsap.fromTo(
      ".level-chip",
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.8,
      }
    );
  }, []);

  return (
    <div className="w-full space-y-4" ref={progressRef}>
      {/* Progress Header */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          Progress
        </span>
        <span className="text-sm font-semibold progress-text">{progress}%</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"
          style={{ width: "0%" }}
        ></div>
      </div>

      <div className="flex items-center justify-between">
        <div className="level-chip inline-flex items-center px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
          Gold
        </div>
        <div className="text-center">
          <p className="text-xs font-medium text-muted-foreground">
            {totalXP - currentXP} XP More
          </p>
        </div>
        <div className="level-chip inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
          Platinum
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
