"use client";
import { motion } from "framer-motion";

export default function InfoCard() {
  const cards = [
    {
      label: "Specialists",
      title: (
        <>
          Focused expertise.
          <br /> Not generalists.
        </>
      ),
      text: "We specialize in creating digital solutions that work. Quality design, clean code, and clear results. No filler, no fluff.",
    },
    {
      label: "Collective",
      title: (
        <>
          Small team.
          <br /> Big outcomes.
        </>
      ),
      text: "A dedicated team that brings the right skills to every project. Strategy, design, and development working together seamlessly.",
    },
  ];

  return (
    <section className="w-full bg-transparent px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
            className="relative flex min-h-[280px] sm:min-h-[320px] flex-col justify-between 
              rounded-[1.5rem] sm:rounded-[2rem] 
              border border-black/[0.05] dark:border-white/[0.075]
              hover:border-primary/30 dark:hover:border-primary/40
              bg-gray-50/[0.6] dark:bg-white/[0.03]
              px-6 py-8 sm:px-8 sm:py-10 text-left
              
              backdrop-blur-xl
              transition-all duration-300"
          >
            {/* Grid dots pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
              <div
                className="absolute inset-0 [background-size:26px_26px] [background-image:radial-gradient(circle,rgba(15,23,42,0.16)_1.6px,transparent_1.6px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.24)_1.6px,transparent_1.6px)]"
              />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-white/60">
                {card.label}
              </p>
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold leading-snug text-gray-900 dark:text-white/90 md:text-4xl">
                {card.title}
              </h2>
              <p className="max-w-sm text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-white/60">
                {card.text}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Stats block 1 */}
           <div className="flex flex-col gap-4 sm:gap-6">
          {[
            { value: "30+", label: "Projects delivered" },
            { value: "95%", label: "Client satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative flex h-[140px] sm:h-[180px] w-full flex-col items-center justify-center overflow-hidden 
                  rounded-[1.5rem] sm:rounded-[1.75rem]
                  border border-black/[0.05] dark:border-white/[0.07]
                  hover:border-primary/30 dark:hover:border-primary/40
                  bg-gray-50/[0.65] dark:bg-white/[0.035]
                  text-center
                  transition-all duration-300
                  "
            >
              {/* Grid dots pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
                <div
                  className="absolute inset-0 [background-size:26px_26px] [background-image:radial-gradient(circle,rgba(15,23,42,0.16)_1.6px,transparent_1.6px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.24)_1.6px,transparent_1.6px)]"
                />
              </div>
                
              <div className="relative z-10">
                <p className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-white/50">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Reusable results cards */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative flex min-h-[280px] sm:min-h-[320px] flex-col justify-between overflow-hidden 
              rounded-[1.5rem] sm:rounded-[1.9rem]
              border border-black/[0.05] dark:border-white/[0.075]
              hover:border-primary/30 dark:hover:border-primary/40
              bg-gray-50/[0.7] dark:bg-white/[0.03]
              px-6 py-8 sm:px-10 sm:py-12
              backdrop-blur-xl
              transition-all duration-300"
          >
            <div className="pointer-events-none absolute right-6 top-0 hidden h-full w-32 opacity-25 sm:block">
              <div
                className="h-full w-full [background-size:24px_24px] [background-image:radial-gradient(circle,rgba(15,23,42,0.16)_1.3px,transparent_1.3px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.22)_1.3px,transparent_1.3px)]"
              />
            </div>

            <div className="relative z-10 max-w-lg">
              <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-white/60">
                Our Focus
              </p>
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl font-semibold leading-snug text-gray-900 dark:text-white/90 md:text-4xl">
                Quality & performance driven
              </h2>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-600 dark:text-white/60">
                Every project we build is focused on delivering real value. We create solutions that are fast, user-friendly, and built to last.
              </p>
            </div>
          </motion.div>
        ))}

        {/* Stats block 2 */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {[
            { value: "3+", label: "Years experience" },
            { value: "100%", label: "Dedication" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative flex h-[140px] sm:h-[180px] w-full flex-col items-center justify-center overflow-hidden 
                  rounded-[1.5rem] sm:rounded-[1.75rem]
                  border border-black/[0.05] dark:border-white/[0.07]
                  hover:border-primary/30 dark:hover:border-primary/40
                  bg-gray-50/[0.65] dark:bg-white/[0.035]
                  text-center
                  transition-all duration-300
                  "
            >
              {/* Grid dots pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
                <div
                  className="absolute inset-0 [background-size:26px_26px] [background-image:radial-gradient(circle,rgba(15,23,42,0.16)_1.6px,transparent_1.6px)] dark:[background-image:radial-gradient(circle,rgba(255,255,255,0.24)_1.6px,transparent_1.6px)]"
                />
              </div>
                
              <div className="relative z-10">
                <p className="mb-1 sm:mb-2 text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.25em] text-gray-500 dark:text-white/50">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="col-span-1 md:col-span-2 relative flex min-h-[320px] flex-col justify-between overflow-hidden 
            rounded-[1.5rem] sm:rounded-[1.9rem]
            border border-black/[0.05] dark:border-white/[0.075]
            hover:border-primary/30 dark:hover:border-primary/40
            bg-gray-50/[0.7] dark:bg-white/[0.03]
            px-6 py-8 sm:px-10 sm:py-12
            shadow-[inset_0_0_45px_rgba(148,163,184,0.08)]
            backdrop-blur-xl
            transition-all duration-300"
        >
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          <div className="relative z-10 grid gap-6 sm:gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex flex-col items-start justify-center gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="rounded-[1.4rem] sm:rounded-[1.6rem] border border-black/[0.1] dark:border-white/12 bg-gray-200/40 dark:bg-white/5 p-6 sm:p-8"
              >
                <div className="relative h-20 w-20 sm:h-28 sm:w-28">
                  <div className="absolute inset-0 rounded-[1rem] sm:rounded-[1.2rem] border-3 sm:border-4 border-black/10 dark:border-white/20" />
                  <div className="absolute left-3 top-3 sm:left-4 sm:top-4 h-14 w-14 sm:h-20 sm:w-20 rounded-[0.85rem] sm:rounded-[1rem] bg-gray-300/40 dark:bg-white/15" />
                  <div className="absolute left-5 top-5 sm:left-7 sm:top-7 h-10 w-10 sm:h-14 sm:w-14 rounded-[0.7rem] sm:rounded-[0.9rem] bg-gray-700 dark:bg-white" />
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                className="text-2xl sm:text-3xl font-semibold leading-snug text-gray-900 dark:text-white md:text-[40px]"
              >
                We are a growing tech agency
              </motion.h2>
            </div>

            <div className="flex items-center">
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                className="text-sm sm:text-base leading-relaxed text-gray-600 dark:text-white/60"
              >
                A small team passionate about creating great digital products. We work closely with our clients to bring their ideas to life with quality and care.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
