import { DollarSign, Newspaper, CloudSun, BarChart3, Globe, Shield } from "lucide-react";

const apis = [
  {
    icon: DollarSign,
    title: "Currency API",
    description: "Real-time exchange rates for 170+ currencies with historical data and conversion endpoints.",
    status: "Live",
  },
  {
    icon: Newspaper,
    title: "News API",
    description: "Access breaking news from 80,000+ sources worldwide. Filter by category, language, and region.",
    status: "Live",
  },
  {
    icon: CloudSun,
    title: "Weather API",
    description: "Hyperlocal forecasts, severe weather alerts, and historical climate data for any location.",
    status: "Live",
  },
  {
    icon: BarChart3,
    title: "Analytics API",
    description: "Track user behaviour, generate insights, and build custom dashboards with ease.",
    status: "Beta",
  },
  {
    icon: Globe,
    title: "Geolocation API",
    description: "IP-based geolocation with city-level accuracy. Timezone, ISP, and threat detection included.",
    status: "Live",
  },
  {
    icon: Shield,
    title: "Auth API",
    description: "Secure authentication with OAuth 2.0, MFA support, and session management out of the box.",
    status: "Coming Soon",
  },
];

const FeaturesGrid = () => {
  return (
    <section id="apis" className="relative py-12 md:py-16 circuit-bg overflow-hidden">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="mb-8 md:mb-10 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold md:text-4xl">
            Explore Our <span className="text-primary">APIs</span>
          </h2>
          <p className="mx-auto mt-2 md:mt-3 max-w-lg text-sm sm:text-base text-muted-foreground">
            Production-ready endpoints designed for speed, reliability, and
            developer happiness.
          </p>
        </div>

        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {apis.map((api) => (
            <div
              key={api.title}
              className="glass group relative rounded-lg p-4 sm:p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(25_95%_53%/0.08)]"
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <api.icon className="h-4 w-4" />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    api.status === "Live"
                      ? "bg-primary/15 text-primary"
                      : api.status === "Beta"
                      ? "bg-muted text-muted-foreground"
                      : "bg-muted text-muted-foreground/60"
                  }`}
                >
                  {api.status === "Live" && (
                    <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  )}
                  {api.status}
                </span>
              </div>

              <h3 className="font-display text-base sm:text-lg font-semibold">{api.title}</h3>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {api.description}
              </p>

              <div className="mt-3 text-xs sm:text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                View docs →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
