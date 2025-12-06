import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";
import { openIntroCall } from "@/lib/utils";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-6">
            LET'S GET STARTED
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">Ready to bring</h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8">your idea to life?</h2>
          <p className="text-neutral-600 text-base sm:text-lg leading-relaxed">
            Let's work together to create something great. <span className="font-semibold">Get in touch today</span>.
          </p>
        </motion.div>

        {/* Process Cards - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
        >
          {/* Step 1: Let's have a chat - Mobile Optimized */}
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-xl sm:rounded-2xl flex items-center justify-center mb-6">
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                STEP 1
              </div>
            </div>
            
            <div className="mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-muted rounded-full mb-4"></div>
            </div>
            
            <h3 className="heading-section mb-4">Let's have a chat</h3>
            <p className="text-premium text-muted-foreground mb-8">
              Free consultation to discuss your project. 
              We'll understand your goals and suggest 
              the best approach.
            </p>
            
            <button
              type="button"
              onClick={openIntroCall}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold w-full mb-4 hover:bg-primary/90 transition-colors duration-300 touch-target shadow-blue"
            >
              Book an intro call
            </button>
            
            <p className="text-xs text-muted-foreground text-center">
              20-30 minutes. No commitment required.
            </p>
          </div>

          {/* Step 2: Receive your proposal - Mobile Optimized */}
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-xl sm:rounded-2xl flex items-center justify-center mb-6">
              <div className="text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                STEP 2
              </div>
            </div>
            
            <h3 className="heading-section mb-4">Get your proposal</h3>
            <p className="text-premium text-muted-foreground">
              Detailed proposal with timeline, deliverables, 
              and transparent pricing. Usually ready 
              within 1-2 business days.
            </p>
          </div>

          {/* Step 3: Kick off your project - Mobile Optimized */}
          <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-soft border border-border text-left">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-xl sm:rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle size={20} className="sm:w-6 sm:h-6 text-muted-foreground" />
            </div>
            
            <h3 className="heading-section mb-4">Start building</h3>
            <p className="text-premium text-muted-foreground">
              We begin development with regular updates. 
              Stay in the loop with weekly check-ins 
              and progress reports.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;