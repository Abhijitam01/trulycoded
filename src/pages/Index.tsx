import Hero from "@/components/Hero";
import AbstractBackground from "@/components/AbstractBackground";
import ScrollProgress from "@/components/ScrollProgress";
import BottomNavigation from "@/components/BottomNavigation";
import LazyWrapper from "@/components/LazyWrapper";
import ServiceShowcase from "@/components/ServiceShowcase";

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
  // Homepage with all sections
  return (
    <div className="min-h-screen relative">
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