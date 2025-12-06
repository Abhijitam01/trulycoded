import Hero from "@/components/Hero";
import AbstractBackground from "@/components/AbstractBackground";
import ScrollProgress from "@/components/ScrollProgress";
import BottomNavigation from "@/components/BottomNavigation";
import LazyWrapper from "@/components/LazyWrapper";
import ServiceShowcase from "@/components/ServiceShowcase";
import { SEO } from "@/components/SEO";

import {
  LazyOurWork,
  LazyWhatWeDo,
  LazyShowcase,
  LazyThreeSteps,
  LazyTestimonials,
  LazyGetStarted,
} from "@/components/LazyComponents";
import ScrollableCards from "@/components/scrollableCards";
import TextScroll from "@/components/TextScroll";
import InfoCard from "@/components/infoCard";
import Footer from "@/components/Footer";

const Index = () => {
  // FAQ Schema for homepage
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most projects take 6-12 weeks depending on scope. Brand strategy projects are typically 2-3 weeks, visual identity 3-4 weeks, and website development 6-8 weeks. We provide detailed timelines during our initial consultation."
        }
      },
      {
        "@type": "Question",
        "name": "What's included in your pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our pricing includes all deliverables listed in each service, unlimited revisions during the design phase, source files, and 30 days of post-launch support. We're transparent about what's included and what might incur additional costs."
        }
      },
      {
        "@type": "Question",
        "name": "Do you work with startups at any stage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We work with pre-seed startups just getting started, Series A companies scaling up, and established B2B companies looking to refresh their brand. We adapt our approach based on your stage and specific needs."
        }
      },
      {
        "@type": "Question",
        "name": "What makes you different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We're founder-built, B2B specialists, and senior-only. No junior work, no handoffs, no hierarchy. We understand the startup journey and focus on strategic design that drives real business results, not just pretty visuals."
        }
      }
    ]
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "TrulyCoded",
    "serviceType": [
      "UI/UX Design",
      "Web Development",
      "Mobile App Development",
      "Brand Identity Design",
      "Digital Strategy"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Beautiful, intuitive interfaces that users love"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Fast, responsive websites built with modern technologies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile apps for iOS and Android"
          }
        }
      ]
    }
  };

  // Review Schema
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Organization",
      "name": "TrulyCoded"
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "name": "Priya Sharma"
    },
    "reviewBody": "They delivered our e-commerce platform on time and within budget. The design is clean and our customers love how easy it is to shop."
  };

  // Aggregate Rating Schema
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TrulyCoded",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // Homepage with all sections
  return (
    <div className="min-h-screen relative">
      <SEO
        title="TrulyCoded - UI/UX Design, Web Development & Mobile App Development Agency | India"
        description="TrulyCoded is a modern tech agency specializing in UI/UX design, web development, mobile app development, and digital solutions for startups and growing businesses. Transform your digital presence with our expert team."
        url="https://trulycoded.agency/"
        schema={[faqSchema, serviceSchema, reviewSchema, aggregateRatingSchema]}
      />
      {/* Page Loader */}
 
      
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Fixed abstract background */}
      <AbstractBackground />
      
      {/* Content with higher z-index */}
      <div className="relative z-10">
        {/* <Navigation /> */}
        <main>
          <Hero />

          

            <LazyWrapper>
          <ScrollableCards/>
          </LazyWrapper>

          <LazyWrapper>
            <TextScroll/>
          </LazyWrapper>
          
          <LazyWrapper>
          <InfoCard/>
          </LazyWrapper>
        
          
          {/* Service Showcase - Our Best Sellers */}
          <LazyWrapper>
            <ServiceShowcase />
          </LazyWrapper>
  
         
          
          <LazyWrapper>
            <LazyOurWork />
          </LazyWrapper>


          <LazyWrapper>
            <LazyWhatWeDo />
          </LazyWrapper>

          <LazyWrapper>
            <LazyShowcase />
          </LazyWrapper>
          <LazyWrapper>
            <LazyThreeSteps />
          </LazyWrapper>
          {/* <LazyWrapper>
            <LazyCaseStudies />
          </LazyWrapper> */}
          {/* <LazyWrapper>
            <LazyServicesBento />
          </LazyWrapper> */}
          <LazyWrapper>
            <LazyTestimonials />
          </LazyWrapper>
          
     
        
          
          <LazyWrapper>
            <LazyGetStarted />
          </LazyWrapper>
        
        </main>
        <Footer/>
       
      </div>

      {/* Bottom Navigation - Fixed after scroll */}
      <BottomNavigation />
    </div>
  );
};

export default Index;