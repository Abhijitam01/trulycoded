import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  
  {
    title: "UIDMT",
    image: "/work2.png",
    category: "EDTECH",
    stage: "GROWTH",
    location: "INDIA",
    link: "https://uidmt.com",
    description:
      "UIDMT (UpNext Institute of Digital Marketing & Technology) empowers learners with hands-on training in Digital Marketing, Multimedia, and UI/UX. Trusted by 5800+ students, it offers over 50 professional courses to help you grow your career."
  },
  {
    title: "Hamara Ticket",
    image: "/work3.png",
    category: "EVENT BOOKING",
    stage: "SEED",
    location: "INDIA",
    link: "https://hamaraticket.com",
    description:
      "Hamara Ticket is an all-in-one ticketing platform for events, waterparks, and attractions. Discover experiences near you, explore curated recommendations, and book tickets seamlessly for your next adventure."
  },
  {
    title: "2gather",
    image: "/work1.png",
    category: "SOCIAL PLATFORM",
    stage: "PRE-SEED",
    location: "UNITED STATES",
    link: "https://www.2gather.in/",
    description:
      "2gather connects people in real life — discover meetups, join hangouts, or create your own vibe nearby. A social app designed to bring authentic offline experiences to modern communities."
  }

];

export default function ScrollableCards() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640); // sm breakpoint
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateActiveCard = () => {
      const centerPosition = container.scrollLeft + container.clientWidth / 2;
      const cards = Array.from(container.querySelectorAll<HTMLElement>("[data-card-index]"));

      let closestIndex = 0;
      let minDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card) => {
        const idx = Number(card.dataset.cardIndex);
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const distance = Math.abs(cardCenter - centerPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    updateActiveCard();
    container.addEventListener("scroll", updateActiveCard, { passive: true });
    window.addEventListener("resize", updateActiveCard);

    return () => {
      container.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  const scrollToCard = useCallback((index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(`[data-card-index="${index}"]`);
    if (!card) return;

    const targetLeft = card.offsetLeft - container.clientWidth / 2 + card.offsetWidth / 2;
    container.scrollTo({ left: targetLeft, behavior: "smooth" });
  }, []);

  const handleArrow = (direction: "prev" | "next") => {
    if (direction === "prev") {
      scrollToCard(activeIndex > 0 ? activeIndex - 1 : 0);
    } else {
      scrollToCard(activeIndex < projects.length - 1 ? activeIndex + 1 : projects.length - 1);
    }
  };

  return (
    <section className="relative w-full overflow-hidden py-16 px-4 sm:px-10">
      <div className="flex flex-col items-center gap-12">
       
        <div
          ref={containerRef}
          className="w-full flex snap-x snap-mandatory gap-10 overflow-x-auto pb-4 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title + index}
              data-card-index={index}
              initial={false}
              animate={
                index === activeIndex
                  ? { scale: isMobile ? 0.8 : 1, y: -10 }
                  : {
                      scale: 0.95,
                      y: 20,
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 24, mass: 1.2 }}
              className="snap-center mt-5 min-w-[320px] sm:min-w-[420px] lg:min-w-[520px] px-[1px] py-[1px] rounded-[32px] border border-slate-200/50 dark:border-white/18 cursor-pointer"
              onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
            >
              <div className="rounded-[30px] h-full bg-[#f5f4ff] dark:bg-slate-900/70 border border-slate-200/60 dark:border-slate-700/70 overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative h-64 lg:h-72 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full rounded-3xl w-full object-cover transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 border border-white/30 dark:border-white/10 rounded-[28px]" />
                </div>

                <div className="flex flex-col gap-6 px-8 py-6 lg:py-8">
                  <div className="flex items-center justify-between text-xs font-medium tracking-[0.3em] uppercase text-slate-400 dark:text-slate-500">
                    <span>{project.category}</span>
                    <span>{project.stage}</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="mt-2 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                        Conversion-focused product experience tailored for growth teams with premium brand polish.
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="h-12 w-12 rounded-full border border-slate-200/60 dark:border-slate-700/60 bg-white/80 dark:bg-slate-800/80 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.link, "_blank", "noopener,noreferrer");
                      }}
                    >
                      <ChevronRight className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-2 px-6 py-3">
            {projects.map((_, index) => (
              <motion.span
                key={`indicator-${index}`}
                animate={index === activeIndex ? { width: 28, opacity: 1 } : { width: 28, opacity: 0.35 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-2 rounded-full bg-slate-400/70 dark:bg-slate-100/70"
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleArrow("prev")}
              className="group h-11 w-11 rounded-full border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 transition hover:border-slate-400"
            >
              <ChevronLeft className="mx-auto h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:text-slate-300" />
            </button>
            <button
              onClick={() => handleArrow("next")}
              className="group h-11 w-11 rounded-full border border-slate-200/70 dark:border-slate-700/60 bg-white/80 dark:bg-slate-900/80 transition hover:border-slate-400"
            >
              <ChevronRight className="mx-auto h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:text-slate-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
