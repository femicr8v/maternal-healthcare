import { motion } from "framer-motion";
import { how_it_works } from "@/lib/constants";
import HowItWorksCard from "./HowItWorksCard";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground py-12 md:py-32"
    >
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
            How MaternalCare Works
          </motion.h2>
          <motion.p
            className="max-w-2xl text-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A seamless experience for both patients and healthcare providers
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {how_it_works.map((step, index) => (
            <HowItWorksCard key={index} step={step} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
