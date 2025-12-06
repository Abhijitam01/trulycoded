import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "How long does a typical project take?",
      answer: "Most projects take 6-12 weeks depending on scope. Brand strategy projects are typically 2-3 weeks, visual identity 3-4 weeks, and website development 6-8 weeks. We provide detailed timelines during our initial consultation."
    },
    {
      id: 2,
      question: "What's included in your pricing?",
      answer: "Our pricing includes all deliverables listed in each service, unlimited revisions during the design phase, source files, and 30 days of post-launch support. We're transparent about what's included and what might incur additional costs."
    },
    {
      id: 3,
      question: "Do you work with startups at any stage?",
      answer: "Yes! We work with pre-seed startups just getting started, Series A companies scaling up, and established B2B companies looking to refresh their brand. We adapt our approach based on your stage and specific needs."
    },
    {
      id: 4,
      question: "Can you help with ongoing marketing and growth?",
      answer: "While we focus on brand strategy, design, and website development, we can recommend trusted partners for ongoing marketing, content creation, and growth initiatives. We also offer analytics and optimization services."
    },
    {
      id: 5,
      question: "What makes you different from other agencies?",
      answer: "We're founder-built, B2B specialists, and senior-only. No junior work, no handoffs, no hierarchy. We understand the startup journey and focus on strategic design that drives real business results, not just pretty visuals."
    },
    {
      id: 6,
      question: "Do you offer payment plans?",
      answer: "Yes, we offer flexible payment plans for larger projects. Typically 50% upfront and 50% on completion, but we can work with you to create a payment schedule that fits your cash flow needs."
    },
    {
      id: 7,
      question: "What if we need changes after launch?",
      answer: "We include 30 days of post-launch support for any bugs or issues. For additional changes or new features, we offer ongoing support at our standard hourly rates. We also provide training on how to maintain your website."
    },
    {
      id: 8,
      question: "Do you work with international clients?",
      answer: "Absolutely! We work with clients globally. Most of our communication happens via video calls, and we're experienced in working across different time zones. We can accommodate your schedule."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to know
          </h2>
          <p className="text-lg max-w-3xl mx-auto text-gray-600">
            Common questions about our process, pricing, and what makes us different.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openItems.includes(faq.id) ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openItems.includes(faq.id) ? "auto" : 0,
                  opacity: openItems.includes(faq.id) ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                {openItems.includes(faq.id) && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Related Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Related Resources
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { title: "Brand Strategy Guide", image: "BSG" },
              { title: "Website Design Tips", image: "WDT" },
              { title: "Startup Branding", image: "SB" },
              { title: "Case Studies", image: "CS" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-card rounded-xl p-4 shadow-soft border border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="w-full h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center mb-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-sm font-bold">
                    {item.image}
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-foreground text-center">
                  {item.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            We're here to help. Book a free consultation to discuss your project.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-soft"
          >
            Book a free consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
