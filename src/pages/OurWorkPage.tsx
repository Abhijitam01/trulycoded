import AbstractBackground from "@/components/AbstractBackground";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import ScrollProgress from "@/components/ScrollProgress";
import OurWork from "@/components/OurWork";

const OurWorkPage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <ScrollProgress />
      <AbstractBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1 pt-28 pb-24">
          <OurWork />
        
        </main>
        <Footer />
      </div>

      <BottomNavigation forceVisible={true} />
    </div>
  );
};

export default OurWorkPage;
