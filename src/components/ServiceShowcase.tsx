import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { openIntroCall } from "@/lib/utils";

const services = [
  {
    id: 1,
    tag: "Design",
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces that users love. We create experiences that look great and work even better.",
    price: "Starting at $2,500",
    image:
      "https://cdn-icons-png.flaticon.com/512/5968/5968701.png",
    features: [
      "User research & wireframes",
      "Interactive prototypes",
      "Modern design systems",
      "Responsive layouts",
    ],
  },
  {
    id: 2,
    tag: "Web",
    title: "Web Development",
    description:
      "Fast, responsive websites built with modern technologies. From landing pages to complex web apps.",
    price: "Starting at $3,500",
    image:
      "https://cdn.prod.website-files.com/6746e4625c4bb3fb49ba7f5b/689313badc27b1bb31152ada_MERN%20Stack%202025_%20Build%20Full%E2%80%91Stack%20Apps%20with%20MongoDB%2C%20Express%2C%20React%20%26%20Node%20(4).png",
    features: [
      "React & Next.js development",
      "Custom CMS integration",
      "SEO optimization",
      "Performance & security",
    ],
  },
  {
    id: 3,
    tag: "Mobile",
    title: "App Development",
    description:
      "Native and cross-platform mobile apps that engage users and drive results on iOS and Android.",
    price: "Starting at $5,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png",
    features: [
      "iOS & Android apps",
      "React Native development",
      "API integration",
      "App store deployment",
    ],
  },
];

const ServiceShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden py-24 dark:bg-[#050510]"
    >
      <div className="container relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-xs font-semibold uppercase tracking-[0.45em] text-gray-500 dark:text-white/55"
          >
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
            className="mt-4 text-4xl font-semibold leading-tight text-gray-900 dark:text-white md:text-5xl"
          >
            Services built to grow your business
          </motion.h2>
        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.75,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              className="relative rounded-[2.95rem] border border-black/[0.06] dark:border-white/6
                         bg-white/70 dark:bg-white/[0.04]
                         p-1.5 shadow-[inset_0_0_70px_rgba(148,163,184,0.08)]
                         backdrop-blur-2xl"
            >
              <div className="absolute inset-1 rounded-[2.7rem] border border-black/[0.05] dark:border-white/[0.08]" />

              <div
                className="relative z-10 flex h-full flex-col gap-8 rounded-[2.45rem] 
                           bg-gray-100/70 dark:bg-[#050510]/85 
                           px-7 py-9 shadow-[0_0_55px_rgba(15,23,42,0.15)]
                           dark:shadow-[0_0_55px_rgba(15,23,42,0.28)]"
              >
                {/* Header row */}
                <div className="flex items-center justify-between">
                 
                  <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-black/[0.1] dark:border-white/15 bg-gray-200 dark:bg-white/6">
                    <img
                      src={service.image}
                      alt={`${service.title} preview`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <span className="inline-flex w-fit rounded-full bg-gray-200/60 dark:bg-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-gray-600 dark:text-white/55">
                    {service.tag}
                  </span>
                  <h3 className="text-2xl font-semibold leading-snug text-gray-900 dark:text-white md:text-[28px]">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-white/55">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-xs leading-relaxed text-gray-500 dark:text-white/45">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-indigo-500/70 dark:bg-primary/70" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-[1.75rem] 
                               border border-black/[0.1] dark:border-white/12 
                               bg-gray-900 text-white 
                               dark:bg-black dark:text-slate-400 
                               px-6 py-4 text-sm font-semibold 
                               
                               transition-colors duration-300 
                               hover:bg-gray-800 dark:hover:bg-gray-900"
                    onClick={openIntroCall}
                    type="button"
                  >
                    Book an intro call
                    <ArrowRight size={16} />
                  </motion.button>
                  <p className="text-[0.68rem] font-medium uppercase tracking-[0.32em] text-gray-500 dark:text-white/35">
                    Includes • {service.features.slice(0, 2).join(" • ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceShowcase;
