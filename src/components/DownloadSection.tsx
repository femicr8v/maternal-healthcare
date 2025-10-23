import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Download, Smartphone } from "lucide-react";

export function DownloadSection() {
  return (
    <div
      id="download"
      className="bg-linear-to-r from-accent to-muted py-12 md:py-20"
    >
      <div className="width bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-4 items-stretch">
          <div className="p-8 pb-2 lg:p-12 lg:pe-0 xl:p-16 space-y-2">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-secondary font-extrabold">
              <span className="block">Ready to improve</span>
              <span className="block text-accent">maternal health?</span>
            </h2>
            <p className="max-w-2xl text-xl">
              Download MaternalCare today for Android devices. Coming soon to
              iOS.
            </p>

            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="src\assets\the-50th-law.pdf"
                className={cn(
                  buttonVariants({ variant: "default", size: "default" }),
                  "max-md:w-full bg-linear-to-r from-accent to-muted text-white hover:opacity-90 h-14 lg:h-16 px-6 md:px-10 lg:md:px-6 xl:px-10"
                )}
              >
                <Download className="mr-2 size-5" />
                Download App
              </a>
              <Button
                variant="outline"
                className="max-md:w-full hover:text-accent hover:border-accent h-14 lg:h-16 px-6 md:px-10 lg:md:px-6 xl:px-10"
              >
                <Smartphone className="mr-2 size-5" />
                <span className="bg-linear-to-r from-accent to-muted bg-clip-text hover:text-transparent">
                  Google Play
                </span>
              </Button>
            </div>
          </div>

          <div className="p-3 lg:pt-3 pt-0">
            <img
              className="rounded-lg lg:rounded-l-none object-cover object-left-top w-full h-full"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=360&q=80"
              alt="Healthcare app screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* 
<div className="grid lg:grid-cols-2 gap-4 md:gap-8 items-center">
          <div className="p-8 md:pb-0 lg:p-16 space-y-2 border border-blue-400">
            <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl text-secondary font-extrabold">
              <span className="block">Ready to improve</span>
              <span className="block text-accent">maternal health?</span>
            </h2>
            <p className="max-w-2xl text-xl">
              Download MaternalCare today for Android devices. Coming soon to
              iOS.
            </p>

            <div className="mt-4 sm:mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4">
              <a
                href="src\assets\the-50th-law.pdf"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "max-md:w-full max-md:h-14 bg-linear-to-r from-accent to-muted text-white hover:opacity-90 px-"
                )}
              >
                <Download className="mr-2 size-5" />
                Download APK
              </a>
              <Button
                variant="outline"
                size="lg"
                className="max-md:w-full max-md:h-14 hover:text-accent hover:border-accent"
              >
                <Smartphone className="mr-2 size-5" />
                <span className="bg-linear-to-r from-accent to-muted bg-clip-text hover:text-transparent">
                  Google Play
                </span>
              </Button>
            </div>
          </div>

          <div className="p-3 lg:pt-3 pt-0">
            <img
              className="rounded-lg lg:rounded-l-none object-cover object-left-top w-full h-full"
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=640&h=360&q=80"
              alt="Healthcare app screenshot"
            />
          </div>
        </div>
*/
