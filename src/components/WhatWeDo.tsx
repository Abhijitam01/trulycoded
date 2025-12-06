import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Target, Rocket, Users } from "lucide-react";

const WhatWeDo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const advantages = [
    {
      icon: Zap,
      title: "Founder-built",
      description:
        "Built by founders who understand the startup journey, challenges, and what it takes to succeed in today's digital landscape.",
      tag: "Founder insight",
    },
    {
      icon: Target,
      title: "Strategy-first",
      description:
        "Every decision backed by strategic thinking, market insights, and clear positioning that resonates with your audience.",
      tag: "Clear positioning",
    },
    {
      icon: Rocket,
      title: "Creatively led",
      description:
        "Design that doesn't just look good, it drives real business results and helps you stand out from the competition.",
      tag: "Design momentum",
    },
    {
      icon: Users,
      title: "Quality focused",
      description:
        "We're a small team dedicated to delivering high-quality work with attention to detail and strategic thinking.",
      tag: "Trusted delivery",
    },
  ];

  return (
    <section id="what-we-do" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          {/* Tagline */}
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            YOUR UNFAIR ADVANTAGE
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground max-w-5xl mx-auto">
            A growing tech agency that delivers real results
          </h2>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We craft brands and digital experiences that earn trust, drive conversions, and help businesses stand out in their market.
          </p>
        </motion.div>

        {/* Advantage Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.25 + index * 0.12 }}
                className="relative flex h-full flex-col rounded-[32px] border border-white/10 hover:border-primary/40 bg-[#060611]/92 p-8 shadow-[0_25px_60px_rgba(10,12,28,0.45)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-3"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.45em] text-zinc-700 dark:text-white/45">
                    {advantage.tag}
                  </span>

                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-zinc-700/5">
                    <Icon className="h-6 w-6 text-zinc-500 dark:text-white" strokeWidth={2} />
                  </span>
                </div>

                <div className="mt-8 space-y-4">
                  <h3 className="text-[28px] font-semibold leading-snug text-zinc-700 dark:text-white md:text-3xl">
                    {advantage.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-white/60">
                    {advantage.description}
                  </p>
                </div>

               
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
