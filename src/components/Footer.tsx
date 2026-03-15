const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/50 py-6 md:py-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-between gap-3 px-4 sm:px-6 md:flex-row">
        <span className="font-display text-sm font-semibold">
          <span className="text-primary">slider</span>
          <span className="text-muted-foreground"> - dev</span>
        </span>

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
