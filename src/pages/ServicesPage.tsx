import AbstractBackground from "@/components/AbstractBackground";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceShowcase from "@/components/ServiceShowcase";
import ThreeSteps from "@/components/ThreeSteps";
import WhatWeDo from "@/components/WhatWeDo";
import { SEO } from "@/components/SEO";

const ServicesPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trulycoded.agency/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://trulycoded.agency/services"
      }
    ]
  };

  const servicePageSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "UI/UX Design, Web Development & Mobile App Development Services",
    "description": "Comprehensive digital services including UI/UX design, web development, mobile app development, brand identity, and digital strategy for startups and growing businesses.",
    "provider": {
      "@type": "Organization",
      "name": "TrulyCoded"
    },
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
            "description": "Fast, responsive websites built with modern technologies like React, Next.js"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile App Development",
            "description": "Native and cross-platform mobile apps for iOS and Android using Flutter and React Native"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Brand Identity Design",
            "description": "Complete brand identity packages including logo, color palette, typography, and brand guidelines"
          }
        }
      ]
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO
        title="Our Services - UI/UX Design, Web & Mobile App Development | TrulyCoded"
        description="Explore our comprehensive digital services: UI/UX design, web development, mobile app development, brand identity design, and digital strategy. Expert solutions for startups and growing businesses."
        keywords="UI UX design services, web development services, mobile app development, brand identity design, digital strategy, React development, Flutter apps, Next.js development"
        url="https://trulycoded.agency/services"
        schema={[breadcrumbSchema, servicePageSchema]}
      />
      <ScrollProgress />
      <AbstractBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1 space-y-16 pb-24">
          <ServiceShowcase />
          <WhatWeDo />
        
        </main>
        <Footer />
      </div>

      <BottomNavigation forceVisible={true}/>
    </div>
  );
};

export default ServicesPage;
