import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const industryOptions = [
  "Oil & Gas",
  "Pharmaceutical & Life Sciences",
  "Semiconductor Manufacturing",
  "Buildings & Infrastructure",
  "Other",
];

const serviceOptions = [
  "Multi-Discipline Engineering Services",
  "3D Modelling & 2D Drafting",
  "Piping Design Engineering",
  "BIM & Digital Engineering",
  "As-Built Documentation & Reality Capture",
  "Quality Commitment",
  "Other",
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    service: "",
    requirement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  return (
    <>
      <section className="gradient-bg py-16 md:py-20">
        <div className="section-container text-left text-primary-foreground">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-2">Get In Touch</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">Partner with Futunir Global</h1>
          <p className="text-primary-foreground/80 max-w-2xl mt-4">
            At Futunir Global Pvt Ltd, we believe successful projects are built on strong partnerships, clear communication, and reliable delivery.
          </p>
        </div>
      </section>

      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-muted rounded-xl p-10 text-left card-shadow">
                  <CheckCircle2 className="h-16 w-16 text-secondary mb-4" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. Our engineering team will review your requirement and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-left">Send Us Your Requirement</h2>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Company Name</label>
                      <input
                        type="text"
                        value={form.company}
                        onChange={(e) => update("company", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Industry Type</label>
                      <select
                        value={form.industry}
                        onChange={(e) => update("industry", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      >
                        <option value="">Select Industry</option>
                        {industryOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1 text-left">Type of Service</label>
                      <select
                        value={form.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                      >
                        <option value="">Select Service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1 text-left">Brief Project Requirement</label>
                    <textarea
                      rows={4}
                      value={form.requirement}
                      onChange={(e) => update("requirement", e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                  >
                    Submit Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-xl p-8 card-shadow space-y-6 sticky top-28">
                <h3 className="font-display text-xl font-bold text-foreground text-left">Contact Details</h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-left">Phone</p>
                      <a href="tel:+918096474474" className="text-muted-foreground hover:text-secondary transition-colors">
                        +91 8096 474 474
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-left">Email</p>
                      <a href="mailto:info@futunir.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        info@futunir.com
                      </a>
                      <span className="text-muted-foreground">, </span>
                      <a href="mailto:sales@futunir.com" className="text-muted-foreground hover:text-secondary transition-colors">
                        sales@futunir.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-left">Address</p>
                      <p className="text-muted-foreground text-left">
                        4-32-1170/2/54P, Allwyn Colony, PH-2, Kukatpally, Hyderabad – 500072, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-medium text-foreground text-left">Business Hours</p>
                      <p className="text-muted-foreground">Mon – Sat: 9:00 AM to 5:00 PM</p>
                      <p className="text-muted-foreground">Sunday: Holiday</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-display font-bold text-foreground mb-3 text-left">Why Clients Choose Futunir</h4>
                  <ul className="space-y-2">
                    {[
                      "Engineering-first mindset",
                      "Strong ownership and accountability",
                      "Transparent communication",
                      "Consistent quality delivery",
                      "Long-term partnership approach",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
