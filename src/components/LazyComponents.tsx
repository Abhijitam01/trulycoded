import { lazy } from "react";

// Lazy load heavy components
export const LazyOurWork = lazy(() => import("@/components/OurWork"));
export const LazyCaseStudies = lazy(() => import("@/components/CaseStudies"));
export const LazyTestimonials = lazy(() => import("@/components/Testimonials"));
export const LazyAbout = lazy(() => import("@/components/About"));
export const LazyFAQ = lazy(() => import("@/components/FAQ"));
export const LazyGetStarted = lazy(() => import("@/components/GetStarted"));
export const LazyFreeOffers = lazy(() => import("@/components/FreeOffers"));
export const LazyFooter = lazy(() => import("@/components/Footer"));

// Lazy load UI components that are not immediately visible
export const LazyServicesBento = lazy(() => import("@/components/ServicesBento"));
export const LazyThreeSteps = lazy(() => import("@/components/ThreeSteps"));
export const LazyWhatWeDo = lazy(() => import("@/components/WhatWeDo"));
export const LazyShowcase = lazy(() => import("@/components/Showcase"));
