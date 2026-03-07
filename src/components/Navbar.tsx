import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { label: "APIs", href: "/apis" },
    { label: "Pricing", href: "/pricing" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen ? "glass shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-bold tracking-tight">
          <span className="text-primary">slider</span>
          <span className="text-muted-foreground"> - dev</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link to="/profile" className="flex items-center">
              {user.photoURL ? (
                <img
                  src={user.photoURL}
                  alt="Avatar"
                  className="h-8 w-8 rounded-full object-cover ring-2 ring-primary/60 transition-transform hover:scale-110"
                />
              ) : (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-muted text-xs font-bold text-primary ring-2 ring-primary/60 font-mono transition-transform hover:scale-110">
                  {(user.displayName || user.email || "U")[0].toUpperCase()}
                </div>
              )}
            </Link>
          ) : (
            <Link
              to="/apis"
              className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {user ? (
            <Link
              to="/profile"
              className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="Avatar" className="h-7 w-7 rounded-full object-cover ring-2 ring-primary/60" />
              ) : (
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-muted text-xs font-bold text-primary ring-2 ring-primary/60 font-mono">
                  {(user.displayName || user.email || "U")[0].toUpperCase()}
                </div>
              )}
              Profile
            </Link>
          ) : (
            <Link
              to="/apis"
              className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-accent text-center"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
