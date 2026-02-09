import { CheckCircle2, Eye, Target, Lightbulb, Award } from "lucide-react";
import { engineeringTeam } from "@/lib/images";

const About = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="gradient-bg py-16 md:py-20">
        <div className="section-container text-left text-primary-foreground">
          <p className="text-cyan text-sm font-semibold uppercase tracking-widest mb-2">Who We Are</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold">About Futunir Global</h1>
        </div>
      </section>

      {/* About */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-left">
                About Futunir Global <span className="text-secondary">Pvt Ltd</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                Futunir Global Pvt Ltd is an engineering-led organization built on the belief that strong fundamentals, disciplined execution, and responsible engineering create long-term value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                Founded by experienced engineering professionals with extensive EPC exposure, Futunir delivers practical, constructible, and execution-focused engineering solutions across multiple industries.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium text-left">
                We do not believe in over-designed drawings.<p className="text-muted-foreground leading-relaxed">
  <span className="font-semibold text-secondary">
    We believe in engineering that works on site.
  </span>
</p>
              </p>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow">
              <img src={engineeringTeam} alt="Engineering team" className="w-full h-80 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* What Futunir Means */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl">
          <Lightbulb className="h-10 w-10 text-secondary mb-4" />
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-left">
            What Does "Futunir" Mean?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6 text-left">
            Futunir is derived from two powerful words: <strong className="text-foreground">Future + Engineer</strong>
          </p>
          <ul className="space-y-3 max-w-lg">
            {[
              "Engineers are the creators of the future",
              "Every design decision today shapes tomorrow's operations",
              "Engineering must be forward-looking, responsible, and sustainable",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-6 leading-relaxed text-left">
            At Futunir, we design not just to meet today's requirements but to perform reliably in the future.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-muted rounded-xl p-8 card-shadow">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-left">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-left">
                To be a globally trusted engineering partner, delivering future-ready, high-quality, and cost-effective engineering solutions through a modern, remote-first delivery model.
              </p>
            </div>
            <div className="bg-muted rounded-xl p-8 card-shadow">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4 text-left">Our Mission</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Deliver error-free, construction-ready engineering designs",
                  "Support clients with flexible and scalable engineering teams",
                  "Maintain the highest standards of quality, safety, and compliance",
                  "Build long-term partnerships based on trust, transparency, and performance",
                  "Promote a balanced and sustainable work culture that enables engineering excellence",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-left">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Philosophy */}
      <section className="section-padding bg-muted">
        <div className="section-container max-w-3xl">
          <h2 className="font-display text-3xl font-bold text-foreground mb-6 text-left">
            Our Engineering Philosophy
          </h2>
          <p className="text-muted-foreground mb-8 text-left">We believe:</p>
          <div className="space-y-4">
            {[
              "Quality is built at the design stage, not corrected on site",
              "Accountability matters more than headcount",
              "Collaboration reduces risk and improves outcomes",
              "Sustainable work culture leads to consistent performance",
            ].map((item) => (
              <div key={item} className="bg-card rounded-lg p-4 card-shadow flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-foreground text-left">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 leading-relaxed text-left">
            Our remote-first approach allows our engineers to work with focus, ownership, and balance, resulting in better decisions and better designs for our clients.
          </p>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-left">
            What Sets Us Apart
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {[
              "Engineering-first mindset",
              "Strong EPC and execution experience",
              "Software-agnostic 3D & 2D capability",
              "Disciplined review and quality control processes",
              "Reliable, predictable delivery",
            ].map((item) => (
              <div key={item} className="bg-muted rounded-lg p-5 card-shadow flex items-center gap-3">
                <Award className="h-5 w-5 text-secondary shrink-0" />
                <span className="font-medium text-foreground text-sm text-left">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
