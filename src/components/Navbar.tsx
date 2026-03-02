import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="text-primary">slider</span>
          <span className="text-muted-foreground"> - dev</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {["APIs", "Pricing", "Docs"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
