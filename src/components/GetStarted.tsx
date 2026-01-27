import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { openIntroCall } from "@/lib/utils";

const cardGradients = [
  "linear-gradient(135deg, rgba(81, 104, 255, 0.35), rgba(9, 12, 32, 0.95))",
  "linear-gradient(135deg, rgba(180, 88, 255, 0.35), rgba(9, 12, 32, 0.95))",
  "linear-gradient(135deg, rgba(74, 211, 255, 0.35), rgba(9, 12, 32, 0.95))",
];

const cardGradientsLight = [
  "linear-gradient(135deg, rgba(81, 104, 255, 0.18), rgba(241, 245, 249, 0.95))",
  "linear-gradient(135deg, rgba(180, 88, 255, 0.18), rgba(241, 245, 249, 0.95))",
  "linear-gradient(135deg, rgba(74, 211, 255, 0.18), rgba(241, 245, 249, 0.95))",
];

const GetStarted = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const processSteps = [
    {
      id: 1,
      label: "STEP 1",
      title: "Let's have a chat",
      description:
        "We'll discuss your project goals, timeline, and requirements. Free consultation to understand your needs.",
      button: "Book an intro call",
      subtext: "20-30 minutes. No commitment required.",
      hasProfile: true,
    },
    {
      id: 2,
      label: "STEP 2",
      title: "Get your proposal",
      description:
        "Receive a detailed proposal with timeline, milestones, and transparent pricing within 1-2 days.",
      button: null,
      subtext: null,
      hasProfile: false,
    },
    {
      id: 3,
      label: "STEP 3",
      title: "Start building",
      description:
        "We begin development with regular updates and check-ins to ensure everything meets your expectations.",
      button: null,
      subtext: null,
      hasProfile: false,
      hasCheckmark: true,
    },
  ];

  return (
    <section
      id="get-started"
      ref={ref}
      className="relative overflow-hidden py-32 text-foreground"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-[-15%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(81,104,255,0.15)_0%,rgba(5,7,22,0)_70%)] blur-[140px] dark:bg-[radial-gradient(circle,rgba(81,104,255,0.25)_0%,rgba(5,7,22,0)_70%)]" />
        <div className="absolute -right-24 bottom-[-25%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(74,211,255,0.12)_0%,rgba(5,7,22,0)_65%)] blur-[150px] dark:bg-[radial-gradient(circle,rgba(74,211,255,0.18)_0%,rgba(5,7,22,0)_65%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent dark:via-white/10" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          {/* Dot Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-2 rounded-full bg-muted/20 p-5 dark:bg-white/2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="h-2 w-2 rounded-full bg-zinc-400 dark:bg-white/20" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.6em] text-zinc-700 dark:text-white/45">
              LET&apos;S GET STARTED
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl "
          >
            <motion.span
              initial={{ color: "rgba(214,219,255,0.75)" }}
             
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
              className="text-black dark:text-[rgba(255,255,255,0.95)] "
            >
              Ready to start your project?
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mx-auto max-w-4xl text-lg leading-relaxed md:text-xl"
          >
            <motion.span
              
             
              transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
              className="text-zinc-700 dark:text-white/60 "
            >
              We bring your digital ideas to life with thoughtful design and solid development. Let&apos;s{" "}
              <span className="cursor-pointer underline decoration-white/40 underline-offset-4 transition hover:decoration-transparent">
                build together
              </span>
              .
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Process Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {processSteps.map((step, index) => {
              const backdrop = isDark 
                ? cardGradients[index % cardGradients.length]
                : cardGradientsLight[index % cardGradientsLight.length];

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.12 }}
                  className="relative h-full rounded-[44px] p-[12px]"
                  style={{ background: backdrop }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[44px] opacity-25 shadow-[0_25px_90px_rgba(17,21,50,0.7)] dark:shadow-[0_25px_90px_rgba(17,21,50,0.7)]" />
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[34px] border border-border/40 bg-card/95 px-8 pb-12 pt-12 shadow-[inset_0_1px_0_rgba(0,0,0,0.05),0_18px_60px_rgba(6,9,35,0.25)] dark:border-white/10 dark:bg-[#040513]/95 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_60px_rgba(6,9,35,0.55)]">
                    <div className="pointer-events-none absolute inset-0 rounded-[34px] opacity-40 ring-1 ring-inset ring-border/30 dark:ring-white/6" />
                    <div className="relative flex h-full flex-col">
                      <div className="mb-8 flex items-start justify-between">
                        {step.label ? (
                          <span className="text-[11px] font-semibold uppercase tracking-[0.55em] text-muted-foreground dark:text-white/55">
                            {step.label}
                          </span>
                        ) : (
                          <span className="text-[11px] uppercase tracking-[0.55em] text-muted-foreground/10 dark:text-white/10">
                            &nbsp;
                          </span>
                        )}

                        {step.hasProfile && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: 1.0 + index * 0.12,
                            }}
                          >
                            <img
                              src="/founder.jpg"
                              alt="Strategy lead portrait"
                              className="h-14 w-14 rounded-[18px] border border-white/15 object-cover shadow-[0_12px_24px_rgba(3,6,26,0.45)]"
                            />
                          </motion.div>
                        )}

                        {!step.hasProfile && step.hasCheckmark && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                              duration: 0.5,
                              delay: 1.0 + index * 0.12,
                            }}
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/60 text-foreground shadow-[0_8px_18px_rgba(9,14,39,0.15)] dark:border-white/20 dark:bg-white/10 dark:text-white/80 ">
                              <Check size={18} />
                            </div>
                          </motion.div>
                        )}
                      </div>

                      <motion.h3
                        initial={{ color: "rgba(225,230,255,0.4)" }}
                        animate={
                          isInView
                            ? { color: isDark ? "rgba(255,255,255,0.96)" : "rgba(15,23,42,0.96)" }
                            : { color: "rgba(225,230,255,0.4)" }
                        }
                        transition={{
                          duration: 1.2,
                          delay: 1.2 + index * 0.12,
                          ease: "easeOut",
                        }}
                        className="text-2xl font-semibold leading-tight text-foreground md:text-[27px]"
                      >
                        {step.title}
                      </motion.h3>

                      <motion.p
                        initial={{ color: "rgba(168,176,214,0.55)" }}
                        animate={
                          isInView
                            ? { color: isDark ? "rgba(182,190,225,0.75)" : "rgba(71,85,105,0.85)" }
                            : { color: "rgba(168,176,214,0.55)" }
                        }
                        transition={{
                          duration: 1.2,
                          delay: 1.35 + index * 0.12,
                          ease: "easeOut",
                        }}
                        className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base"
                      >
                        {step.description}
                      </motion.p>

                      {step.button && (
                        <motion.button
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.55 + index * 0.12,
                          }}
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="mt-8 w-full rounded-full border border-border/60 bg-primary px-6 py-4 text-base font-semibold text-black dark:text-gray-700  shadow-lg transition hover:bg-primary/90 dark:border-white/20 dark:bg-[#010308] "
                          onClick={openIntroCall}
                          type="button"
                        >
                          {step.button}
                        </motion.button>
                      )}

                      {step.subtext && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.75 + index * 0.12,
                          }}
                          className="mt-4 text-center text-xs text-muted-foreground dark:text-white/45"
                        >
                          {step.subtext}
                        </motion.p>
                      )}

                      {step.id === 2 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.55 + index * 0.12,
                          }}
                          className="mt-10 space-y-3"
                        >
                          <div className="h-3 rounded-full bg-muted/40 dark:bg-white/10" />
                          <div className="h-3 rounded-full bg-muted/40 dark:bg-white/10" />
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-16 rounded-2xl border border-border/40 bg-muted/20 dark:border-white/10 dark:bg-white/5" />
                            <div className="flex-1 space-y-2">
                              <div className="h-2 rounded-full bg-muted/30 dark:bg-white/8" />
                              <div className="h-2 rounded-full bg-muted/30 dark:bg-white/8" />
                              <div className="h-2 w-2/3 rounded-full bg-muted/30 dark:bg-white/8" />
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {step.id === 3 && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{
                            duration: 0.6,
                            delay: 1.55 + index * 0.12,
                          }}
                          className="mt-10 flex items-center gap-4"
                        >
                          <div className="flex gap-2">
                            {Array.from({ length: 3 }).map((_, dotIndex) => (
                              <div
                                key={dotIndex}
                                className="h-3 w-3 rounded-full bg-muted/40 dark:bg-white/12"
                              />
                            ))}
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="h-2 rounded-full bg-muted/30 dark:bg-white/8" />
                            <div className="h-2 rounded-full bg-muted/30 dark:bg-white/8" />
                            <div className="h-2 w-3/4 rounded-full bg-muted/30 dark:bg-white/8" />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GetStarted;
