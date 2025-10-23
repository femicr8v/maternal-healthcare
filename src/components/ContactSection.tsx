import { motion } from "framer-motion";
import { contact_info } from "@/lib/constants";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <div
      id="contact"
      className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground py-12 md:py-32"
    >
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
            Contact Us
          </motion.h2>
          <motion.p
            className="max-w-2xl text-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have questions? We're here to help.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {contact_info.map((contact, index) => (
            <motion.div
              key={contact.title}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Card className="bg-white/70 shadow-xl border-none h-full">
                <CardContent className="flex items-center gap-4 p-6">
                  <motion.span
                    className={`shrink-0 rounded-md p-3 ${contact.background} ${contact.iconColor}`}
                    initial={{ scale: 0, rotate: -90 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <contact.icon className="size-6" />
                  </motion.span>
                  <motion.div
                    className="space-y-1"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  >
                    <motion.h3
                      className="text-lg font-medium text-secondary"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    >
                      {contact.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm text-secondary-foreground"
                      initial={{ opacity: 0, y: 5 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    >
                      {contact.info}
                    </motion.p>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
