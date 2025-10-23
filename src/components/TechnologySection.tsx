import { Card, CardContent } from "./ui/card";
import { technology_section } from "@/lib/constants";

export function TechnologySection() {
  return (
    <section className="bg-background py-12 md:py-32">
      <div className="width space-y-8 md:space-y-16">
        <div className="lg:text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">
            Built with Modern Technology
          </h2>
          <p className="max-w-2xl text-xl mx-auto">
            Robust, scalable, and designed for reliability
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {technology_section.map((tech) => (
            <Card
              key={tech.title}
              className="bg-gray-50 border-none hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div
                  className="flex items-center justify-center h-12 w-12 rounded-md mx-auto mb-4"
                  style={{ backgroundColor: tech.color }}
                >
                  <tech.icon className="h-6 w-6 text-[#6B7280]" />
                </div>
                <h3 className="text-lg font-medium text-[#1F2937]">
                  {tech.title}
                </h3>
                <p className="mt-1 text-sm text-[#6B7280]">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
