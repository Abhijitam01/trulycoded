import { motion, useInView, AnimatePresence, LayoutGroup } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const ThreeSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const [openStep, setOpenStep] = useState<string | null>(null);

  const steps = [
    {
      id: "01",
      title: "Positioning that resonates",
      subtitle: "Own your story. Say it clearly. Show it boldly.",
      description:
        "We map your landscape, speak with the people who matter, and shape a narrative your team can rally behind. The outcome: clarity that unlocks confident decisions.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
      cta: "See process + deliverables",
      details: [
        "Stakeholder interviews, customer insights, and market teardown",
        "Positioning framework with value pillars and proof points",
        "Messaging hierarchy covering tagline, elevator pitch, product, and growth moments",
        "Clarity deck outlining opportunities, risks, and an activation plan",
      ],
    },
    {
      id: "02",
      title: "Brand identity that connects",
      subtitle: "Look like you belong. Sound like you mean it. Show up like a leader.",
      description:
        "We translate strategy into a flexible identity system—visuals, voice, and motion crafted to feel cohesive across every touchpoint you ship.",
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
      cta: "See process + deliverables",
      details: [
        "Visual directions and moodboards explored with rationale",
        "Logo suite, color system, typography, and supporting graphics",
        "Voice guide covering tone, vocabulary, and do/do-not examples for every channel",
        "Brand style guide packaged for your team and partners",
      ],
    },
    {
      id: "03",
      title: "Websites built to convert",
      subtitle: "Turn interest into action. Build trust fast. Scale without the tech debt.",
      description:
        "We architect, design, and build high-performing experiences. Modern stacks, quick load times, and modular content blocks your team can own.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      cta: "See process + deliverables",
      details: [
        "Information architecture, user flows, and low-fidelity wireframes",
        "High-fidelity page designs with responsive states and interactions",
        "Modern build (Next.js/React) with performance and SEO baked in",
        "Launch support plus a modular content system your team can evolve",
      ],
    },
  ];

  return (
    <section id="three-steps" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Dot Pattern */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-6"
          >
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-[0.32em]">
              DESIGN / DEV / DIGITAL EXPERIENCES
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <motion.span
              initial={{ color: "#f3f4f6" }}
              animate={isInView ? { color: "hsl(var(--foreground))" } : { color: "#f3f4f6" }}
              transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
            >
              Three steps.
            </motion.span>
            <br />
            <motion.span
              initial={{ color: "#f3f4f6" }}
              animate={isInView ? { color: "hsl(var(--foreground))" } : { color: "#f3f4f6" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            >
              One powerful shift.
            </motion.span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed"
          >
            <motion.span
              initial={{ color: "#d1d5db" }}
              animate={isInView ? { color: "hsl(var(--muted-foreground))" } : { color: "#d1d5db" }}
              transition={{ duration: 1.5, delay: 1.0, ease: "easeOut" }}
            >
              This isn't a menu of services; it's the system we use as a modern tech studio. Each step compounds the last so your brand feels confident, your site performs, and your team can keep momentum.
            </motion.span>
          </motion.p>
        </motion.div>

        {/* Steps Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative mx-auto flex max-w-6xl flex-col gap-8"
        >
          <div className="pointer-events-none absolute -left-24 top-1/2 hidden h-[480px] w-48 -translate-y-1/2 flex-col justify-between lg:flex">
            <span className="h-px w-full bg-white/10" />
            <span className="h-px w-full bg-white/10" />
            <span className="h-px w-full bg-white/10" />
          </div>

          <LayoutGroup>
            {steps.map((step, index) => {
              const isOpen = openStep === step.id;

              return (
                <motion.article
                  layout
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={
                    isInView
                      ? {
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 0.8 + index * 0.12,
                            ease: "easeOut",
                          },
                        }
                      : {}
                  }
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 160,
                      damping: 24,
                    },
                  }}
                  className="relative overflow-hidden rounded-[40px] border border-neutral-200/60 bg-white/95 px-6 py-8 shadow-[0_18px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#070415]/95 dark:shadow-[0_35px_110px_rgba(6,8,24,0.55)] sm:px-8 lg:px-12 lg:py-12"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[36px] border border-neutral-200/60 dark:border-white/7" />
                  <div
                    className="pointer-events-none absolute inset-0 dark:hidden"
                    style={{
                      background:
                        "radial-gradient(circle at top right, rgba(94,113,255,0.18) 0%, rgba(245,244,255,0.94) 55%, rgba(245,244,255,1) 100%)",
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_right,_rgba(76,106,255,0.28)_0%,_rgba(7,4,21,0.92)_55%,_rgba(7,4,21,1)_100%)]" />
                  <div className="pointer-events-none absolute -bottom-12 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(169,182,255,0.18)_0%,_rgba(245,244,255,0)_70%)] blur-2xl dark:bg-[radial-gradient(circle,_rgba(126,161,255,0.24)_0%,_rgba(7,4,21,0)_70%)]" />

                  <div className="relative z-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                    <div className="flex flex-col gap-8">
                      <div className="flex items-center gap-4">
                        <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl border border-neutral-200/70 bg-white/80 text-base font-semibold tracking-[0.5em] text-neutral-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80">
                          {step.id}
                        </span>
                        <span className="h-px flex-1 bg-neutral-200/70 dark:bg-white/10" />
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-[26px] font-semibold leading-tight text-neutral-900 dark:text-white md:text-[34px]">
                          {step.title}
                        </h3>
                        <p className="text-base text-neutral-600 dark:text-white/65">{step.subtitle}</p>
                        <p className="text-sm text-neutral-500 dark:text-white/50">{step.description}</p>
                      </div>

                      <motion.button
                        type="button"
                        onClick={() => setOpenStep(isOpen ? null : step.id)}
                        whileTap={{ scale: 0.97 }}
                        className="group inline-flex w-fit items-center gap-3 rounded-full border border-neutral-200/70 bg-white px-5 py-3 text-sm font-semibold text-neutral-800 transition-colors duration-300 hover:bg-neutral-100 dark:border-white/15 dark:bg-white/[0.06] dark:text-white dark:hover:bg-white/[0.12]"
                      >
                        <span>{isOpen ? "Hide process" : step.cta}</span>
                        <motion.span
                          animate={{ x: isOpen ? 6 : 0, rotate: isOpen ? 135 : 0 }}
                          transition={{ type: "spring", stiffness: 220, damping: 18 }}
                          className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground"
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            layout
                            key="details"
                            initial={{ height: 0, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                            animate={{ height: "auto", opacity: 1, clipPath: "inset(0% 0% 0% 0%)" }}
                            exit={{ height: 0, opacity: 0, clipPath: "inset(0% 0% 100% 0%)" }}
                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                            className="mt-6 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/80 p-5 shadow-inner dark:border-white/10 dark:bg-white/[0.05]"
                          >
                            <ul className="space-y-3 text-sm text-neutral-600 dark:text-white/65">
                              {step.details.map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="relative flex items-center justify-center">
                      <div className="absolute inset-0 -skew-y-1 rounded-[28px] border border-neutral-200/70 bg-white/60 dark:border-white/10 dark:bg-white/5" />
                      <img
                        src={step.image}
                        alt={step.title}
                        className="relative h-full max-h-[260px] w-full rounded-[28px] border border-neutral-200/70 object-cover dark:border-white/12"
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </LayoutGroup>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
            className="relative overflow-hidden rounded-[34px] border border-neutral-200/60 bg-white px-6 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-[#060311]/95 dark:px-10 dark:py-12 dark:shadow-[0_28px_90px_rgba(6,8,24,0.5)]"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[30px] border border-neutral-200/60 dark:border-white/8" />
            <div
              className="pointer-events-none absolute inset-0 dark:hidden"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(107,126,255,0.18) 0%, rgba(255,255,255,0.95) 55%, rgba(255,255,255,1) 100%)",
              }}
            />
            <div className="pointer-events-none absolute inset-0 hidden dark:block bg-[radial-gradient(circle_at_top_left,_rgba(76,106,255,0.3)_0%,_rgba(6,3,17,0.92)_55%,_rgba(6,3,17,1)_100%)]" />
            <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-500 dark:text-white/55">
                  Support beyond the system
                </p>
                <h4 className="mt-3 text-2xl font-semibold text-neutral-900 dark:text-white md:text-[28px]">
                  Whether it's motion design, ongoing creative support, or product design sprints—we plug in where it counts.
                </h4>
              </div>
              <div className="flex flex-col gap-3 text-xs font-medium uppercase tracking-[0.32em] text-neutral-500 dark:text-white/45">
                <span>We also help with</span>
                <div className="flex flex-wrap gap-2 text-[11px] text-neutral-600 dark:text-white/55">
                  {["Pitch decks", "Product UX", "Marketing ops", "Video & motion"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-neutral-200/60 px-3 py-1 text-neutral-600 dark:border-white/10 dark:text-white/55"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreeSteps;
