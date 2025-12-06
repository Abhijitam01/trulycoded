import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle, Clock, Users, Target, Palette, Code, BarChart3 } from "lucide-react";

const EnhancedServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      title: "Brand Strategy & Positioning",
      icon: Target,
      description: "Define your unique value proposition and market position",
      deliverables: [
        "Brand positioning workshop",
        "Competitive analysis",
        "Target audience research",
        "Brand messaging framework",
        "Brand guidelines document"
      ],
      timeline: "2-3 weeks",
      price: "From $5,000",
      features: [
        "Strategic brand foundation",
        "Clear market differentiation",
        "Customer-focused messaging",
        "Investor-ready positioning"
      ]
    },
    {
      id: 2,
      title: "Visual Identity Design",
      icon: Palette,
      description: "Create a distinctive visual identity that builds trust",
      deliverables: [
        "Logo design & variations",
        "Color palette & typography",
        "Brand guidelines",
        "Business card design",
        "Social media templates"
      ],
      timeline: "3-4 weeks",
      price: "From $8,000",
      features: [
        "Professional brand presence",
        "Consistent visual system",
        "Scalable design assets",
        "Brand recognition"
      ]
    },
    {
      id: 3,
      title: "Website Design & Development",
      icon: Code,
      description: "Conversion-optimized websites that drive results",
      deliverables: [
        "Website design & wireframes",
        "Frontend development",
        "Mobile optimization",
        "SEO setup",
        "Analytics integration"
      ],
      timeline: "6-8 weeks",
      price: "From $15,000",
      features: [
        "High-converting design",
        "Mobile-first approach",
        "Fast loading speeds",
        "SEO optimized"
      ]
    },
    {
      id: 4,
      title: "Growth & Analytics",
      icon: BarChart3,
      description: "Data-driven optimization for continuous growth",
      deliverables: [
        "Analytics setup & tracking",
        "Conversion optimization",
        "A/B testing framework",
        "Performance monitoring",
        "Growth recommendations"
      ],
      timeline: "2-4 weeks",
      price: "From $3,000",
      features: [
        "Data-driven decisions",
        "Continuous improvement",
        "Performance tracking",
        "Growth insights"
      ]
    }
  ];

  const currentService = services[activeService];

  return (
    <section id="enhanced-services" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete design & development solutions
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            From brand strategy to website development, we provide everything your B2B startup needs to succeed.
          </p>
        </motion.div>

        {/* Service Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-medium transition-all duration-300 ${
                activeService === index
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <service.icon size={20} />
              <span>{service.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Main Service Content */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center">
                    <currentService.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-black mb-2">{currentService.title}</h3>
                    <p className="text-gray-600">{currentService.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-black">{currentService.price}</div>
                  <div className="text-sm text-gray-500">{currentService.timeline}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Deliverables */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">What you'll get</h4>
                    <div className="space-y-3">
                      {currentService.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="text-xl font-bold text-black mb-4">Key benefits</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {currentService.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-black rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Content - Process */}
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-black mb-4">Our process</h4>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        1
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-1">Discovery & Research</h5>
                        <p className="text-gray-600 text-sm">Understanding your business, market, and goals</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        2
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-1">Strategy & Planning</h5>
                        <p className="text-gray-600 text-sm">Developing the strategic foundation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        3
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-1">Design & Development</h5>
                        <p className="text-gray-600 text-sm">Creating and building the solution</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                        4
                      </div>
                      <div>
                        <h5 className="font-semibold text-black mb-1">Launch & Optimize</h5>
                        <p className="text-gray-600 text-sm">Going live and continuous improvement</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">{currentService.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">Senior team only</span>
                  </div>
                </div>
                <button className="flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                  <span>Get started</span>
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
          <h3 className="text-2xl font-bold text-black mb-4">
            Need a custom solution?
          </h3>
          <p className="text-gray-600 mb-6">
            We can create a tailored package that fits your specific needs and budget.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300"
          >
            Discuss your project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedServices;
