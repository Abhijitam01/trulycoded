import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Briefcase, Users, Contact, Home } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { openIntroCall } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

type BottomNavigationProps = {
  forceVisible?: boolean;
  initialActiveSection?: string;
};

const BottomNavigation = ({ forceVisible = false, initialActiveSection = "" }: BottomNavigationProps) => {
  const [isVisible, setIsVisible] = useState(forceVisible);
  const [activeSection, setActiveSection] = useState(initialActiveSection);
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleNavigation = (itemId: string) => {
    if (itemId === "home") {
      navigate("/");
      setActiveSection("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (itemId === "our-work") {
      navigate("/ourwork");
      setActiveSection("our-work");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      return;
    }

    if (itemId === "services") {
      navigate("/services");
      setActiveSection("services");
      setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      return;
    }

    if (itemId === "contact") {
      if (pathname !== "/contact") {
        navigate("/contact");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        const form = document.getElementById("contact-form");
        if (form) {
          form.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
      setActiveSection("contact");
      return;
    }

    if (pathname !== "/") {
      navigate("/", { state: { scrollTo: itemId } });
      return;
    }

    scrollToSection(itemId);
  };

  useEffect(() => {
    if (forceVisible) {
      setIsVisible(true);
    }

    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      
      // Show navigation after scrolling past hero section
      if (forceVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(currentScrollY > heroHeight);
      }

      // Determine active section
      const sections = ['hero', 'our-work', 'services', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, pathname]);

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
      return;
    }

    if (pathname === "/ourwork") {
      setActiveSection("our-work");
      return;
    }

    if (pathname === "/services") {
      setActiveSection("services");
      return;
    }

    if (pathname === "/contact") {
      setActiveSection("contact");
      return;
    }

    if (initialActiveSection) {
      setActiveSection(initialActiveSection);
    } else {
      setActiveSection("");
    }
  }, [pathname, initialActiveSection]);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'our-work', label: 'Work', icon: Briefcase },
    { id: 'services', label: 'Services', icon: Users },
    { id: 'contact', label: 'Contact', icon: Contact }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 sm:bottom-6 z-50 flex w-full justify-center pointer-events-none"
        >
          <div className="pointer-events-auto flex w-fit items-center justify-center gap-4 rounded-2xl border border-gray-300 dark:border-gray-900 bg-neutral-100 dark:bg-[#050B1D] px-1 py-3 sm:py-2 backdrop-blur-xl shadow-lg">
            {/* Navigation Links */}
            <div className="rounded-2xl bg-gray-300 p-1 dark:bg-gray-900">
              <ThemeToggle />
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 min-h-[44px] ${
                    activeSection === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <item.icon size={16} />
                  <span className="text-xs font-medium hidden sm:block">{item.label}</span>
                </button>
              ))}
            </div>

            {/* CTA Button */}
          <div className=" p-0.5 dark:bg-gray-900 bg-gray-200 rounded-2xl">
              <motion.button
              whileHover={{ translateY: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="hidden sm:flex items-center gap-2 rounded-2xl  bg-[#4D7BFF] p-1 text-left transition-all duration-200 ease-out hover:bg-[#4D7BFF]/90"
              onClick={openIntroCall}
            >
            
                <img
                  src="/founder.jpg"
                  alt="Team member"
                  className="w-8 rounded-xl"
                  loading="lazy"
                />
        
              <span className="flex flex-col leading-tight text-white">
                <span className="text-sm font-semibold">Book an intro call</span>
                <span className="text-[11px] font-medium text-white/85">
                  Friendly chat, no pressure
                </span>
              </span>
            </motion.button>
          </div>
            <motion.button
              whileTap={{ scale: 0.96 }}
              className="sm:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              onClick={openIntroCall}
              aria-label="Book intro call"
            >
              
              <ArrowRight size={18} />
            </motion.button>
          </div>
        </motion.div>

      )}
    </AnimatePresence>
  );
};

export default BottomNavigation;
