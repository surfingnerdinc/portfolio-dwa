import React, { useState, useEffect } from "react";

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  isDark?: boolean;
}

export default function BrowserFrame({ children, className = "", style, isDark }: BrowserFrameProps) {
    const [isDarkState, setIsDarkState] = useState(isDark);

    // Sync with parent prop changes
    useEffect(() => {
      setIsDarkState(isDark);
    }, [isDark]);

    // Optionally sync with localStorage theme if isDark is undefined
    useEffect(() => {
      if (typeof isDark === 'undefined') {
        const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('site-theme') : null;
        if (savedTheme) setIsDarkState(savedTheme === 'dark');
      }
    }, [isDark]);

  return (
    <div
      className={`relative rounded-xl overflow-hidden shadow-xl p-0 flex items-center justify-center ${className}`}
      style={style}
    >
      {/* Stylized browser frame SVG */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg width="100%" height="100%" viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <rect x="2" y="2" width="596" height="396" rx="18" stroke={isDarkState ? "white" : "#222"} strokeWidth="4" fill="none" />
          <rect x="2" y="2" width="596" height="40" rx="18" stroke={isDarkState ? "white" : "#222"} strokeWidth="4" fill="none" />
          <circle cx="30" cy="22" r="6" fill={isDarkState ? "#fff" : "#222"} />
          <circle cx="50" cy="22" r="6" fill={isDarkState ? "#fff" : "#222"} />
          <circle cx="70" cy="22" r="6" fill={isDarkState ? "#fff" : "#222"} />
        </svg>
      </div>
      {/* Content slot */}
      <div className="relative z-20 w-full h-full flex flex-col items-center justify-center px-10 py-12">
        {children}
      </div>
    </div>
  );
}