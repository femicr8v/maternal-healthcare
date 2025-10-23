import { Card } from "./ui/card";
import type { FeaturesSectionType } from "@/lib/type";

export function FeatureCard({ feature }: { feature: FeaturesSectionType }) {
  return (
    <Card className="p-6 pb-12 border-none shadow-none bg-gray-50 h-full hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
      <div className="-mt-12 flex flex-col items-start justify-center gap-4">
        <span
          className={`flex items-center justify-center p-3 rounded-md shadow-lg ${feature.color}`}
        >
          <feature.icon className="size-6 text-white" />
        </span>

        <h3 className="mt-4 text-lg font-medium text-secondary tracking-tight">
          {feature.title}
        </h3>
        <p className="text-secondary-foreground">{feature.description}</p>
      </div>
    </Card>
  );
}
