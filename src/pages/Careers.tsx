import { useState } from "react";
import { CheckCircle2, Mail, Upload } from "lucide-react";
import { careersHero } from "@/lib/images";
import IndustriesButton from "@/components/IndustriesButton";

const Careers = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    gender: "",
    experience: "",
    location: "",
    position: "",
    email: "",
    phone: "",
    cv: null as File | null,
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = `Career Application – ${form.position}`;

    const body = `
Full Name: ${form.name}
Gender: ${form.gender}
Total Experience: ${form.experience} Years
Current Location: ${form.location}
Position Applied For: ${form.position}
Email: ${form.email}
Phone Number: ${form.phone}

Please find my CV attached.
    `.trim();

    const mailtoLink = `mailto:hr@futunir.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoLink;

    // Optional success state
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={careersHero}
          alt="Engineering workplace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 h-full flex items-center">
          <div className="section-container text-primary-foreground">
            <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-2 text-left">
              Join Our Team
            </p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-left">
              Build Your Future With Futunir
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-lg mb-4 text-left">
            At Futunir Global Pvt Ltd, we are always looking for passionate
            engineers, designers, and innovators who want to shape the future
            of engineering. If you are driven by quality, collaboration, and
            technical excellence, we would love to hear from you.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6 text-left">
            Join a global team working across Oil & Gas, Pharmaceuticals,
            Semiconductors, and Building & Infrastructure projects.
          </p>

          <IndustriesButton />
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl">
          {submitted ? (
            <div className="bg-card rounded-xl p-10 text-left card-shadow">
              <CheckCircle2 className="h-16 w-16 text-secondary mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                Application Submitted
              </h3>
              <p className="text-muted-foreground">
                Thank you for your interest in joining Futunir Global. Please
                ensure your CV is attached in the email before sending.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2 text-left">
                Career Application
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Full Name *
                  </label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Gender *
                  </label>
                  <select
                    required
                    value={form.gender}
                    onChange={(e) => update("gender", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  >
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Total Experience (Years) *
                  </label>
                  <input
                    required
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Current Location *
                  </label>
                  <input
                    required
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-left">
                  Position Applying For *
                </label>
                <input
                  required
                  value={form.position}
                  onChange={(e) => update("position", e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-left">
                    Phone Number *
                  </label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-left">
                  Upload CV (PDF / DOC / DOCX) *
                </label>
                <label className="flex items-center gap-2 px-4 py-2.5 rounded-lg border cursor-pointer">
                  <Upload className="h-4 w-4" />
                  {form.cv ? form.cv.name : "Choose File"}
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                    onChange={(e) =>
                      setForm((p) => ({
                        ...p,
                        cv: e.target.files?.[0] || null,
                      }))
                    }
                  />
                </label>
              </div>

              <button
                type="submit"
                className="gradient-bg text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90"
              >
                Apply Now
              </button>
            </form>
          )}

          {/* ALTERNATIVE EMAIL */}
          <div className="mt-8 p-6 bg-card rounded-xl card-shadow">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-secondary mt-0.5" />
              <div>
                <p className="text-left">
                  You can also send your updated CV directly to{" "}
                  <a
                    href="mailto:hr@futunir.com"
                    className="text-secondary font-medium hover:underline"
                  >
                    hr@futunir.com
                  </a>{" "}
                  with the subject line:
                </p>
                <p className="font-semibold mt-1 text-left">
                  “Career Application – [Position Name]”
                </p>
                <p className="text-muted-foreground text-sm mt-3 text-left">
                  Only shortlisted candidates will be contacted by our HR team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
