import { contact_info } from "@/lib/constants";
import { Card, CardContent } from "./ui/card";

export function ContactSection() {
  return (
    <div
      id="contact"
      className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground py-12 md:py-32"
    >
      <div className="width space-y-8 md:space-y-16">
        <div className="lg:text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">
            Contact Us
          </h2>
          <p className="max-w-2xl text-xl mx-auto">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contact_info.map((contact) => (
            <Card
              key={contact.title}
              className="bg-white/70 shadow-xl border-none"
            >
              <CardContent className="flex items-center gap-4 p-6">
                <span
                  className={`shrink-0 rounded-md p-3 ${contact.background} ${contact.iconColor}`}
                >
                  <contact.icon className="size-6" />
                </span>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium text-secondary">
                    {contact.title}
                  </h3>
                  <p className="text-sm text-secondary-foreground">
                    {contact.info}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
