"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Swipe Navigation Hook
export const useSwipeNavigation = (sections: string[], threshold = 50) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isSwipeEnabled, setIsSwipeEnabled] = useState(false);

  const handleSwipe = (direction: "left" | "right") => {
    if (!isSwipeEnabled) return;

    if (direction === "left" && currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    } else if (direction === "right" && currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  const goToSection = (index: number) => {
    setCurrentSection(Math.max(0, Math.min(index, sections.length - 1)));
  };

  useEffect(() => {
    // Enable swipe on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsSwipeEnabled(isMobile);
  }, []);

  return {
    currentSection,
    handleSwipe,
    goToSection,
    isSwipeEnabled,
  };
};

// Swipeable Container
interface SwipeableContainerProps {
  children: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
  className?: string;
  disabled?: boolean;
}

export const SwipeableContainer: React.FC<SwipeableContainerProps> = ({
  children,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  className,
  disabled = false,
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleDragEnd = (event: any, info: PanInfo) => {
    if (disabled) return;

    const { offset, velocity } = info;

    // Check if swipe is significant enough
    if (Math.abs(offset.x) > threshold || Math.abs(velocity.x) > 500) {
      if (offset.x > 0) {
        onSwipeRight?.();
      } else {
        onSwipeLeft?.();
      }
    }

    if (Math.abs(offset.y) > threshold || Math.abs(velocity.y) > 500) {
      if (offset.y > 0) {
        onSwipeDown?.();
      } else {
        onSwipeUp?.();
      }
    }

    // Reset position
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={cn("touch-none", className)}
      drag={!disabled}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.2}
      onDragEnd={handleDragEnd}
      style={{ x, y }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
};

// Mobile Carousel with Swipe
interface MobileCarouselProps {
  items: React.ReactNode[];
  className?: string;
  showIndicators?: boolean;
  showArrows?: boolean;
  autoPlay?: boolean;
  interval?: number;
}

export const MobileCarousel: React.FC<MobileCarouselProps> = ({
  items,
  className,
  showIndicators = true,
  showArrows = false,
  autoPlay = false,
  interval = 3000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSwipeLeft = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const slideWidth = 100; // Percentage
  const translateX = -currentIndex * slideWidth;

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <SwipeableContainer
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
        className="flex"
      >
        <motion.div
          ref={containerRef}
          className="flex"
          animate={{ x: `${translateX}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full"
              style={{ width: `${slideWidth}%` }}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </SwipeableContainer>

      {/* Navigation Arrows */}
      {showArrows && (
        <>
          <button
            onClick={handleSwipeRight}
            disabled={currentIndex === 0}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={handleSwipeLeft}
            disabled={currentIndex === items.length - 1}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <div className="flex justify-center mt-4 space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-muted hover:bg-muted-foreground"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Pull to Refresh
interface PullToRefreshProps {
  children: React.ReactNode;
  onRefresh: () => Promise<void>;
  threshold?: number;
  className?: string;
}

export const PullToRefresh: React.FC<PullToRefreshProps> = ({
  children,
  onRefresh,
  threshold = 80,
  className,
}) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [pullDistance, setPullDistance] = useState(0);
  const y = useMotionValue(0);

  const handleDragEnd = async (event: any, info: PanInfo) => {
    if (info.offset.y > threshold && !isRefreshing) {
      setIsRefreshing(true);
      await onRefresh();
      setIsRefreshing(false);
    }
    y.set(0);
    setPullDistance(0);
  };

  const handleDrag = (event: any, info: PanInfo) => {
    if (info.offset.y > 0) {
      setPullDistance(Math.min(info.offset.y, threshold));
    }
  };

  const pullProgress = useTransform(y, [0, threshold], [0, 1]);

  return (
    <motion.div
      className={cn("relative", className)}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={{ top: 0.2, bottom: 0 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      style={{ y }}
    >
      {/* Pull indicator */}
      <motion.div
        className="absolute top-0 left-0 right-0 flex justify-center items-center h-16 -translate-y-full"
        style={{ opacity: pullProgress }}
      >
        <motion.div
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
          animate={{ rotate: isRefreshing ? 360 : 0 }}
          transition={{ duration: 1, repeat: isRefreshing ? Infinity : 0 }}
        />
      </motion.div>

      {children}
    </motion.div>
  );
};

// Touch Feedback
interface TouchFeedbackProps {
  children: React.ReactNode;
  feedback?: "scale" | "ripple" | "glow";
  intensity?: number;
  className?: string;
}

export const TouchFeedback: React.FC<TouchFeedbackProps> = ({
  children,
  feedback = "scale",
  intensity = 0.95,
  className,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [ripplePos, setRipplePos] = useState({ x: 0, y: 0 });

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPressed(true);
    
    if (feedback === "ripple") {
      const rect = e.currentTarget.getBoundingClientRect();
      setRipplePos({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
    }
  };

  const handleTouchEnd = () => {
    setIsPressed(false);
  };

  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      animate={{
        scale: isPressed && feedback === "scale" ? intensity : 1,
      }}
      transition={{ duration: 0.1 }}
    >
      {children}

      {/* Ripple effect */}
      {feedback === "ripple" && (
        <motion.div
          className="absolute bg-white/20 rounded-full pointer-events-none"
          style={{
            left: ripplePos.x,
            top: ripplePos.y,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{
            scale: isPressed ? 4 : 0,
            opacity: isPressed ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Glow effect */}
      {feedback === "glow" && (
        <motion.div
          className="absolute inset-0 bg-primary/20 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPressed ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
};

// Mobile Navigation Gestures
export const MobileNavigationGestures: React.FC = () => {
  const [gestureEnabled, setGestureEnabled] = useState(false);

  useEffect(() => {
    // Enable gestures only on mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setGestureEnabled(isMobile);
  }, []);

  useEffect(() => {
    if (!gestureEnabled) return;

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      // Swipe detection
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        const sections = ['hero', 'our-work', 'services', 'case-studies', 'about'];
        const currentSection = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (currentSection) {
          const currentIndex = sections.indexOf(currentSection);
          
          if (deltaX > 0 && currentIndex > 0) {
            // Swipe right - go to previous section
            const element = document.getElementById(sections[currentIndex - 1]);
            element?.scrollIntoView({ behavior: 'smooth' });
          } else if (deltaX < 0 && currentIndex < sections.length - 1) {
            // Swipe left - go to next section
            const element = document.getElementById(sections[currentIndex + 1]);
            element?.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [gestureEnabled]);

  return null;
};
