"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link2 } from "lucide-react";
import LazyImage from "@/components/ui/lazy-image";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote:
        "They delivered our e-commerce platform on time and within budget. The design is clean and our customers love how easy it is to shop.",
      author: "Priya Sharma",
      role: "Founder",
      company: "EcoShop",
      results: "150% increase in online sales",
      image:
        "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
      avatarUrl:
        "/woman.png",
    },
    {
      id: 2,
      quote:
        "Our fitness app turned out better than we imagined. The UI is beautiful and our users are engaged like never before.",
      author: "Rahul Verma",
      role: "Co-founder",
      company: "FitTrack",
      results: "10K+ active users",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      avatarUrl:
        "/man.png",
    },
    {
      id: 3,
      quote:
        "Professional work and great communication throughout. They understood our vision and brought it to life perfectly.",
      author: "Anjali Mehta",
      role: "CEO",
      company: "LearnHub",
      results: "200% student enrollment growth",
      image:
       "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1200&q=80",
      avatarUrl:
        "/woman.png",
    },
    {
      id: 4,
      quote:
        "Fast turnaround, responsive team, and quality code. Exactly what we needed for our startup's MVP launch.",
      author: "Vikram Singh",
      role: "Founder",
      company: "QuickServe",
      results: "Successful product launch",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
      avatarUrl:
        "/man.png",
    },
  ];

  type TestimonialItem = (typeof testimonials)[number];

  const TestimonialCard = ({
    item,
    isActive = true,
  }: {
    item: TestimonialItem;
    isActive?: boolean;
  }) => (
    <div
      className={`relative w-full overflow-hidden rounded-[28px] border border-border/60 bg-card/95 p-6 shadow-[0_35px_100px_rgba(4,6,24,0.45)] backdrop-blur-2xl transition-all dark:border-white/12 dark:bg-[#070618]/95 sm:rounded-[36px] sm:p-10 lg:rounded-[40px] lg:p-12 ${
        isActive
          ? "ring-1 ring-border/80 scale-100 dark:ring-white/15"
          : "scale-[0.97]"
      }`}
    >
      <div className="relative z-10 flex flex-col gap-8 sm:gap-10 lg:gap-12">
        <div className="grid gap-6  md:items-center ">
         

          <blockquote className="text-xl font-semibold leading-snug text-foreground sm:text-2xl lg:text-[30px]">
            "{item.quote}"
          </blockquote>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:gap-4 sm:text-xs sm:tracking-[0.35em]">
            <span className="h-1 w-8 rounded-full bg-primary/80 sm:w-10" />
            <span>{item.results}</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-border/60 bg-muted/50 px-4 py-4 dark:border-white/10 dark:bg-white/5 sm:rounded-[24px] sm:px-6 sm:py-5 lg:rounded-[28px]">
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-border/60 bg-muted dark:border-white/15 dark:bg-white/10 sm:h-14 sm:w-14">
                <LazyImage
                  src={item.avatarUrl}
                  alt={item.author}
                  className="h-full w-full object-cover"
                  placeholder={item.author}
                />
              </span>
              <div>
                <div className="text-sm font-semibold text-foreground sm:text-base">
                  {item.author}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:text-[11px] sm:tracking-[0.4em]">
                  {item.role} – {item.company}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-foreground/75 sm:gap-3 sm:text-sm">
              <Link2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span>{item.company}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const activeTestimonial = testimonials[currentTestimonial];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const getRelativePosition = (index: number) => {
    let offset = index - currentTestimonial;
    const half = Math.floor(testimonials.length / 2);
    if (testimonials.length % 2 === 0 && offset === half) {
      offset -= testimonials.length;
    } else {
      if (offset > half) offset -= testimonials.length;
    }
    if (offset < -half) offset += testimonials.length;
    return offset;
  };

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="relative  z-10 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className=" text-center mb-8"
        >
          <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground sm:text-sm">
            CLIENT TESTIMONIALS
          </div>
          <h2 className="mb-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            What our clients
          </h2>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            are saying
          </h2>
        </motion.div>

        {/* Mobile Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-xl sm:hidden"
        >
          <motion.article
            key={activeTestimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex w-full justify-center px-4"
          >
            <TestimonialCard item={activeTestimonial} />
          </motion.article>
        </motion.div>

        {/* Testimonial Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto hidden w-full max-w-5xl items-center justify-center sm:flex sm:min-h-[520px] lg:min-h-[600px]"
        >
          {testimonials.map((item, index) => {
            const position = getRelativePosition(index);
            const clamped = Math.max(-2, Math.min(2, position));
            const depth = Math.abs(clamped);
            const isActive = position === 0;
            const baseZ = 30 - depth * 5;

            if (depth > 1) {
              return null;
            }

            return (
              <motion.article
                key={item.id}
                initial={{
                  opacity: isActive ? 1 : 0,
                  scale: isActive ? 1 : 0.95,
                  x: clamped * 200,
                  y: depth * 30,
                  rotate: clamped * -4,
                }}
                animate={{
                  opacity: isActive ? 1 : 0.35,
                  x: clamped * 120,
                  y: depth * 20,
                  scale: isActive ? 1 : 0.92,
                  rotate: clamped * -3,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute flex w-full max-w-4xl justify-center px-4 sm:px-0"
                style={{ zIndex: baseZ }}
              >
                <TestimonialCard item={item} isActive={isActive} />
              </motion.article>
            );
          })}
        </motion.div>

        {/* Navigation */}
        <div className=" flex mt-8 items-center justify-center gap-4  sm:gap-6 lg:mt-0">
          <button
            onClick={prevTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground transition-colors duration-300 hover:bg-muted dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:h-11 sm:w-11"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-1.5 rounded-full transition-all duration-300 sm:h-2 ${
                  index === currentTestimonial
                    ? "w-8 bg-primary sm:w-10"
                    : "w-4 bg-border/60 dark:bg-white/10 sm:w-5"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-card/80 text-foreground transition-colors duration-300 hover:bg-muted dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:h-11 sm:w-11"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

       
      </div>
    </section>
  );
};

export default Testimonials;
