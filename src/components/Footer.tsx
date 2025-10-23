import { motion } from "framer-motion";
import { footer_links } from "@/lib/constants";
import { Globe } from "lucide-react";

export function Footer() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer
      className="bg-secondary"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="width py-12">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {footer_links.map((item, columnIndex) => (
            <motion.ul
              key={item.title}
              className="space-y-4"
              variants={itemVariants}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="font-semibold text-[#9CA3AF] tracking-wider uppercase"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: columnIndex * 0.1 }}
              >
                {item.title}
              </motion.h2>

              <>
                {item.title !== "Connect" ? (
                  <motion.li
                    key={item.title}
                    className="flex flex-col gap-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + columnIndex * 0.1,
                    }}
                  >
                    {item.links.map((link, index) => (
                      <motion.a
                        key={link.label || index}
                        href={link.href}
                        className="text-base text-[#D1D5DB] hover:text-white transition-colors"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + index * 0.05,
                        }}
                        whileHover={{ x: 5, color: "#ffffff" }}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </motion.li>
                ) : (
                  <motion.li
                    key={item.title}
                    className="flex gap-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + columnIndex * 0.1,
                    }}
                  >
                    {item.links.map((link, index) => (
                      <motion.a
                        key={link.label || index}
                        href={link.href}
                        className="text-base text-[#9CA3AF] hover:text-white transition-colors"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {link.icon && <link.icon className="size-6" />}
                      </motion.a>
                    ))}
                  </motion.li>
                )}
              </>
            </motion.ul>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 border-t border-[#374151] pt-8 md:flex md:items-center md:justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="flex space-x-6 md:order-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <span className="inline-flex items-center text-[#9CA3AF] text-sm">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Globe className="mr-2 h-4 w-4" />
              </motion.div>
              English/Yoruba
            </span>
          </motion.div>
          <motion.p
            className="mt-8 text-base text-[#9CA3AF] md:mt-0 md:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            &copy; 2025 MaternalCare. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
