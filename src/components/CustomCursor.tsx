import { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.id = "custom-cursor";
    document.body.appendChild(cursor);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let cursorX = mouseX;
    let cursorY = mouseY;
    let animationFrame: number;

    // Lerp function for smooth trailing
    function lerp(a: number, b: number, n: number) {
      return (1 - n) * a + n * b;
    }

    const render = () => {
      cursorX = lerp(cursorX, mouseX, 0.18); // adjust 0.18 for more/less delay
      cursorY = lerp(cursorY, mouseY, 0.18);
      cursor.style.left = cursorX + "px";
      cursor.style.top = cursorY + "px";
      animationFrame = requestAnimationFrame(render);
    };

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Always show custom cursor, always hide system cursor
    const handlePointerOver = (e: MouseEvent) => {
      document.body.style.cursor = "none";
      // Optionally, keep hover effect for interactive elements
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "button, a, input, textarea, select, [role=button], [tabindex]:not([tabindex='-1'])"
        )
      ) {
        cursor.classList.add("custom-cursor-hover");
      } else {
        cursor.classList.remove("custom-cursor-hover");
      }
    };

    // Add hover effect for interactive elements
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "button, a, input, textarea, select, [role=button], [tabindex]:not([tabindex='-1'])"
        )
      ) {
        cursor.classList.add("custom-cursor-hover");
      }
    };
    const handleMouseLeave = () => {
      cursor.classList.remove("custom-cursor-hover");
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handlePointerOver);
    window.addEventListener("mouseenter", handleMouseEnter, true);
    window.addEventListener("mouseleave", handleMouseLeave, true);

    document.body.style.cursor = "none";
    animationFrame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handlePointerOver);
      window.removeEventListener("mouseenter", handleMouseEnter, true);
      window.removeEventListener("mouseleave", handleMouseLeave, true);
      document.body.style.cursor = "";
      document.body.removeChild(cursor);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}
