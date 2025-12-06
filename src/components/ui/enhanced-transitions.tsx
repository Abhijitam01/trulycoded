"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

// Enhanced Page Transition
interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down" | "fade" | "scale" | "rotate";
  duration?: number;
  delay?: number;
}

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className,
  direction = "fade",
  duration = 0.6,
  delay = 0,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const getInitialVariant = () => {
    switch (direction) {
      case "left":
        return { x: "-100%", opacity: 0 };
      case "right":
        return { x: "100%", opacity: 0 };
      case "up":
        return { y: "-100%", opacity: 0 };
      case "down":
        return { y: "100%", opacity: 0 };
      case "scale":
        return { scale: 0.8, opacity: 0 };
      case "rotate":
        return { rotate: -180, scale: 0.8, opacity: 0 };
      case "fade":
      default:
        return { opacity: 0 };
    }
  };

  const getAnimateVariant = () => {
    switch (direction) {
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "scale":
        return { scale: 1, opacity: 1 };
      case "rotate":
        return { rotate: 0, scale: 1, opacity: 1 };
      case "fade":
      default:
        return { opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialVariant()}
      animate={isVisible ? getAnimateVariant() : getInitialVariant()}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Staggered Reveal Animation
interface StaggeredRevealProps {
  children: React.ReactNode;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  threshold?: number;
}

export const StaggeredReveal: React.FC<StaggeredRevealProps> = ({
  children,
  stagger = 0.1,
  direction = "up",
  className,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  const getInitialVariant = () => {
    switch (direction) {
      case "up":
        return { y: 30, opacity: 0 };
      case "down":
        return { y: -30, opacity: 0 };
      case "left":
        return { x: 30, opacity: 0 };
      case "right":
        return { x: -30, opacity: 0 };
      default:
        return { y: 30, opacity: 0 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
          },
        },
      }}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: getInitialVariant(),
            visible: {
              x: 0,
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Parallax Scroll Component
interface ParallaxScrollProps {
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
  offset?: string[];
}

export const ParallaxScroll: React.FC<ParallaxScrollProps> = ({
  children,
  speed = 0.5,
  direction = "up",
  className,
  offset = ["start end", "end start"] as any,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  const springY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      ref={ref}
      style={{ y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Morphing Background
interface MorphingBackgroundProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  duration?: number;
}

export const MorphingBackground: React.FC<MorphingBackgroundProps> = ({
  children,
  className,
  colors = [
    "hsl(var(--primary)/0.1)",
    "hsl(var(--accent)/0.1)",
    "hsl(var(--primary)/0.05)",
  ],
  duration = 10,
}) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(45deg, ${colors[0]}, transparent, ${colors[1]})`,
            `linear-gradient(135deg, ${colors[1]}, transparent, ${colors[2]})`,
            `linear-gradient(225deg, ${colors[2]}, transparent, ${colors[0]})`,
            `linear-gradient(315deg, ${colors[0]}, transparent, ${colors[1]})`,
          ],
        }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// Text Reveal Animation
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  splitBy?: "word" | "character" | "line";
}

export const TextReveal: React.FC<TextRevealProps> = ({
  text,
  className,
  delay = 0,
  duration = 0.6,
  splitBy = "word",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const splitText = () => {
    switch (splitBy) {
      case "character":
        return text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay: index * 0.02 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ));
      case "line":
        return text.split("\n").map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay: index * 0.1 }}
          >
            {line}
          </motion.div>
        ));
      case "word":
      default:
        return text.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration, delay: index * 0.05 }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ));
    }
  };

  return (
    <div ref={ref} className={className}>
      {splitText()}
    </div>
  );
};

// Slide In Animation
interface SlideInProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  direction = "up",
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getInitialVariant = () => {
    switch (direction) {
      case "left":
        return { x: -100, opacity: 0 };
      case "right":
        return { x: 100, opacity: 0 };
      case "up":
        return { y: -100, opacity: 0 };
      case "down":
        return { y: 100, opacity: 0 };
      default:
        return { y: -100, opacity: 0 };
    }
  };

  const getAnimateVariant = () => {
    switch (direction) {
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialVariant()}
      animate={isVisible ? getAnimateVariant() : getInitialVariant()}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Scale In Animation
interface ScaleInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  scale?: number;
}

export const ScaleIn: React.FC<ScaleInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  scale = 0.8,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale, opacity: 0 }}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Rotate In Animation
interface RotateInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
  angle?: number;
}

export const RotateIn: React.FC<RotateInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  angle = 180,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ rotate: angle, opacity: 0 }}
      animate={isVisible ? { rotate: 0, opacity: 1 } : { rotate: angle, opacity: 0 }}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Fade In Animation
interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  threshold?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  className,
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  );
};

// Performance Optimized Transition
interface OptimizedTransitionProps {
  children: React.ReactNode;
  className?: string;
  reducedMotion?: boolean;
  fallback?: React.ReactNode;
}

export const OptimizedTransition: React.FC<OptimizedTransitionProps> = ({
  children,
  className,
  reducedMotion = false,
  fallback,
}) => {
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  if (reducedMotion || prefersReducedMotion) {
    return (
      <div className={className}>
        {fallback || children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
