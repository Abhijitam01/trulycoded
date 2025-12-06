"use client";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

// Custom Cursor Component
interface CustomCursorProps {
  enabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  enabled = true,
  className,
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  

  const springX = useSpring(x, { stiffness: 1000, damping: 40, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 1000, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Use RAF for smooth, optimized updates
    const updateMousePosition = (e: MouseEvent) => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // More efficient hover detection using mouseover instead of enter/leave
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, [role="button"], .cursor-pointer, .cursor-grab')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Use passive listeners for better scroll performance
    document.addEventListener('mousemove', updateMousePosition, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver, { passive: true });

    return () => {
      // Restore default cursor on cleanup
      document.body.style.cursor = 'auto';
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return <>{children}</>;

  return (
    <>
      {children}
      <motion.div
        ref={cursorRef}
        className={cn(
          "fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50",
          "will-change-transform",
          className
        )}
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: "hsl(217 50% 48%)", // Force blue color in light mode
        }}
        animate={{
          scale: isClicking ? 0.9 : isHovering ? 1.25 : 1,
          backgroundColor: isHovering ? "hsl(217 60% 55%)" : "hsl(217 50% 48%)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 30 },
          backgroundColor: { duration: 0.2 }
        }}
      />
    </>
  );
};

// Magnetic Element Wrapper
interface MagneticElementProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
  disabled?: boolean;
}

export const MagneticElement: React.FC<MagneticElementProps> = ({
  children,
  strength = 0.3,
  className,
  disabled = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (disabled || !elementRef.current) return;

    const rect = elementRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={elementRef}
      className={cn("transition-transform duration-300", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      whileHover={!disabled ? { scale: 1.05 } : {}}
    >
      {children}
    </motion.div>
  );
};

// Hover Reveal Component
interface HoverRevealProps {
  children: React.ReactNode;
  revealContent: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
}

export const HoverReveal: React.FC<HoverRevealProps> = ({
  children,
  revealContent,
  direction = "up",
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTransformOrigin = () => {
    switch (direction) {
      case "up":
        return "bottom center";
      case "down":
        return "top center";
      case "left":
        return "right center";
      case "right":
        return "left center";
      default:
        return "bottom center";
    }
  };

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return { y: "100%", opacity: 0 };
      case "down":
        return { y: "-100%", opacity: 0 };
      case "left":
        return { x: "100%", opacity: 0 };
      case "right":
        return { x: "-100%", opacity: 0 };
      default:
        return { y: "100%", opacity: 0 };
    }
  };

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-background/95 backdrop-blur-sm"
        initial={getInitialTransform()}
        animate={isHovered ? { x: 0, y: 0, opacity: 1 } : getInitialTransform()}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ transformOrigin: getTransformOrigin() }}
      >
        {revealContent}
      </motion.div>
    </div>
  );
};



interface FloatingElementProps {
  children: React.ReactNode;
  intensity?: number;
  duration?: number;
  className?: string;
}

export const FloatingElement: React.FC<FloatingElementProps> = ({
  children,
  intensity = 10,
  duration = 3,
  className,
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -intensity, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

// Ripple Effect Component
interface RippleEffectProps {
  children: React.ReactNode;
  color?: string;
  duration?: number;
  className?: string;
}

export const RippleEffect: React.FC<RippleEffectProps> = ({
  children,
  color = "rgba(255, 255, 255, 0.3)",
  duration = 600,
  className,
}) => {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const rippleX = e.clientX - rect.left;
    const rippleY = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x: rippleX, y: rippleY };

    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, duration);
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      onClick={handleClick}
    >
      {children}
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            backgroundColor: color,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 4, opacity: 0 }}
          transition={{ duration: duration / 1000, ease: "easeOut" }}
        />
      ))}
    </div>
  );
};


// Interactive Card Component
interface InteractiveCardProps {
  children: React.ReactNode;
  hoverable?: boolean;
  tilt?: boolean;
  glow?: boolean;
  className?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  hoverable = true,
  tilt = false,
  glow = false,
  className,
}) => {
  return (
    <motion.div
      className={cn(
        "transition-all duration-300",
        hoverable && "hover:shadow-lg",
        glow && "hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]",
        className
      )}
      whileHover={hoverable ? { scale: 1.02, y: -2 } : {}}
      whileTap={hoverable ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.div>
  );
};
