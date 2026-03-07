import Footer from "@/components/Footer";
import { Check, Terminal, Zap, Crown } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    description: "Perfect for hobby projects and testing.",
    icon: Terminal,
    featured: false,
    features: [
      "1,000 API calls / month",
      "3 API categories",
      "Community support",
      "Standard rate limits",
      "Public endpoints only",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For developers shipping real products.",
    icon: Zap,
    featured: true,
    features: [
      "100,000 API calls / month",
      "All API categories",
      "Priority support",
      "Higher rate limits",
      "Private endpoints",
      "Webhooks & callbacks",
      "Analytics dashboard",
    ],
    cta: "Upgrade to Pro",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For teams that need scale and SLAs.",
    icon: Crown,
    featured: false,
    features: [
      "Unlimited API calls",
      "All API categories",
      "Dedicated support",
      "Custom rate limits",
      "Private endpoints",
      "SLA guarantee",
      "On-premise option",
      "Custom integrations",
    ],
    cta: "Contact Sales",
  },
];

const Pricing = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative flex items-center justify-center overflow-visible circuit-bg scanlines pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[120px] -z-10" />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Zap className="h-3.5 w-3.5" />
            Simple Pricing
          </div>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Pick Your <span className="text-primary">Plan</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Start free, scale when you're ready. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="relative py-20 circuit-bg overflow-visible">
        <div className="pointer-events-none absolute top-[10%] left-[15%] h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[140px] -z-10" />
        <div className="pointer-events-none absolute bottom-[10%] right-[10%] h-[500px] w-[500px] rounded-full bg-primary/[0.05] blur-[140px] -z-10" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`glass relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(25_95%_53%/0.08)] ${
                  tier.featured
                    ? "border-primary/40 shadow-[0_0_40px_hsl(25_95%_53%/0.12)]"
                    : "hover:border-primary/30"
                }`}
              >
                {tier.featured && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}

                <div className="flex items-center gap-2 border-b border-border px-4 py-2">
                  <div className={`h-2.5 w-2.5 rounded-full ${tier.featured ? "bg-primary" : "bg-primary/60"}`} />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="ml-2 font-mono text-xs text-muted-foreground">{tier.name.toLowerCase()}-plan</span>
                </div>

                <div className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <tier.icon className="h-5 w-5" />
                  </div>

                  <h3 className="font-display text-xl font-bold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{tier.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    <span className="font-display text-4xl font-bold text-primary">{tier.price}</span>
                    {tier.period && <span className="text-sm text-muted-foreground">{tier.period}</span>}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`mt-8 w-full rounded-md px-5 py-2.5 text-sm font-semibold transition-all ${
                      tier.featured
                        ? "bg-primary text-primary-foreground hover:brightness-110 glow-accent"
                        : "border border-border bg-secondary text-foreground hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Pricing;
