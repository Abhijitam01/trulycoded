import AbstractBackground from "@/components/AbstractBackground";
import BottomNavigation from "@/components/BottomNavigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import ScrollProgress from "@/components/ScrollProgress";
import OurWork from "@/components/OurWork";
import { SEO } from "@/components/SEO";

const OurWorkPage = () => {
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
        "name": "Our Work",
        "item": "https://trulycoded.agency/ourwork"
      }
    ]
  };

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work - Portfolio & Case Studies",
    "description": "Explore our portfolio of successful projects including UI/UX design, web development, and mobile app development for startups and growing businesses.",
    "url": "https://trulycoded.agency/ourwork"
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <SEO
        title="Our Work - Portfolio & Case Studies | TrulyCoded"
        description="Explore our portfolio of successful projects including UI/UX design, web development, and mobile app development. See how we've helped startups and businesses transform their digital presence."
        keywords="portfolio, case studies, web design portfolio, mobile app portfolio, UI UX design examples, web development projects"
        url="https://trulycoded.agency/ourwork"
        schema={[breadcrumbSchema, portfolioSchema]}
      />
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
