import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function HeroSection() {
  return (
    <section className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground pt-32 pb-16 md:pb-36 md:pt-40 lg:pt-48">
      <div className="width grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center">
        <motion.div
          className="space-y-2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl max-lg:text-4xl xl:text-5xl sm:leading-tight font-extrabold text-secondary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Smart Pregnancy
            </motion.span>
            <motion.span
              className="block text-primary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Care Companion
            </motion.span>
          </motion.h1>
          <motion.p
            className="sm:text-2xl text-xl md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Empowering pregnant women and healthcare providers with a bilingual,
            offline-first mobile solution for better maternal health outcomes.
          </motion.p>

          <motion.div
            className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href="#download"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "max-md:w-full max-md:h-14"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Download App
            </motion.a>
            <motion.a
              href="#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "max-md:w-full max-md:h-14"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-50"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="bg-linear-to-br from-white to-primary-foreground rounded-xl shadow-xl transform rotate-1 p-1"
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <img
              className="rounded-lg w-full h-full"
              src="src\assets\img-3.jpg"
              alt="Healthcare professional with tablet"
            />
          </motion.div>
          <motion.div
            className="absolute -top-3 sm:-top-8 -right-4 sm:-right-8 bg-destructive-foreground/50 rounded-lg sm:rounded-xl shadow-xl w-16 h-24 sm:size-32 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          />
          <motion.div
            className="absolute -bottom-8 -left-4 sm:-left-8 lg:-left-5 xl:-left-8 bg-primary/15 rounded-lg sm:rounded-xl shadow-xl w-16 h-24 sm:size-32 -z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
