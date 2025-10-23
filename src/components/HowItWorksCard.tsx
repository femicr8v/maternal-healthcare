import type { HowItWorksType } from "@/lib/type";

type Props = {
  step: HowItWorksType;
  index: number;
};

export default function HowItWorksCard({ step, index }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-end">
      <img
        className={`rounded-lg shadow-xl w-full h-auto ${
          index % 2 === 1 && "md:order-1"
        }`}
        src="src\assets\img-3.jpg"
        alt={`Step ${step.number} illustration`}
      />

      <div className={`space-y-4 ${index % 2 === 1 && "md:text-right"}`}>
        <div
          className={`flex items-center gap-4 ${
            index % 2 === 1 && "md:justify-end"
          }`}
        >
          <span
            className={`flex items-center justify-center size-12 rounded-md text-white font-bold text-xl ${
              step.color
            } ${index % 2 === 1 && "md:order-2"}`}
          >
            {step.number}
          </span>
          <h3 className="text-xl font-bold text-secondary">{step.title}</h3>
        </div>
        <p className="md:max-w-m">{step.description}</p>
      </div>
    </div>
  );
}
