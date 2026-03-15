const techs = [
  { name: "Node.js", icon: "⬡" },
  { name: "Python", icon: "🐍" },
  { name: "Go", icon: "🔷" },
  { name: "React", icon: "⚛" },
];

const TechRow = () => {
  return (
    <section className="py-6 md:py-8 overflow-hidden">
      <div className="w-full px-4 sm:px-6 max-w-6xl mx-auto">
        <p className="text-center text-xs text-muted-foreground/60 mb-3 font-display">
          Works with your stack
        </p>
        <div className="flex items-center justify-center gap-6 sm:gap-10">
          {techs.map((t) => (
            <div
              key={t.name}
              className="flex flex-col items-center gap-1 opacity-40 transition-all duration-300 hover:opacity-100 hover:text-primary cursor-default"
            >
              <span className="text-xl sm:text-2xl">{t.icon}</span>
              <span className="font-display text-[10px] sm:text-xs text-muted-foreground">
                {t.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechRow;
