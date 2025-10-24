import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { bookPdf, ctaImg } from "@/assets";
import { Download, Smartphone } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";

export function DownloadSection() {
  return (
    <div
      id="download"
      className="bg-linear-to-r from-accent to-muted py-12 md:py-32"
    >
      <motion.div
        className="width bg-white rounded-xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid lg:grid-cols-2 gap-4 md:gap-4 items-stretch">
          <motion.div
            className="p-8 pb-2 lg:p-12 lg:pe-0 xl:p-16 space-y-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-secondary font-extrabold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Ready to improve
              </motion.span>
              <motion.span
                className="block text-accent"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                maternal health?
              </motion.span>
            </motion.h2>
            <motion.p
              className="max-w-2xl text-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Download MaternalCare today for Android devices. Coming soon to
              iOS.
            </motion.p>

            <motion.div
              className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href={bookPdf}
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "max-md:w-full bg-linear-to-r from-accent to-muted text-white hover:opacity-90 h-14 lg:h-16 px-6 md:px-10 lg:md:px-6 xl:px-10"
                )}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Download className="mr-2 size-5" />
                </motion.div>
                Download App
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  className="max-md:w-full hover:text-accent hover:border-accent h-14 lg:h-16 px-6 md:px-10 lg:md:px-6 xl:px-10"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Smartphone className="mr-2 size-5" />
                  </motion.div>
                  <span className="bg-linear-to-r from-accent to-muted bg-clip-text hover:text-transparent">
                    Google Play
                  </span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="p-3 lg:pt-3 pt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img
              className="rounded-lg lg:rounded-l-none object-cover object-left-top w-full h-full"
              src={ctaImg}
              alt="Healthcare app screenshot"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
