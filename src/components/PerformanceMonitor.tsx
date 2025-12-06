"use client";
import { useEffect } from "react";

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
}

const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    const metrics: PerformanceMetrics = {};

    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === "first-contentful-paint") {
          metrics.fcp = entry.startTime;
          console.log("FCP:", entry.startTime);
        }
      });
    });
    fcpObserver.observe({ entryTypes: ["paint"] });

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.lcp = lastEntry.startTime;
      console.log("LCP:", lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        metrics.fid = entry.processingStart - entry.startTime;
        console.log("FID:", metrics.fid);
      });
    });
    fidObserver.observe({ entryTypes: ["first-input"] });

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metrics.cls = clsValue;
      console.log("CLS:", clsValue);
    });
    clsObserver.observe({ entryTypes: ["layout-shift"] });

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      metrics.ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      console.log("TTFB:", metrics.ttfb);
    }

    // Send metrics to analytics (replace with your analytics service)
    const sendMetrics = () => {
      // Metrics collected, can be sent to analytics service if needed
      console.log("Performance Metrics:", metrics);
    };

    // Send metrics after page load
    window.addEventListener("load", () => {
      setTimeout(sendMetrics, 3000); // Wait 3 seconds for all metrics to be collected
    });

    // Cleanup
    return () => {
      fcpObserver.disconnect();
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
