import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", hasDropdown: true },
  { label: "Remote Model", path: "/remote-model" },
  { label: "Careers", path: "/careers" },
  { label: "Industries", path: "/", scrollId: "industries" }, // ✅ FIXED
  { label: "Contact Us", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollNavigation = (path: string, scrollId?: string) => {
    if (!scrollId) return;

    if (location.pathname !== path) {
      navigate(path);
      setTimeout(() => {
        document.getElementById(scrollId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 250);
    } else {
      document.getElementById(scrollId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center justify-between h-16 md:h-20">
        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/futunir-logo.svg"
            alt="Futunir Global Pvt Ltd"
            className="h-10 md:h-14 w-auto"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.hasDropdown && location.pathname.startsWith("/services"));

            // SERVICES DROPDOWN
            if (item.hasDropdown) {
              return (
                <div key={item.label} className="relative group">
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium ${
                      isActive
                        ? "text-secondary bg-primary/5"
                        : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {item.label}
                    <ChevronDown className="h-3 w-3 group-hover:rotate-180 transition-transform" />
                  </Link>

                  <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    <div className="bg-card border border-border rounded-xl shadow-lg py-2 min-w-[280px]">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-2.5 text-sm text-foreground/70 hover:text-secondary hover:bg-primary/5"
                        >
                          {service.shortTitle}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            // INDUSTRIES SCROLL BUTTON
            if (item.scrollId) {
              return (
                <button
                  key={item.label}
                  onClick={() =>
                    handleScrollNavigation(item.path, item.scrollId)
                  }
                  className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5"
                >
                  {item.label}
                </button>
              );
            }

            // NORMAL LINKS
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  isActive
                    ? "text-secondary bg-primary/5"
                    : "text-foreground/70 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE NAV */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-b border-border">
          <div className="section-container py-4 space-y-1">
            {navItems.map((item) => {
              // SERVICES MOBILE
              if (item.hasDropdown) {
                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                      className="w-full flex justify-between px-4 py-3 text-sm font-medium text-foreground/70"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {mobileServicesOpen && (
                      <div className="ml-6 space-y-1">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2 text-sm text-foreground/70 hover:text-secondary"
                          >
                            {service.shortTitle}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              // INDUSTRIES MOBILE SCROLL
              if (item.scrollId) {
                return (
                  <button
                    key={item.label}
                    onClick={() => {
                      handleScrollNavigation(item.path, item.scrollId);
                      setMobileOpen(false);
                    }}
                    className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary"
                  >
                    {item.label}
                  </button>
                );
              }

              // NORMAL MOBILE LINKS
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-primary"
                >
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
