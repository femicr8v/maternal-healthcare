import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { technology_section } from "@/lib/constants";

export function TechnologySection() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="bg-background py-12 md:py-32">
      <div className="width space-y-8 md:space-y-16">
        <motion.div
          className="lg:text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-secondary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Built with Modern Technology
          </motion.h2>
          <motion.p
            className="max-w-2xl text-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Robust, scalable, and designed for reliability
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {technology_section.map((tech, index) => (
            <motion.div
              key={tech.title}
              variants={cardVariants}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="bg-gray-50 border-none hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="flex items-center justify-center h-12 w-12 rounded-md mx-auto mb-4"
                    style={{ backgroundColor: tech.color }}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <tech.icon className="h-6 w-6 text-[#6B7280]" />
                  </motion.div>
                  <motion.h3
                    className="text-lg font-medium text-[#1F2937]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {tech.title}
                  </motion.h3>
                  <motion.p
                    className="mt-1 text-sm text-[#6B7280]"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    {tech.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
