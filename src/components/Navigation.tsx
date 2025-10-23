import { useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full fixed top-7 z-1000">
      <div className="width px-4 sm:px-6 lg:px-8 bg-transparent backdrop-blur-lg shadow-sm rounded-2xl">
        <div className="flex justify-between py-4">
          <a
            href="/"
            className="shrink-0 flex justify-center items-center gap-3 font-bold text-lg text-secondary"
          >
            <img
              src="src\assets\logo-w.svg"
              alt=""
              className="size-9 p-2.5 bg-primary rounded-lg"
            />
            MaternalCare
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex shrink-0 items-center space-x-3 lg:space-x-12">
            {navItems.map((nav) => (
              <>
                {nav.href === "#download" ? (
                  <a
                    key={nav.href}
                    href={nav.href}
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "ml-2"
                    )}
                  >
                    {nav.label}
                  </a>
                ) : (
                  <a
                    key={nav.href}
                    href={nav.href}
                    className="text-secondary-foreground hover:text-primary font-medium transition-colors duration-300"
                  >
                    {nav.label}
                  </a>
                )}
              </>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="flex flex-col gap-6 py-4">
            {navItems.map((nav) => (
              <>
                {nav.href === "#download" ? (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className={cn(
                      buttonVariants({ variant: "default", size: "default" }),
                      "w-full"
                    )}
                  >
                    {nav.label}
                  </a>
                ) : (
                  <a
                    key={nav.href}
                    href={nav.href}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="text-secondary focus:text-primary active:text-primary font-medium transition-colors duration-300"
                  >
                    {nav.label}
                  </a>
                )}
              </>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
