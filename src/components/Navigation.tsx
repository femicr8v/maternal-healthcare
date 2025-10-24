import { useState } from "react";
import { cn } from "@/lib/utils";
import { whiteLogo } from "@/assets";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { Button, buttonVariants } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      className="w-full fixed top-7 z-1000"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="width px-4 sm:px-6 lg:px-8 bg-transparent backdrop-blur-lg shadow-lg rounded-2xl"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="flex justify-between py-4">
          <motion.a
            href="/"
            className="shrink-0 flex justify-center items-center gap-3 font-bold text-lg text-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.img
              src={whiteLogo}
              alt="logo"
              className="size-9 p-2.5 bg-primary rounded-lg"
              // whileHover={{ rotate: 360 }}
              // transition={{ duration: 0.6 }}
            />
            MaternalCare
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex shrink-0 items-center space-x-3 lg:space-x-12">
            {navItems.map((nav, index) => (
              <motion.div
                key={nav.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                {nav.href === "#download" ? (
                  <motion.a
                    href={nav.href}
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "ml-2"
                    )}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {nav.label}
                  </motion.a>
                ) : (
                  <motion.a
                    href={nav.href}
                    className="text-secondary-foreground hover:text-primary font-medium transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {nav.label}
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.div whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="transition-colors duration-300"
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-6 w-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-6 w-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="flex flex-col gap-6 py-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {navItems.map((nav, index) => (
                <motion.div
                  key={nav.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  {nav.href === "#download" ? (
                    <motion.a
                      href={nav.href}
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      className={cn(
                        buttonVariants({ variant: "default", size: "default" }),
                        "w-full"
                      )}
                      whileTap={{ scale: 0.95 }}
                    >
                      {nav.label}
                    </motion.a>
                  ) : (
                    <motion.a
                      href={nav.href}
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      className="text-secondary focus:text-primary active:text-primary font-medium transition-colors duration-300"
                      whileTap={{ scale: 0.95 }}
                    >
                      {nav.label}
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
}
