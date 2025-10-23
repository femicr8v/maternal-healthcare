import { how_it_works } from "@/lib/constants";
import HowItWorksCard from "./HowItWorksCard";

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground py-12 md:py-32"
    >
      <div className="width space-y-8 md:space-y-16">
        <div className="lg:text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary">
            How MaternalCare Works
          </h2>
          <p className="max-w-2xl text-xl mx-auto">
            A seamless experience for both patients and healthcare providers
          </p>
        </div>

        <div className="space-y-8">
          {how_it_works.map((step, index) => (
            <HowItWorksCard step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
