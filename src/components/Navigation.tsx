import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navigation
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 safe-area-inset ${
        scrolled 
          ? "bg-background/95 backdrop-blur-sm border-b border-border" 
          : "bg-transparent border-b-0"
      }`}
    >
      <div className="container mx-auto mobile-padding py-3 sm:py-4 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
        

          {/* Navigation Links */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <Search size={18} />
            </button>
            
            {/* Contact Link */}
            <Link to="/contact">
              <button className="flex items-center space-x-2 text-sm px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
                <Mail size={16} />
                <span className="hidden sm:inline">Contact</span>
              </button>
            </Link>
            
            {/* User Account Icon */}
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200">
              <User size={18} />
            </button>
            
            {/* Shopping Cart Icon */}
            <button className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </button>
            
            {/* Theme Toggle */}
            <ThemeToggle />
            
            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 rounded-full font-semibold flex items-center space-x-2 shadow-soft touch-target text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              <span>Get in touch</span>
              <ArrowRight size={14} />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navigation;