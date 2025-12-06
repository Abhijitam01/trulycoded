import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Palette, Code, BarChart3, Users, Briefcase } from "lucide-react";

const SimpleServices = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Target,
      title: "Brand Strategy",
      description: "Define your unique value proposition and market position"
    },
    {
      icon: Palette,
      title: "Visual Identity",
      description: "Create a distinctive visual identity that builds trust"
    },
    {
      icon: Code,
      title: "Website Development",
      description: "Conversion-optimized websites that drive results"
    },
    {
      icon: BarChart3,
      title: "Growth Analytics",
      description: "Data-driven optimization for continuous growth"
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Help you attract and retain top talent"
    },
    {
      icon: Briefcase,
      title: "Business Development",
      description: "Strategic guidance for scaling your startup"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black" ref={ref}>
      {/* Background Image */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
      </div>
      
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            What we do
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-300">
            Comprehensive design and development solutions for B2B tech startups.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <service.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SimpleServices;
