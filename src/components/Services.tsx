import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { StaggeredReveal, SlideIn, ScaleIn } from "@/components/ui/enhanced-transitions";
import { openIntroCall } from "@/lib/utils";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Team Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            OUR APPROACH
          </div>
          
          <StaggeredReveal stagger={0.2} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16">
            {/* Specialists Card */}
            <Card className="bg-card rounded-xl p-8 sm:p-10 shadow-soft border border-border text-left hover:shadow-premium transition-all duration-200">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                DESIGN-FOCUSED
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">User-first design.</h2>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Beautiful interfaces.</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                We create digital experiences that users love. Clean, modern designs that work beautifully on every device.
              </p>
            </Card>

            {/* Collective Card */}
            <Card className="bg-card rounded-xl p-8 sm:p-10 shadow-soft border border-border text-left hover:shadow-premium transition-all duration-200">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
                CODE QUALITY
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">Clean code.</h2>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-foreground">Reliable solutions.</h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                We build with the latest technologies. Fast, secure, and scalable solutions that grow with your business.
              </p>
            </Card>
          </StaggeredReveal>

          {/* Stats Grid */}
          <StaggeredReveal stagger={0.1} className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
            <Card className="bg-card rounded-xl p-8 sm:p-10 shadow-soft border border-border text-center hover:shadow-premium transition-all duration-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-primary leading-tight py-2">30+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Projects delivered</div>
            </Card>
            
            <Card className="bg-card rounded-xl p-8 sm:p-10 shadow-soft border border-border text-center hover:shadow-premium transition-all duration-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-primary leading-tight py-2">95%</div>
              <div className="text-sm sm:text-base text-muted-foreground">Client satisfaction</div>
            </Card>
            
            <Card className="bg-card rounded-xl p-8 sm:p-10 shadow-soft border border-border text-center hover:shadow-premium transition-all duration-200">
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 text-primary leading-tight py-2">3+</div>
              <div className="text-sm sm:text-base text-muted-foreground">Years experience</div>
            </Card>
          </StaggeredReveal>
        </motion.div>

        {/* Three Steps Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            OUR PROCESS
          </div>
          <h2 className="heading-display mb-2 text-foreground dark:text-white">Three simple steps.</h2>
          <h2 className="heading-display mb-8 text-foreground dark:text-white">Great results.</h2>
          <p className="text-premium text-muted-foreground max-w-3xl mx-auto">
            From initial concept to final launch, we work closely with you at every step to bring your vision to life.
          </p>
        </motion.div>

        {/* Step 1: Positioning - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className=" dark:bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft border border-border text-left mb-6 sm:mb-8 max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-muted-foreground">
              1
            </div>
            <div className="flex-1">
              <h3 className="heading-section mb-2 text-foreground dark:text-white">Discovery</h3>
              <h3 className="heading-section mb-6 text-foreground dark:text-white">& Planning</h3>
              <p className="text-premium text-muted-foreground mb-8">
                We understand your goals, target audience, and project requirements to create a solid foundation.
              </p>
              
              <div className="flex items-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                <span>RESEARCH & STRATEGY</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 2: Brand Identity - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft border border-border text-left mb-6 sm:mb-8 max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-muted-foreground">
              2
            </div>
            <div className="flex-1">
              <h3 className="heading-section mb-2 text-foreground dark:text-white">Design</h3>
              <h3 className="heading-section mb-6 text-foreground dark:text-white">& Development</h3>
              <p className="text-premium text-muted-foreground mb-8">
                We bring your vision to life with beautiful designs and clean, efficient code that works seamlessly.
              </p>
              
              <div className="flex items-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                <span>BUILD & ITERATE</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Step 3: Websites - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-soft border border-border text-left mb-12 sm:mb-16 max-w-6xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-muted rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-bold text-muted-foreground">
              3
            </div>
            <div className="flex-1">
              <h3 className="heading-section mb-2 text-foreground dark:text-white">Launch</h3>
              <h3 className="heading-section mb-6 text-foreground dark:text-white">& Support</h3>
              <p className="text-premium text-muted-foreground mb-8">
                We deploy your project with thorough testing and provide ongoing support to ensure everything runs smoothly.
              </p>
              
              <div className="flex items-center text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                <span>TEST & DELIVER</span>
                <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <h2 className="heading-display mb-6 sm:mb-8 text-foreground dark:text-white">
            Ready to start your project?
          </h2>
          
          <button
            type="button"
            onClick={openIntroCall}
            className="px-6 sm:px-8 py-4 rounded-full font-semibold flex items-center space-x-2 mx-auto touch-target shadow-soft bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
          >
            <span className="text-sm sm:text-base">Book an intro call</span>
            <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;