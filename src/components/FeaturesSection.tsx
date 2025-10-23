import { features_section } from "@/lib/constants";
import { FeatureCard } from "./FeatureCard";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-background py-12 md:py-32">
      <div className="width space-y-8 md:space-y-16">
        <div className="lg:text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">
            Comprehensive Pregnancy Support
          </h2>
          <p className="max-w-2xl text-xl mx-auto">
            Designed for both pregnant women and healthcare providers with
            innovative features
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features_section.map((feature, index) => (
            <div key={index} className="pt-6">
              <FeatureCard feature={feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
