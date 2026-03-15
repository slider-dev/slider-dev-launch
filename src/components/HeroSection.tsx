import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden circuit-bg scanlines pt-20 pb-10 md:pt-28 md:pb-16">
      {/* Radial glow behind hero */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80vw] max-h-[500px] w-[80vw] max-w-[500px] rounded-full bg-primary/10 blur-[100px]" />

      <div className="relative z-10 w-full px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="mb-4 md:mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs sm:text-sm font-medium text-primary">
          <Zap className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          Lightning-fast API access
        </div>

        <h1 className="mx-auto max-w-3xl font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
          Instantly Access{" "}
          <span className="text-primary">Powerful APIs</span>
        </h1>

        <p className="mx-auto mt-3 md:mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
          Integrate currency exchange, live news, weather data, and more into
          your applications with a single, unified platform. Built for
          developers who ship fast.
        </p>

        <div className="mt-6 md:mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent"
          >
            Start Building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 sm:px-8 py-3 text-sm sm:text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Documentation
          </a>
        </div>

        {/* Terminal-style code snippet */}
        <div className="mx-auto mt-8 md:mt-10 max-w-2xl glass rounded-lg p-1">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ml-2 font-display text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="px-4 py-3 text-left font-display text-xs sm:text-sm overflow-x-auto">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">curl</span>{" "}
            <span className="text-primary break-all">https://api.slider.dev/v1/currency</span>
            <span className="ml-1 inline-block h-4 w-1.5 animate-pulse-glow bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
