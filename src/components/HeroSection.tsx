import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export function HeroSection() {
  return (
    <section className="bg-linear-to-br from-primary-foreground/30 to-primary-foreground pt-32 pb-16 md:pb-36 md:pt-40 lg:pt-48">
      <div className="width grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-8 items-center">
        <div className="space-y-2">
          <h1 className="text-4xl max-lg:text-4xl xl:text-5xl sm:leading-tight font-extrabold text-secondary">
            <span className="block">Smart Pregnancy</span>
            <span className="block text-primary">Care Companion</span>
          </h1>
          <p className="sm:text-2xl text-xl md:text-xl">
            Empowering pregnant women and healthcare providers with a bilingual,
            offline-first mobile solution for better maternal health outcomes.
          </p>

          <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
            <a
              href="#download"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "max-md:w-full max-md:h-14"
              )}
            >
              Download App
            </a>
            <a
              href="#how-it-works"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "max-md:w-full max-md:h-14"
              )}
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative z-50">
          <div className="bg-linear-to-br from-white to-primary-foreground rounded-xl shadow-xl transform rotate-1 p-1">
            <img
              className="rounded-lg w-full h-full"
              src="src\assets\img-3.jpg"
              alt="Healthcare professional with tablet"
            />
          </div>
          <div className="absolute -top-3 sm:-top-8 -right-5 sm:-right-8 bg-destructive-foreground/50 rounded-lg sm:rounded-xl shadow-xl w-16 h-24 sm:size-32 -z-10" />
          <div className="absolute -bottom-8 -left-5 sm:-left-8 lg:-left-5 xl:-left-8 bg-primary/15 rounded-lg sm:rounded-xl shadow-xl w-16 h-24 sm:size-32 -z-10" />
        </div>
      </div>
    </section>
  );
}
