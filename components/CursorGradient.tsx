// components/CursorGradient.tsx
'use client';

import React, { useRef, useEffect } from 'react';

interface CursorGradientProps {
  /**
   * Size of the gradient circle (in Tailwind width/height classes)
   * @default 'w-96 h-96'
   */
  size?: string;
  
  /**
   * Gradient colors (CSS color values)
   * @default { start: 'rgb(var(--brand-background-strong))', end: 'var(--static-transparent)' }
   */
  colors?: {
    start: string;
    end: string;
  };
  
  /**
   * Opacity of the gradient (0-1)
   * @default 0.5
   */
  opacity?: number;
  
  /**
   * Smoothing factor for movement (0.01-0.5)
   * Lower values = smoother but slower movement
   * @default 0.1
   */
  smoothing?: number;
  
  /**
   * Background pattern configuration
   * @default { color: 'rgb(var(--brand-on-background-weak))', size: 'var(--static-space-2)' }
   */
  pattern?: {
    color: string;
    size: string;
  };
  
  /**
   * Additional class names for the container
   */
  className?: string;
}

/**
 * A smooth, cursor-following gradient component with background pattern
 * 
 * @example
 * <CursorGradient
 *   size="w-64 h-64"
 *   colors={{ start: '#00FF00', end: 'transparent' }}
 *   opacity={0.7}
 *   smoothing={0.2}
 * />
 */
const CursorGradient: React.FC<CursorGradientProps> = ({
  size = 'w-96 h-96',
  colors = {
    start: 'rgb(var(--brand-background-strong))',
    end: 'var(--static-transparent)'
  },
  opacity = 0.5,
  smoothing = 0.1,
  pattern = {
    color: 'rgb(var(--brand-on-background-weak))',
    size: 'var(--static-space-2)'
  },
  className = ''
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const targetPos = useRef({ x: 0, y: 0 });
  const dimensions = useRef({ width: 0, height: 0 });

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
        className={`absolute opacity-50 pointer-events-none aspect-square rounded-full will-change-transform ${size}`}
        style={{
          opacity,
          left: '0',
          top: '0',
          background: `radial-gradient(
            circle closest-side,
            ${colors.start} 0%,
            ${colors.end} 100%
          )`,
        }}
      />
      
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${pattern.color} 1px, transparent 1px)`,
          backgroundSize: `${pattern.size} ${pattern.size}`,
        }}
      />
    </div>
  );
};

export default CursorGradient;