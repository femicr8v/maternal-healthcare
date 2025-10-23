import { motion } from "framer-motion";
import { features_section } from "@/lib/constants";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section id="features" className="bg-background py-12 md:py-32">
      <div className="width space-y-8 md:space-y-16">
        <motion.div
          className="lg:text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Comprehensive Pregnancy Support
          </motion.h2>
          <motion.p
            className="max-w-2xl text-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Designed for both pregnant women and healthcare providers with
            innovative features
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features_section.map((feature, index) => (
            <motion.div
              key={index}
              className="pt-6"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FeatureCard feature={feature} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
