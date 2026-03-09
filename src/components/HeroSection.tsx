import { ArrowRight, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden circuit-bg scanlines pt-24 md:pt-0">
      {/* Radial glow behind hero */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vw] max-h-[600px] w-[60vw] max-w-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <Zap className="h-3.5 w-3.5" />
          Lightning-fast API access
        </div>

        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Instantly Access{" "}
          <span className="text-primary">Powerful APIs</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Integrate currency exchange, live news, weather data, and more into
          your applications with a single, unified platform. Built for
          developers who ship fast.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent"
          >
            Start Building
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-md border border-border px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            View Documentation
          </a>
        </div>

        {/* Terminal-style code snippet */}
        <div className="mx-auto mt-16 max-w-xl glass rounded-lg p-1">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2">
            <div className="h-2.5 w-2.5 rounded-full bg-primary/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="ml-2 font-display text-xs text-muted-foreground">terminal</span>
          </div>
          <div className="px-4 py-4 text-left font-display text-sm">
            <span className="text-muted-foreground">$</span>{" "}
            <span className="text-foreground">curl</span>{" "}
            <span className="text-primary">https://api.slider.dev/v1/currency</span>
            <span className="ml-1 inline-block h-4 w-1.5 animate-pulse-glow bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
