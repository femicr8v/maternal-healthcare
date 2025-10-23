import { motion } from "framer-motion";
import { Card } from "./ui/card";
import type { FeaturesSectionType } from "@/lib/type";

export function FeatureCard({ feature }: { feature: FeaturesSectionType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Card className="p-6 pb-12 border-none shadow-none bg-gray-50 h-full hover:shadow-lg transition-all duration-300 ease-in-out">
        <div className="-mt-12 flex flex-col items-start justify-center gap-4">
          <motion.span
            className={`flex items-center justify-center p-3 rounded-md shadow-lg ${feature.color}`}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              type: "spring",
              stiffness: 200,
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <feature.icon className="size-6 text-white" />
          </motion.span>

          <motion.h3
            className="mt-4 text-lg font-medium text-secondary tracking-tight"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p
            className="text-secondary-foreground"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {feature.description}
          </motion.p>
        </div>
      </Card>
    </motion.div>
  );
}
