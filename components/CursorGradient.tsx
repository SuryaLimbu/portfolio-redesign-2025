// components/CursorGradient.tsx
'use client';

import React, { useRef, useEffect } from 'react';

interface CursorGradientProps {
  size?: string;
  colors?: {
    light: {
      gradientStart: string;
      gradientEnd: string;
      pattern: string;
    };
    dark: {
      gradientStart: string;
      gradientEnd: string;
      pattern: string;
    };
  };
  opacity?: {
    light: number;
    dark: number;
  };
  smoothing?: number;
  patternSize?: string;
  className?: string;
}

const CursorGradient: React.FC<CursorGradientProps> = ({
  size = 'w-96 h-96',
  colors = {
    light: {
      gradientStart: '#e5f4e3',
      gradientEnd: 'transparent',
      pattern: '#9dc183'
    },
    dark: {
      gradientStart: '#1a3a1e',
      gradientEnd: 'transparent',
      pattern: '#2d5b33'
    }
  },
  opacity = { light: 1, dark: 1},
  smoothing = 0.1,
  patternSize = 'var(--static-space-2)',
  className = ''
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const dimensions = useRef({ width: 0, height: 0 });

  // Theme detection
  const getCurrentTheme = () => {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  };

  // Update styles when theme changes
  useEffect(() => {
    const updateThemeStyles = () => {
      const theme = getCurrentTheme();
      if (gradientRef.current) {
        gradientRef.current.style.background = `radial-gradient(
          circle closest-side,
          ${colors[theme].gradientStart} 0%,
          ${colors[theme].gradientEnd} 100%
        )`;
        gradientRef.current.style.opacity = `${opacity[theme]}`;
      }
      if (patternRef.current) {
        patternRef.current.style.backgroundImage = 
          `radial-gradient(${colors[theme].pattern} 1px, transparent 1px)`;
      }
    };

    const observer = new MutationObserver(updateThemeStyles);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    updateThemeStyles();
    return () => observer.disconnect();
  }, [colors, opacity]);

  // Animation and movement logic
  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    const updateDimensions = () => {
      dimensions.current = {
        width: gradient.offsetWidth,
        height: gradient.offsetHeight
      };
    };

    updateDimensions();
    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(gradient);

    const animate = () => {
      const centerX = targetPos.current.x - dimensions.current.width / 2;
      const centerY = targetPos.current.y - dimensions.current.height / 2;

      pos.current.x += (centerX - pos.current.x) * smoothing;
      pos.current.y += (centerY - pos.current.y) * smoothing;

      gradient.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    // Initialize to center position
    targetPos.current = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
    };
  }, [smoothing]);

  return (
    <div className={`fixed inset-0 -z-10 overflow-hidden ${className}`}>
      <div
        ref={gradientRef}
        className={`absolute pointer-events-none aspect-square rounded-full will-change-transform ${size}`}
        style={{
          left: '0',
          top: '0',
          transition: 'opacity 300ms ease-out, background 300ms ease-out'
        }}
      />
      
      <div
        ref={patternRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.2,
          backgroundSize: `${patternSize} ${patternSize}`,
          transition: 'background-image 300ms ease-out'
        }}
      />
    </div>
  );
};

export default CursorGradient;