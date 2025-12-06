import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ContactForm from "@/components/ContactForm";
import AbstractBackground from "@/components/AbstractBackground";
import ScrollProgress from "@/components/ScrollProgress";
import BottomNavigation from "@/components/BottomNavigation";

const Contact = () => {
  return (
    <div className="relative min-h-screen overflow-hidden ">
      <AbstractBackground />

      <div className="relative z-10 flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Header */}
          <section className="pt-14 pb-12 sm:pt-14">
           
          </section>

          {/* Contact Form */}
          <section className="pb-36">
            <div className="container mx-auto max-w-3xl px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </section>
        </main>

        <BottomNavigation forceVisible initialActiveSection="contact" />
      </div>
    </div>
  );
};

export default Contact;
