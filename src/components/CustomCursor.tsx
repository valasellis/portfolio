// CustomCursor.tsx

import React, { useState, useEffect, useCallback } from "react";

// A custom hook to handle mouse position and element detection
const useSmoothCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInteractive, setIsInteractive] = useState(false);
  // Detects if we are over a dark background (needs a light/white cursor)
  const [isDarkSurface, setIsDarkSurface] = useState(false);
  // NEW: Detects if we need to force a dark (black) cursor (e.g., over light text)
  const [isForceDark, setIsForceDark] = useState(false);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target as HTMLElement;

    // 1. INTERACTIVE CHECK: Check for links, buttons, or elements flagged for a pointer.
    const interactiveElements = target.closest(
      "a, button, [data-cursor-pointer]"
    );

    // 2. SURFACE COLOR CHECK:
    // a) Standard detection: Check for dark background (needs light cursor)
    const darkSurfaceElements = target.closest("[data-cursor-inverse]");

    // b) NEW: Forced dark cursor: Check for elements flagged to force a dark cursor
    const forceDarkElements = target.closest("[data-cursor-dark]");

    // Set states
    setIsInteractive(!!interactiveElements);
    setIsDarkSurface(!!darkSurfaceElements);
    setIsForceDark(!!forceDarkElements);
  }, []); // END of handleMouseMove

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [handleMouseMove]);

  // Return all relevant states
  return { position, isInteractive, isDarkSurface, isForceDark };
};

// -----------------------------------------------------------------------------

const CustomCursor: React.FC = () => {
  const { position, isInteractive, isDarkSurface, isForceDark } =
    useSmoothCursor();

  // --- 1. INTERACTIVE HIDE LOGIC ---
  if (isInteractive) {
    // Show the default system cursor
    // FIX: Check if running on the client before accessing document
    if (typeof document !== "undefined") {
      document.body.style.cursor = "default";
    }
    return null; // Do not render the custom cursor
  }

  // Hide the default system cursor when the custom one is active
  // FIX: Check if running on the client before accessing document
  if (typeof document !== "undefined") {
    document.body.style.cursor = "none";
  }

  // --- 2. DYNAMIC COLOR LOGIC ---
  // Increased size slightly to make the outline more prominent (w-5 h-5 is 20px)
  const size = "w-5 h-5";

  // We now determine a FILL color and an OUTLINE color for guaranteed visibility.
  let fillClass;
  let outlineClass;

  if (isForceDark) {
    // Force the cursor to be a dark (black) fill with a light (white) outline.
    // This is for light backgrounds/text where the default black outline might be hard to see.
    fillClass = "bg-gray-900";
    outlineClass = "border-white";
  } else if (isDarkSurface) {
    // Background is dark, so the cursor must be light (white fill) with a dark (black) outline.
    fillClass = "bg-white";
    outlineClass = "border-gray-900";
  } else {
    // Default: Background is light. Use a transparent fill (hollow circle) with a dark outline.
    // The transparent fill allows the background color to show through, but the dark border ensures visibility.
    // We will use a **white fill with a black outline** for the best universal visibility.
    fillClass = "bg-white";
    outlineClass = "border-gray-900";
  }

  return (
    <div
      // Note: Changed 'border-2' to 'border-4' to make the outline more visible against all colors
      className={`fixed top-0 left-0 pointer-events-none rounded-full z-[9999] transition-all duration-200 ease-out border-4 ${size} ${fillClass} ${outlineClass}`}
      style={{
        // Center the cursor circle on the actual mouse position
        transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
