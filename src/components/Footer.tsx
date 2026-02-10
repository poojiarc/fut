import { Link, useNavigate } from "react-router-dom";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Home,
  Info,
  Wrench,
  Globe,
  Briefcase,
} from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const navigate = useNavigate();
  const [footerForm, setFooterForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      "Website Enquiry – Futunir Global Pvt Ltd"
    );

    const body = encodeURIComponent(
      `Name: ${footerForm.name}
Email: ${footerForm.email}

Message:
${footerForm.message}`
    );

    window.location.href = `mailto:info@futunir.com?subject=${subject}&body=${body}`;

    setFooterForm({ name: "", email: "", message: "" });
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="text-primary-foreground"
      style={{ background: "var(--gradient-footer)" }}
    >
      <div className="section-container py-12 md:py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <img
              src="/images/futunir-logo.svg"
              alt="Futunir Global Pvt Ltd"
              className="h-12 w-auto mb-4 brightness-200"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed text-left">
              Where Engineers Design the Future. Delivering high-quality,
              constructible engineering solutions globally.
            </p>
            <div className="mt-4">
              <a
  href="https://www.linkedin.com/company/futunir-global/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
>
  <Linkedin className="h-5 w-5" />
  LinkedIn
</a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-left">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/", icon: Home },
                { label: "About Us", path: "/about", icon: Info },
                { label: "Services", path: "/services", icon: Wrench },
                { label: "Remote Model", path: "/remote-model", icon: Globe },
                { label: "Careers", path: "/careers", icon: Briefcase },
                { label: "Contact Us", path: "/contact", icon: Phone },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.path}>
                    <button
                      type="button"
                      onClick={() => handleNavClick(item.path)}
                      className="flex items-center gap-2 text-left text-primary-foreground/70 hover:text-cyan transition-colors text-sm"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-left">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                <span>+91 8096 474 474</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="mailto:info@futunir.com"
                    className="hover:text-cyan transition-colors"
                  >
                    info@futunir.com
                  </a>
                  <span>, </span>
                  <a
                    href="mailto:sales@futunir.com"
                    className="hover:text-cyan transition-colors"
                  >
                    sales@futunir.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span className="text-left">
                  4-32-1170/2/54P, Allwyn Colony, PH-2, Kukatpally, Hyderabad – 500072, India
                </span>
              </div>
              <div className="mt-4 pt-3 border-t border-primary-foreground/10">
                <p className="font-medium text-primary-foreground/90 mb-1 text-left">
                  Business Hours
                </p>
                <p>Mon – Sat: 9:00 AM to 5:00 PM</p>
                <p>Sunday: Holiday</p>
              </div>
            </div>
          </div>

          {/* Quick Enquiry */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-left">
              Quick Enquiry
            </h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={footerForm.name}
                onChange={(e) =>
                  setFooterForm((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-cyan"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                value={footerForm.email}
                onChange={(e) =>
                  setFooterForm((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-cyan"
              />
              <textarea
                placeholder="Your Message"
                rows={2}
                value={footerForm.message}
                onChange={(e) =>
                  setFooterForm((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }))
                }
                className="w-full px-3 py-2 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:border-cyan resize-none"
              />
              <button
                type="submit"
                className="w-full py-2 rounded-md bg-cyan text-primary-foreground text-sm font-semibold hover:bg-cyan-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Centered Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/10">
          <div className="flex flex-col items-center justify-center gap-3 text-sm text-primary-foreground/60 text-center">
            <div className="flex justify-center items-center gap-1">
              Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" /> by
              <a
                href="https://staffarc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange-600 hover:underline"
              >
                <img
                  src="https://www.staffarc.in/images/Staffarc-logo.png"
                  alt="StaffArc logo"
                  className="h-5 w-5 object-contain"
                />
                StaffArc
              </a>
            </div>

            <p>
              © {new Date().getFullYear()} Futunir Global Pvt Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
