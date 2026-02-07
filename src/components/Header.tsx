import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Wrench, Globe, Phone, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "About Us", path: "/about", icon: Info },
  { label: "Services", path: "/services", icon: Wrench },
  { label: "Remote Model", path: "/remote-model", icon: Globe },
  { label: "Contact Us", path: "/contact", icon: Phone },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center">
          <img
            src="/images/futunir-logo.svg"
            alt="Futunir Global Pvt Ltd"
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-secondary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            className="ml-2 gradient-bg text-primary-foreground px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-b border-border animate-fade-in">
          <div className="section-container py-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-secondary bg-primary/5"
                      : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
