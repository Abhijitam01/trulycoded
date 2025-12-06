"use client";
import React from "react";
import { motion } from "motion/react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { Target, Palette, Code, BarChart3, Users, Rocket } from "lucide-react";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-muted to-card"></div>
);

const items = [
  {
    title: "Brand Strategy",
    description: "Clarity on who you are, who you serve, and why you win.",
    header: <Skeleton />,
    icon: <Target className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Visual Identity",
    description: "Distinctive design system that builds instant trust.",
    header: <Skeleton />,
    icon: <Palette className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Website Development",
    description: "Conversion-ready websites built for speed and scale.",
    header: <Skeleton />,
    icon: <Code className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Go-to-Market Readiness",
    description: "Messaging, assets, and motion to launch with confidence.",
    header: <Skeleton />,
    icon: <Rocket className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Growth Analytics",
    description: "Measure what matters. Optimize what moves the needle.",
    header: <Skeleton />,
    icon: <BarChart3 className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Enablement",
    description: "Sales decks, case studies, and systems your team can use.",
    header: <Skeleton />,
    icon: <Users className="h-6 w-6 text-muted-foreground" />,
  },
  {
    title: "Ongoing Support",
    description: "Iterate fast with a senior team as your partner.",
    header: <Skeleton />,
    icon: <Users className="h-6 w-6 text-muted-foreground" />,
  },
];

export default function ServicesBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Our Services
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Everything you need to launch and grow
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <BentoGrid className="max-w-6xl mx-auto gap-6">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              >
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  header={item.header}
                  icon={item.icon}
                  className={`p-6 ${i === 2 || i === 3 ? "md:col-span-2" : ""} ${
                    i === 0 || i === 4 ? "md:row-span-2" : ""
                  }`}
                />
              </motion.div>
            ))}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}


