import { footer_links } from "@/lib/constants";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="width py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {footer_links.map((item) => (
            <ul key={item.title} className="space-y-4">
              <h2 className="font-semibold text-[#9CA3AF] tracking-wider uppercase">
                {item.title}
              </h2>

              <>
                {item.title !== "Connect" ? (
                  <li key={item.title} className="flex flex-col gap-2">
                    {item.links.map((link, index) => (
                      <a
                        key={link.label || index}
                        href={link.href}
                        className="text-base text-[#D1D5DB] hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    ))}
                  </li>
                ) : (
                  <li key={item.title} className="flex gap-6">
                    {item.links.map((link, index) => (
                      <a
                        key={link.label || index}
                        href={link.href}
                        className="text-base text-[#9CA3AF] hover:text-white transition-colors"
                      >
                        {link.icon && <link.icon className="size-6" />}
                      </a>
                    ))}
                  </li>
                )}
              </>
            </ul>
          ))}
        </div>

        <div className="mt-8 border-t border-[#374151] pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <span className="inline-flex items-center text-[#9CA3AF] text-sm">
              <Globe className="mr-2 h-4 w-4" />
              English/Yoruba
            </span>
          </div>
          <p className="mt-8 text-base text-[#9CA3AF] md:mt-0 md:order-1">
            &copy; 2025 MaternalCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
