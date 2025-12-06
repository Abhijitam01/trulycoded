"use client";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";
import { useTheme } from "@/contexts/ThemeContext";

type WordRevealProps = {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
};

const WordReveal = ({ word, range, progress }: WordRevealProps) => {
  const eased = useTransform(progress, range, [0, 1], { clamp: true });
  const opacity = useTransform(eased, [0, 1], [0.05, 1]);
  const y = useTransform(eased, [0, 1], [20, 0]);
  const blur = useTransform(eased, [0, 1], [8, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="inline-block align-baseline will-change-transform transition-transform duration-500 ease-out"
    >
      {word}&nbsp;
    </motion.span>
  );
};

export default function TextScroll() {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const { theme } = useTheme();

  const colorRange = useMemo(
    () => (theme === "dark" ? ["#e5e7eb", "#f8fafc"] : ["#9ca3af", "#111111"]),
    [theme]
  );

  const activeColor = useTransform(scrollYProgress, [0, 1], colorRange);

  const lines = useMemo(
    () => [
     " A strategic tech agency for businesses and brands that want to grow.",
"We create simple, impactful designs and websites", "that build trust, attract customers, and deliver real results.",
    ],
    []
  );

  const ranges = useMemo(() => {
    const totalWords = lines.reduce((count, line) => count + line.split(" ").length, 0);
    const step = totalWords > 0 ? 1 / totalWords : 1;
    let cursor = 0;
    return lines.map((line) =>
      line.split(" ").map(() => {
        const start = cursor;
        cursor += step;
        const end = Math.min(start + step * 1.8, 1);
        return [start, end] as [number, number];
      })
    );
  }, [lines]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-transparent px-6 text-center"
    >
      {/* Label */}
      <motion.p
        style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0.4, 1]) }}
        className="mb-2 text-[0.75rem] font-medium uppercase tracking-[0.5em] text-neutral-600 dark:text-neutral-400"
      >
        Your Unfair Advantage
      </motion.p>

      {/* Diamond */}
      <motion.div
        style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [0.4, 1]) }}
        className="mb-6 h-[6px] w-[6px] rotate-45 rounded-[1px] bg-neutral-500/60 dark:bg-neutral-300/70"
      />

      {/* Animated Text */}
      <motion.h1
        style={{
          opacity: useTransform(scrollYProgress, [0, 1], [0.3, 1]),
        }}
        className="max-w-3xl space-y-4 text-3xl font-semibold leading-snug text-neutral-900 transition-colors duration-700 dark:text-neutral-100 md:text-5xl"
      >
        {lines.map((line, lineIndex) => (
          <span key={line} className="block">
            {line.split(" ").map((word, wordIndex) => {
              const [start, end] = ranges[lineIndex][wordIndex];
              const opacity = useTransform(scrollYProgress, [start, end], [0.05, 1]);
              const y = useTransform(scrollYProgress, [start, end], [20, 0]);
              const blur = useTransform(scrollYProgress, [start, end], [8, 0]);
              const filter = useTransform(blur, (v) => `blur(${v}px)`);

              return (
                <motion.span
                  key={`${line}-${word}-${wordIndex}`}
                  style={{ opacity, y, filter, color: activeColor }}
                  className="inline-block align-baseline transition-transform duration-500 ease-out will-change-transform"
                >
                  {word}&nbsp;
                </motion.span>
              );
            })}
          </span>
        ))}
      </motion.h1>
    </section>
  );
}
