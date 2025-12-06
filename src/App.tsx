import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CustomToastProvider } from "@/components/ui/custom-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import OurWorkPage from "./pages/OurWorkPage";
import ServicesPage from "./pages/ServicesPage";
import { CustomCursor } from "@/components/ui/cursor-effects";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import AccessibilityEnhancements from "@/components/AccessibilityEnhancements";
import { MobileNavigationGestures } from "@/components/ui/touch-gestures";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CustomToastProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <CustomCursor enabled={true}>
              <PerformanceMonitor />
              <AccessibilityEnhancements />
              <MobileNavigationGestures />
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/ourwork" element={<OurWorkPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>
            </CustomCursor>
          </TooltipProvider>
        </CustomToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
