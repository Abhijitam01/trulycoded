import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TextReveal } from "@/components/ui/enhanced-transitions";
import { openIntroCall } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const scrollToWork = () => {
    const workSection = document.getElementById('our-work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-5 pb-32 sm:pb-20 bg-transparent">
      {/* Animated ambient blur gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <motion.div
          className="absolute -top-24 left-1/2 w-[520px] h-[520px] bg-primary/25 rounded-full blur-[140px]"
          animate={{ x: ["-50%", "-45%", "-52%"], y: ["0%", "8%", "0%"], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-220px] right-[10%] w-[420px] h-[420px] bg-accent/20 rounded-full blur-[160px]"
          animate={{ x: [0, -20, 10, 0], y: [0, 15, -10, 0], opacity: [0.25, 0.4, 0.3, 0.25] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
      

      <div className="container mx-auto px-6  text-center relative z-10">
        {/* logo */}
          <motion.div
             initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8 flex gap-1 items-center justify-center "
          >
            {/* Logo Icon */}
            <div className="w-12  rounded-sm flex items-center justify-center ">
              <img src="/logo.png" alt="logo" />
            </div>
            {/* Logo Text */}
            <div className="text-lg font-bold tracking-tight text-foreground">
              Truly Coded
            </div>
          </motion.div>
        
        {/* Simple Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-block px-4 py-2 mb-4  rounded-full">
            <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider flex flex-wrap items-center justify-center space-x-2 gap-x-2">
                <ArrowRight size={12} />
              <span className="hidden xs:inline">DESIGN THAT WORKS</span>
              <span className="xs:hidden">DESIGN WORKS</span>
              <span className="text-neutral-400">•</span>
              <span className="hidden xs:inline">CODE THAT SCALES</span>
              <span className="xs:hidden">CODE SCALES</span>
           
               <ArrowRight size={12} className="rotate-180" />
            </div>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(16px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.35, ease: "easeOut" }}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-tight sm:leading-none mb-8   mx-auto text-foreground"
        >
          <div className="flex flex-col items-center">
            <TextReveal 
              text="Become the"
              delay={0.3}
              duration={0.6}
              splitBy="word"
              className="text-foreground leading-none mb-3"
            />
            <TextReveal 
              text="obvious choice."
              delay={0.6}
              duration={0.6}
              splitBy="word"
              className="text-primary leading-none -mt-3"
            />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl max-w-5xl mx-auto mb-8 sm:mb-10 text-muted-foreground leading-relaxed"
        >
          A growing tech agency specializing in UI/UX design, web development, mobile apps, and custom software solutions that help businesses thrive online.
        </motion.p>

     

        {/* Seed & Series A */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.5 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-col items-center justify-center gap-4 max-w-sm sm:max-w-lg mx-auto">
            <span className="block h-px w-24  bg-gradient-to-r from-transparent via-neutral-400/60 to-transparent dark:via-white/30"></span>
            <div className="text-sm font-normal text-muted-foreground uppercase tracking-widest text-center">
              for Startups & Growing Businesses
            </div>
            <span className="block h-px w-24 sm:w-40 bg-gradient-to-r from-transparent via-neutral-400/60 to-transparent dark:via-white/30"></span>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16"
        >
          <div className="p-1 bg-gray-200 rounded-2xl dark:bg-gray-900">
            <motion.button
              type="button"
              onClick={openIntroCall}
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center space-x-3 rounded-2xl bg-[#4d7bff]/90 px-2 py-1 shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img
                src="/call.png"
                alt="Person"
                className="w-8 rounded object-cover"
              />
              <div className="flex flex-col">
                <div className="font-bold text-[0.95rem] text-white select-none">
                  Book an intro call
                </div>
                <div className="text-xs text-gray-300 dark:text-gray-300">
                  Friendly chat, no pressure
                </div>
              </div>
            </motion.button>
          </div>

          <button 
            onClick={() => navigate("/ourwork")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-semibold touch-target text-sm px-6 py-4"
          >
            Explore our work
          </button>
        </motion.div>

        
        {/* Scrolling Banner */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(14px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0 }}
          className="mt-8 sm:mt-12 w-full overflow-hidden"
        >
          <div className="flex flex-col gap-3">
            <span className="block h-px w-full bg-gradient-to-r from-transparent via-neutral-400/50 to-transparent dark:via-white/20"></span>
            <div className="w-screen -mx-[calc((100vw-100%)/2)] whitespace-nowrap bg-transparent py-3 sm:py-4 overflow-hidden">
              <div className="inline-flex animate-[scroll_40s_linear_infinite]">
                <span className="text-sm sm:text-lg font-semibold text-gray-400 tracking-[0.6em] px-4">
                  UI/UX DESIGN • WEB DEVELOPMENT • MOBILE APPS • SOFTWARE SOLUTIONS • DIGITAL INNOVATION • UI/UX DESIGN • WEB DEVELOPMENT • MOBILE APPS • SOFTWARE SOLUTIONS • DIGITAL INNOVATION •
                </span>
                <span className="text-sm sm:text-lg font-semibold text-gray-400 tracking-[0.6em] px-4">
                  UI/UX DESIGN • WEB DEVELOPMENT • MOBILE APPS • SOFTWARE SOLUTIONS • DIGITAL INNOVATION • UI/UX DESIGN • WEB DEVELOPMENT • MOBILE APPS • SOFTWARE SOLUTIONS • DIGITAL INNOVATION •
                </span>
              </div>
            </div>
            <span className="block h-px w-full bg-gradient-to-r from-transparent via-neutral-400/50 to-transparent dark:via-white/20"></span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;