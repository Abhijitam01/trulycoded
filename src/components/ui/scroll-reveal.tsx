"use client";
import React, { useRef, useEffect } from "react";
import { motion, useInView, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  stagger?: number;
  staggerChildren?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  distance = 50,
  className,
  once = true,
  threshold = 0.1,
  stagger = 0,
  staggerChildren = false,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: `${-threshold * 100}%`
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const x = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  
  // Spring animations for smoother motion
  const springY = useSpring(y, { stiffness: 100, damping: 30 });
  const springX = useSpring(x, { stiffness: 100, damping: 30 });
  const springScale = useSpring(scale, { stiffness: 100, damping: 30 });

  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
      case "fade":
        return { opacity: 0 };
      case "scale":
        return { scale: 0.8, opacity: 0 };
      case "rotate":
        return { rotate: -10, scale: 0.8, opacity: 0 };
      default:
        return { y: distance, opacity: 0 };
    }
  };

  const getAnimateStyles = () => {
    switch (direction) {
      case "up":
        return { y: 0, opacity: 1 };
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
        return { x: 0, opacity: 1 };
      case "right":
        return { x: 0, opacity: 1 };
      case "fade":
        return { opacity: 1 };
      case "scale":
        return { scale: 1, opacity: 1 };
      case "rotate":
        return { rotate: 0, scale: 1, opacity: 1 };
      default:
        return { y: 0, opacity: 1 };
    }
  };

  const getParallaxStyle = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: springY };
      case "left":
      case "right":
        return { x: springX };
      case "scale":
        return { scale: springScale };
      case "rotate":
        return { rotate, scale: springScale };
      default:
        return {};
    }
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={getInitialStyles()}
      animate={isInView ? getAnimateStyles() : getInitialStyles()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
        staggerChildren: staggerChildren ? stagger : 0,
      }}
      style={isInView ? getParallaxStyle() : {}}
    >
      {children}
    </motion.div>
  );
};

// Staggered children component
export const StaggeredReveal: React.FC<{
  children: React.ReactNode;
  stagger?: number;
  className?: string;
}> = ({ children, stagger = 0.1, className }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
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
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94],
              }
            },
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Advanced parallax component
export const ParallaxReveal: React.FC<{
  children: React.ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}> = ({ children, speed = 0.5, direction = "up", className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === "up" ? [100 * speed, -100 * speed] : [-100 * speed, 100 * speed]
  );

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
