const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50 mt-auto">
      {/* Stats bar */}
      <div className="border-b border-border/50 py-3">
        <p className="text-center font-display text-[10px] sm:text-xs tracking-widest text-muted-foreground/50">
          99.9% Uptime &nbsp;|&nbsp; Global Edge Network
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-4 sm:px-6 py-5 md:py-6 md:flex-row">
        <span className="font-display text-sm font-semibold">
          <span className="text-primary">slider</span>
          <span className="text-muted-foreground"> - dev</span>
        </span>

        {/* System status */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          All Systems Operational
        </div>

        <div className="flex gap-5 text-xs sm:text-sm text-muted-foreground">
          {["Privacy Policy", "Terms of Service", "Status"].map((link) => (
            <a key={link} href="#" className="transition-colors hover:text-primary">
              {link}
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Slider Dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
