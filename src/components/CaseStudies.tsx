import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const CaseStudies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: "TechFlow",
      category: "SaaS Platform",
      challenge: "Low conversion rates and unclear value proposition",
      solution: "Complete brand repositioning and conversion-optimized website",
      results: [
        "300% increase in qualified leads",
        "40% improvement in conversion rate",
        "$2M Series A funding raised",
        "50% reduction in customer acquisition cost"
      ],
      timeline: "8 weeks",
      team: "2 designers, 1 developer",
      image: "/api/placeholder/800/600",
      tags: ["Brand Strategy", "Web Design", "Conversion Optimization"],
      link: "#",
      github: "#"
    },
    {
      id: 2,
      title: "DataVault",
      category: "Enterprise Security",
      challenge: "Enterprise trust and compliance requirements",
      solution: "Security-focused brand identity and enterprise-ready website",
      results: [
        "500% increase in enterprise inquiries",
        "90% improvement in demo-to-trial conversion",
        "$15M ARR achieved",
        "Fortune 500 client acquisition"
      ],
      timeline: "12 weeks",
      team: "3 designers, 2 developers",
      image: "/api/placeholder/800/600",
      tags: ["Enterprise Design", "Security Branding", "Compliance"],
      link: "#",
      github: "#"
    },
    {
      id: 3,
      title: "CloudSync",
      category: "Developer Tools",
      challenge: "Developer adoption and community building",
      solution: "Developer-focused branding and technical documentation",
      results: [
        "10K+ GitHub stars",
        "50K+ developer signups",
        "200% increase in API usage",
        "Community-driven growth"
      ],
      timeline: "6 weeks",
      team: "2 designers, 3 developers",
      image: "/api/placeholder/800/600",
      tags: ["Developer Experience", "Open Source", "Community"],
      link: "#",
      github: "#"
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section id="case-studies" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real projects, real results
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Deep dives into how we've helped B2B startups transform their brands and drive measurable growth.
          </p>
        </motion.div>

        {/* Case Study Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCase === index
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {study.title}
            </button>
          ))}
        </motion.div>

        {/* Main Case Study Content */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-3xl font-bold text-black mb-2">{currentCase.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {currentCase.category}
                    </span>
                    <span>•</span>
                    <span>{currentCase.timeline}</span>
                    <span>•</span>
                    <span>{currentCase.team}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <ExternalLink size={16} className="text-gray-600" />
                  </button>
                  <button className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Github size={16} className="text-gray-600" />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Challenge & Solution */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">The Challenge</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{currentCase.challenge}</p>
                    
                    <h4 className="text-xl font-bold text-black mb-4">Our Solution</h4>
                    <p className="text-gray-700 leading-relaxed">{currentCase.solution}</p>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">Results</h4>
                    <div className="space-y-3">
                      {currentCase.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">Services</h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Visual */}
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-gray-600 text-2xl font-bold">
                          {currentCase.title.charAt(0)}
                        </span>
                      </div>
                      <div className="text-gray-600 font-medium">Case Study Preview</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Case Study {activeCase + 1} of {caseStudies.length}
                </div>
                <button className="flex items-center space-x-2 text-black font-medium hover:text-gray-600 transition-colors">
                  <span>View Full Case Study</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Ready to create your own success story?
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Start your project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
