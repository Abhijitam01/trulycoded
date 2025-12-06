"use client";
import { useEffect } from "react";

const AccessibilityEnhancements = () => {
  useEffect(() => {
    // Skip to main content functionality
    const addSkipLink = () => {
      const skipLink = document.createElement("a");
      skipLink.href = "#main-content";
      skipLink.textContent = "Skip to main content";
      skipLink.className = "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50";
      skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--primary);
        color: var(--primary-foreground);
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1000;
        transition: top 0.3s;
      `;
      
      skipLink.addEventListener("focus", () => {
        skipLink.style.top = "6px";
      });
      
      skipLink.addEventListener("blur", () => {
        skipLink.style.top = "-40px";
      });
      
      document.body.insertBefore(skipLink, document.body.firstChild);
    };

    // Add focus indicators for keyboard navigation
    const enhanceFocusIndicators = () => {
      const style = document.createElement("style");
      style.textContent = `
        /* Enhanced focus indicators */
        *:focus-visible {
          outline: 2px solid hsl(var(--primary));
          outline-offset: 2px;
          border-radius: 4px;
        }
        
        /* Skip link styles */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
        
        .sr-only:focus {
          position: absolute;
          width: auto;
          height: auto;
          padding: 8px 16px;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
        
        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          :root {
            --border: 0 0% 20%;
            --ring: 0 0% 0%;
          }
          
          .dark {
            --border: 0 0% 80%;
            --ring: 0 0% 100%;
          }
        }
      `;
      document.head.appendChild(style);
    };

    // Add ARIA landmarks
    const addAriaLandmarks = () => {
      const main = document.querySelector("main");
      if (main && !main.getAttribute("id")) {
        main.id = "main-content";
        main.setAttribute("role", "main");
      }

      const nav = document.querySelector("nav");
      if (nav && !nav.getAttribute("aria-label")) {
        nav.setAttribute("aria-label", "Main navigation");
      }

      // Add heading hierarchy
      const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
      headings.forEach((heading, index) => {
        if (!heading.getAttribute("id")) {
          const text = heading.textContent?.toLowerCase().replace(/\s+/g, "-") || `heading-${index}`;
          heading.id = text;
        }
      });
    };

    // Enhance form accessibility
    const enhanceForms = () => {
      const forms = document.querySelectorAll("form");
      forms.forEach((form) => {
        const inputs = form.querySelectorAll("input, textarea, select");
        inputs.forEach((input) => {
          // Add aria-describedby for error messages
          const errorElement = form.querySelector(`[data-error-for="${input.id}"]`);
          if (errorElement && input.id) {
            input.setAttribute("aria-describedby", `${input.id}-error`);
            errorElement.id = `${input.id}-error`;
          }

          // Add required attribute indication
          if (input.hasAttribute("required")) {
            input.setAttribute("aria-required", "true");
          }
        });
      });
    };

    // Add keyboard navigation enhancements
    const enhanceKeyboardNavigation = () => {
      // Trap focus in modals
      const modals = document.querySelectorAll("[role='dialog']");
      modals.forEach((modal) => {
        const focusableElements = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        const trapFocus = (e: KeyboardEvent) => {
          if (e.key === "Tab") {
            if (e.shiftKey) {
              if (document.activeElement === firstElement) {
                lastElement?.focus();
                e.preventDefault();
              }
            } else {
              if (document.activeElement === lastElement) {
                firstElement?.focus();
                e.preventDefault();
              }
            }
          }
        };

        modal.addEventListener("keydown", trapFocus);
      });

      // Add keyboard shortcuts
      const addKeyboardShortcuts = () => {
        document.addEventListener("keydown", (e) => {
          // Alt + M: Focus main content
          if (e.altKey && e.key === "m") {
            e.preventDefault();
            const main = document.querySelector("#main-content");
            (main as HTMLElement)?.focus();
          }

          // Alt + N: Focus navigation
          if (e.altKey && e.key === "n") {
            e.preventDefault();
            const nav = document.querySelector("nav");
            (nav as HTMLElement)?.focus();
          }

          // Escape: Close modals/dropdowns
          if (e.key === "Escape") {
            const openModal = document.querySelector("[role='dialog'][aria-hidden='false']");
            if (openModal) {
              const closeButton = openModal.querySelector("[aria-label*='close'], [aria-label*='Close']");
              (closeButton as HTMLElement)?.click();
            }
          }
        });
      };

      addKeyboardShortcuts();
    };

    // Initialize all enhancements
    addSkipLink();
    enhanceFocusIndicators();
    addAriaLandmarks();
    enhanceForms();
    enhanceKeyboardNavigation();

    // Add live region for announcements
    const liveRegion = document.createElement("div");
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.setAttribute("aria-atomic", "true");
    liveRegion.className = "sr-only";
    liveRegion.id = "live-region";
    document.body.appendChild(liveRegion);

    // Cleanup function
    return () => {
      const skipLink = document.querySelector('a[href="#main-content"]');
      skipLink?.remove();
      
      const liveRegionEl = document.getElementById("live-region");
      liveRegionEl?.remove();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AccessibilityEnhancements;
