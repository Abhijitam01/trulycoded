import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LazyImage from "./ui/lazy-image";
import { openIntroCall } from "@/lib/utils";

const Showcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  return (
    <section id="showcase" className="relative overflow-hidden py-20 sm:py-24 lg:py-32" ref={ref}>
      <div className="relative mx-auto flex w-full max-w-[96rem] flex-col items-center px-4 sm:px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-y-0 left-1/2 w-[160vw] -translate-x-1/2 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.14)_0%,_rgba(10,21,48,0)_60%)]" />
          <div className="absolute inset-y-0 left-0 w-full opacity-[0.12]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.12) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
          </div>
          <div className="absolute right-[-15%] top-1/3 hidden h-[420px] w-[420px] -rotate-12 rounded-[48px] border border-white/8 bg-white/[0.02] shadow-[0_35px_120px_rgba(5,10,35,0.45)] backdrop-blur-xl lg:block">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-black/30" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="grid grid-cols-5 gap-4">
                {[...Array(25)].map((_, idx) => (
                  <span key={idx} className="h-2 w-2 rounded-full bg-white/70" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <motion.h2
            initial={{ color: "#f3f4f6" }}
            animate={isInView ? { color: "hsl(var(--foreground))" } : { color: "#f3f4f6" }}
            transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
            className="mb-8 px-4 text-2xl font-bold leading-tight text-foreground sm:mb-10 sm:text-3xl md:text-4xl lg:mb-12 lg:text-5xl xl:text-6xl"
          >
            Let's create something amazing together.
          </motion.h2>

          {/* Decorative Arrows */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-4 flex flex-wrap items-center justify-center gap-3 px-4 sm:gap-6"
          >
            <div className="hidden items-center gap-1 sm:flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.span
                  key={`left-dot-${i}`}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 0.35, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
                  className="h-3 w-3 rounded-full bg-zinc-700/40 dark:bg-white/50"
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl bg-[#4d7bff] px-3 py-2 pr-4 text-left shadow-[0_20px_40px_rgba(15,23,42,0.35)] transition-transform duration-300 sm:gap-4 sm:px-2 sm:py-1 sm:pr-6"
              onClick={openIntroCall}
              type="button"
            >
              <span className="relative flex h-10 w-10 flex-shrink-0 overflow-hidden rounded-2xl sm:h-11 sm:w-11">
                <LazyImage
                  src="/call.png"
                  alt="Founder portrait"
                  className="h-full w-full object-cover"
                  placeholder="Founder"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-xs font-bold text-white sm:text-sm">Book an intro call</span>
                <span className="text-[10px] text-gray-200 sm:text-xs sm:text-gray-300">Friendly chat, no pressure</span>
              </span>
            </motion.button>

            <div className="hidden items-center gap-1 sm:flex">
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.span
                  key={`right-dot-${i}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 0.35, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.08 }}
                  className="h-3 w-3 rounded-full bg-zinc-700/40 dark:bg-white/50"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
