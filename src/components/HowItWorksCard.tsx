import { motion } from "framer-motion";
import type { HowItWorksType } from "@/lib/type";

type Props = {
  step: HowItWorksType;
  index: number;
};

export default function HowItWorksCard({ step, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      className="grid md:grid-cols-2 gap-6 md:gap-8 items-end"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <motion.img
        className={`rounded-lg shadow-xl w-full h-auto ${
          index % 2 === 1 && "md:order-1"
        }`}
        // src="src\assets\img-3.jpg"
        src={step.image}
        alt={`Step ${step.number} illustration`}
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.05, rotate: isEven ? 1 : -1 }}
      />

      <motion.div
        className={`space-y-4 ${index % 2 === 1 && "md:text-right"}`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className={`flex items-center gap-4 ${
            index % 2 === 1 && "md:justify-end"
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.span
            className={`flex items-center justify-center size-12 rounded-md text-white font-bold text-xl ${
              step.color
            } ${index % 2 === 1 && "md:order-2"}`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.8,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, rotate: 360 }}
          >
            {step.number}
          </motion.span>
          <motion.h3
            className="text-xl font-bold text-secondary"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            {step.title}
          </motion.h3>
        </motion.div>
        <motion.p
          className="md:max-w-m"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          {step.description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
