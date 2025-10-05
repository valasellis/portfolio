import React, { useEffect, useState } from "react";

const Loading: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [hideAnim, setHideAnim] = useState(false);

  useEffect(() => {
    // start hide animation shortly before removing from DOM
    const fadeTimer = setTimeout(() => setHideAnim(true), 2800);
    const timer = setTimeout(() => setVisible(false), 3200);
    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`loading-overlay ${
        hideAnim ? "hide animate-fade-out" : "fade-in"
      }`}
      aria-hidden={!visible}
    >
      <div className="loading-spinner" />
    </div>
  );
};

export default Loading;
