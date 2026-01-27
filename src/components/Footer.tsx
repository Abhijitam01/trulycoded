"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const [times, setTimes] = useState({
    london: "",
    newyork: "",
    sf: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const delhi = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      const mumbai = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      const bangalore = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
      });
      setTimes({ london: delhi, newyork: mumbai, sf: bangalore });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative flex flex-col items-center justify-center  text-gray-400 pt-24 overflow-hidden ">
      {/* Background giant watermark */}
     

     
      <motion.div
             initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 sm:mb-8 flex gap-1 items-center justify-center "
          >
            {/* Logo Icon */}
            <div className="w-10 rounded-sm flex items-center justify-center ">
              <img src="/truloycoded-logo.jpeg" alt="logo" />
            </div>
            {/* Logo Text */}
            <div className="text-lg font-bold tracking-tight text-foreground">
              Truly Coded
            </div>
          </motion.div>

      {/* City times */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6 text-sm font-mono tracking-widest text-gray-400/80 mb-10 relative z-10"
      >
        <span className="flex items-center gap-1">
          [ DELHI: <span className="">{times.london}</span> ]
        </span>
        <span className="flex items-center gap-1">
          [ MUMBAI: <span className="">{times.newyork}</span> ]
        </span>
        <span className="flex items-center gap-1">
          [ BANGALORE: <span className="">{times.sf}</span> ]
        </span>
      </motion.div>

      {/* Copyright & Company Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center text-[12px] font-mono tracking-wider text-gray-500/70 mb-6 relative z-10"
      >
        © 2025 TRULY CODED. ALL RIGHTS RESERVED.
      </motion.div>

      <motion.div
       initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      className="flex items-center justify-center gap-10 text-xs font-medium tracking-[0.25em] text-gray-500/80 uppercase relative z-10 mb-6">
          <a
          href="mailto:hi@trulycoded.agency"
          className="hover:text-white transition-colors duration-300"
        >
        Email
        </a>
        <a
          href="https://x.com/Abhijitam_"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
        Twitter
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors duration-300"
        >
          LinkedIn
        </a>
      </motion.div>

      {/* Bottom watermark */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 -mb-11"
      >
         <div className="flex items-end justify-center text-[18vw] font-extrabold dark:text-slate-400 text-slate-700 leading-none pointer-events-none select-none">
        <span className="tracking-tighter opacity-[0.5]  ">TRULYCODED</span>
      </div>
      </motion.div>
    </footer>
  );
}
