import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AbstractBackground = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Subtle parallax transform
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div ref={containerRef} className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none">
      {/* Main background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Base background */}
  <div className="absolute inset-0 bg-transparent"></div>
        
        {/* Very subtle gradient overlay */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-primary/2 via-transparent to-primary/2"
        ></motion.div>
        
        {/* Minimal blur effect */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </div>
  );
};

export default AbstractBackground;