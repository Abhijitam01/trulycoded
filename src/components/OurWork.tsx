"use client";
import { motion } from "framer-motion";
import { useRef } from "react";
import LazyImage from "@/components/ui/lazy-image";
import { openIntroCall } from "@/lib/utils";

const OurWork = () => {
  const ref = useRef(null);
  const portfolioItems = [
  {
    id: 1,
    title: "UIDMT",
    category: "EdTech",
    stage: "Growth",
    location: "India",
    description:
      "UIDMT (UpNext Institute of Digital Marketing & Technology) empowers learners with hands-on training in Digital Marketing, Multimedia, and UI/UX. Trusted by 5800+ students, it offers over 50 professional courses to help you grow your career.",
    image: "/work2.png",
    badge: "Trusted by 5800+ students",
    link: "https://uidmt.com",
    content: {
      headline: "Elevating digital learning through immersive training",
      features: [
        "Interactive learning platform",
        "Professional digital marketing curriculum",
        "UI/UX design and multimedia modules",
        "Real-time mentorship and progress tracking",
        "Responsive web experience",
      ],
      metrics: [
        { value: "5800+", label: "Students trained" },
        { value: "50+", label: "Courses offered" },
      ],
      tagline: "Empowering learners to grow and lead in the digital world",
    },
  },
  {
    id: 2,
    title: "Hamara Ticket",
    category: "Event Booking",
    stage: "Seed",
    location: "India",
    description:
      "Hamara Ticket is an all-in-one ticketing platform for events, waterparks, and attractions. Discover experiences near you, explore curated recommendations, and book tickets seamlessly for your next adventure.",
    image: "/work3.png",
    badge: "Simplifying event and attraction bookings across India",
    link: "https://hamaraticket.com",
    content: {
      headline: "Redefining ticket booking with a smooth and modern interface",
      features: [
        "Event and attraction listings",
        "One-click booking experience",
        "Location-based recommendations",
        "Filter and category-based search",
        "Secure payment integration",
      ],
      metrics: [
        { value: "10K+", label: "Tickets booked" },
        { value: "100+", label: "Partner venues" },
      ],
      tagline: "Seamless, fun, and reliable ticketing for every experience",
    },
  },
  {
    id: 3,
    title: "2gather",
    category: "Social Platform",
    stage: "Pre-Seed",
    location: "INDIA",
    description:
      "2gather connects people in real life — discover meetups, join hangouts, or create your own vibe nearby. A social app designed to bring authentic offline experiences to modern communities.",
    image: "/work1.png",
    badge: "Connecting real people, in real life",
    link: "https://www.2gather.in/",
    content: {
      headline: "Building a platform for meaningful real-life connections",
      features: [
        "Discover nearby meetups and hangouts",
        "Create and host events effortlessly",
        "Smart recommendations based on interests",
        "Interactive social experience",
        "Intuitive and aesthetic UI design",
      ],
      metrics: [
        { value: "5K+", label: "Active users" },
        { value: "200+", label: "Communities formed" },
      ],
      tagline: "Your vibe, your people — in real life",
    },
  },
];


  return (
    <section ref={ref} id="our-work" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center sm:mb-16 lg:mb-20"
        >
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            OUR WORK
          </div>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Projects we're proud of
          </h2>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg">
            From startups to growing businesses, we've helped bring digital ideas to life with clean design and solid development.
          </p>
        </motion.div>

        {/* Scroll Stack Container */}
        <div className="relative space-y-8">
          {portfolioItems.map((item, index) => {
            const isLast = index === portfolioItems.length - 1;
            
            return (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  zIndex: portfolioItems.length - index,
                }}
                className={`relative lg:sticky ${isLast ? "lg:top-24" : "lg:top-24"} cursor-pointer`}
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              >
                <div className="relative flex flex-col gap-4 overflow-hidden rounded-[20px] border border-white/10 bg-white/70 p-4 shadow-[0_25px_60px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-transform duration-300 hover:scale-[1.02] sm:gap-6 sm:rounded-[28px] sm:p-6 dark:border-white/[0.08] dark:bg-white/[0.035] lg:gap-8 lg:rounded-[36px] lg:p-8">
                  {/* Subtle border */}
                  <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/40 dark:border-white/[0.12] sm:rounded-[26px] lg:rounded-[34px]" />
                  {/* Bottom glow for stacking effect */}
                  <div className="pointer-events-none absolute -bottom-20 left-10 right-10 hidden h-24 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.35)_0%,_rgba(255,255,255,0.1)_40%,_transparent_70%)] opacity-50 blur-2xl lg:block" />

                  {/* Top - Image */}
                  <div className="relative flex h-full  flex-col justify-end overflow-hidden rounded-[16px] border border-white/20 bg-black/40 min-h-[120px] sm:min-h-[280px] sm:rounded-[24px] md:min-h-[320px] lg:min-h-[360px] lg:rounded-[28px]">
                    <LazyImage
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                      placeholder={item.title}
                    />
                    <span className="absolute bottom-2 left-2 z-10 inline-flex max-w-[calc(100%-1rem)] flex-wrap justify-center rounded-full bg-black/60 px-2 py-1 text-[7px] font-semibold uppercase leading-tight tracking-[0.12em] text-white shadow-lg backdrop-blur-sm sm:bottom-4 sm:left-4 sm:max-w-none sm:px-3 sm:py-1.5 sm:text-[9px] sm:tracking-[0.2em] lg:bottom-5 lg:left-5 lg:px-4 lg:py-2 lg:text-[10px] lg:tracking-[0.25em]">
                      {item.badge}
                    </span>
                  </div>

                  {/* Bottom - Text */}
                  <div className="relative flex h-full flex-col rounded-[16px] border border-white/15 bg-zinc-100 px-4 py-4 dark:bg-[#070713]/85 sm:rounded-[24px] sm:px-6 sm:py-6 lg:rounded-[28px] lg:px-8 lg:py-8">
                    <div className="pointer-events-none absolute inset-0 rounded-[14px] bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.14)_0%,_transparent_55%),_radial-gradient(circle_at_center,_rgba(14,38,150,0.2)_0%,_transparent_70%)] sm:rounded-[22px] lg:rounded-[26px]" />
                    <div className="relative z-10 flex h-full flex-col gap-3 sm:gap-4 lg:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <span className="inline-flex flex-wrap items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-700 dark:text-white/55 sm:gap-2 sm:text-[10px] sm:tracking-[0.2em] lg:text-xs lg:tracking-[0.3em]">
                          <span>{item.category}</span>
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                          <span>{item.stage}</span>
                          <span className="h-1 w-1 rounded-full bg-white/40" />
                          <span>{item.location}</span>
                        </span>
                        <h3 className="text-base font-semibold leading-tight text-slate-700 dark:text-white sm:text-lg md:text-xl lg:text-2xl">
                          {item.content.headline}
                        </h3>
                        <p className="text-[10px] text-slate-700 dark:text-white/55 sm:text-xs lg:text-sm">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid gap-1.5 text-[10px] text-slate-700 dark:text-white/65 sm:gap-2 sm:text-xs lg:text-sm">
                        {item.content.features.map((feature) => (
                          <div key={feature} className="flex items-start gap-2 sm:gap-2.5">
                            <span className="mt-[3px] inline-block h-1 w-4 flex-shrink-0 rounded-full bg-primary/80 sm:mt-[4px] sm:w-5 lg:mt-[5px] lg:w-6" />
                            <span className="leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2 sm:gap-3">
                        {item.content.metrics.map((metric) => (
                          <div
                            key={metric.value}
                            className="rounded-lg border border-zinc-300 px-3 py-3 text-left backdrop-blur-sm dark:border-[#131520] sm:rounded-xl sm:px-3.5 sm:py-3.5 lg:px-4 lg:py-4"
                          >
                            <div className="text-lg font-black text-zinc-800 dark:text-[#77777D]/20 sm:text-xl lg:text-2xl">
                              {metric.value}
                            </div>
                            <div className="mt-0.5 text-[9px] font-medium uppercase leading-tight tracking-[0.15em] text-zinc-700 dark:text-white/55 sm:text-[10px] sm:tracking-[0.18em] lg:mt-1 lg:text-xs lg:tracking-[0.2em]">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto text-[9px] font-medium uppercase leading-snug tracking-[0.2em] text-zinc-700 dark:text-white/45 sm:text-[10px] sm:tracking-[0.25em] lg:text-xs lg:tracking-[0.28em]">
                        {item.content.tagline}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center sm:mt-28 lg:mt-32"
        >
          <h3 className="text-2xl font-semibold text-zinc-700 dark:text-white sm:text-3xl md:text-[40px]">
            Ready to bring your idea to life?
          </h3>

          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/40 sm:gap-3 sm:text-sm">
              <span className="text-base text-primary/70">→</span>
              <span className="text-base text-primary/60">→</span>
              <span className="text-base text-primary/50">→</span>
              <span className="text-base text-primary/40">→</span>
              <span className="text-base text-primary/30">→</span>
            </div>

            <div className="p-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 rounded-2xl bg-[#4d7bff]/90 px-3 py-2 pr-5 text-left shadow-[0_20px_40px_rgba(15,23,42,0.35)] transition-transform duration-300 sm:gap-4 sm:px-2 sm:py-1 sm:pr-6"
              onClick={openIntroCall}
              type="button"
            >
              <span className="relative flex h-10 w-10 overflow-hidden rounded-2xl sm:h-11 sm:w-11 ">
                <LazyImage
                  src="/founder.jpg"
                  alt="Founder portrait"
                  className="h-full w-full object-cover"
                  placeholder="Founder"
                />
              </span>

              <span className="flex flex-col">
                <span className="text-sm font-bold text-white">Book an intro call</span>
                <span className="text-xs text-gray-200 sm:text-gray-300">Friendly chat, no pressure</span>
              </span>

             
            </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurWork;
