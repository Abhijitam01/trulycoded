import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FreeOffers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #6b7280 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wider mb-6">
            START WITH VALUE
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-foreground">Need clarity first? Start here.</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed mb-2">
            Get instant clarity on your brand or website.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
            No fluff, no commitment.
          </p>
        </motion.div>

        {/* Free Offers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16"
        >
          {/* Brand Strategy Workshop */}
          <div className="bg-card dark:bg-card border border-border rounded-3xl p-8 shadow-lg text-left relative">
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              FREE
            </div>
            
            <div className="w-12 h-12 bg-muted dark:bg-muted rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 border-2 border-neutral-400 dark:border-neutral-600 rounded"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Brand strategy workshop</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Free 30-min session to help clarify your 
              positioning, message, and audience.
            </p>
          </div>

          {/* Website Plan */}
          <div className="bg-card dark:bg-card border border-border rounded-3xl p-8 shadow-lg text-left relative">
            <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
              FREE
            </div>
            
            <div className="w-12 h-12 bg-muted dark:bg-muted rounded-xl flex items-center justify-center mb-6">
              <div className="w-6 h-6 border-2 border-neutral-400 dark:border-neutral-600 rounded"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Website plan</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
              A tactical plan for what your site actually 
              needs to convert. Free 30-min session.
            </p>
          </div>
        </motion.div>

        {/* Bottom text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            FREE, ZERO-PRESSURE SESSIONS TO HELP YOU MOVE FORWARD FAST
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeOffers;