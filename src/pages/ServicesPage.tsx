import AbstractBackground from "@/components/AbstractBackground";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import ScrollProgress from "@/components/ScrollProgress";
import ServiceShowcase from "@/components/ServiceShowcase";
import ThreeSteps from "@/components/ThreeSteps";
import WhatWeDo from "@/components/WhatWeDo";

const ServicesPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
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
