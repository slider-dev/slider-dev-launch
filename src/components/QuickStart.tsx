import { UserPlus, Key, Code2 } from "lucide-react";

const steps = [
  { icon: UserPlus, step: "1", title: "Register", desc: "Create your account." },
  { icon: Key, step: "2", title: "Get Key", desc: "Obtain your API token." },
  { icon: Code2, step: "3", title: "Integrate", desc: "Call your endpoint." },
];

const QuickStart = () => {
  return (
    <section className="relative py-10 md:py-14 overflow-hidden">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-center mb-6 md:mb-8">
          Quick <span className="text-primary">Start</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="group rounded-lg border border-primary/20 bg-card/50 p-4 sm:p-5 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_20px_hsl(25_95%_53%/0.08)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <s.icon className="h-4 w-4" />
              </div>
              <span className="font-display text-xs font-medium text-primary/60">
                Step {s.step}
              </span>
              <h3 className="font-display text-base font-semibold mt-1">
                {s.title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
