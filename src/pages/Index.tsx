import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Building2,
  Cpu,
  FlaskConical,
  Droplets,
  ArrowRight,
  Shield,
  Target,
  Users,
  Clock,
  DollarSign,
  Award,
  Factory,
} from "lucide-react";
import { heroImages, engineeringTeam, serviceImages, industryImages } from "@/lib/images";
import { services } from "@/data/services";

const industries = [
  { id: "oil-gas", title: "Oil & Gas", icon: Droplets },
  { id: "pharma", title: "Pharmaceutical & Life Sciences", icon: FlaskConical },
  { id: "semiconductor", title: "Semiconductor Manufacturing", icon: Cpu },
  { id: "buildings", title: "Buildings & Infrastructure", icon: Building2 },
];

const whyFutunir = [
  { icon: Target, title: "Engineering-First Organization", desc: "Decisions driven by technical correctness and constructability." },
  { icon: Shield, title: "Strong EPC & Execution Experience", desc: "Designs aligned with real construction and operational needs." },
  { icon: Award, title: "Disciplined Quality Culture", desc: "Quality embedded through accountable engineering and reviews." },
  { icon: Users, title: "Scalable Remote Delivery Model", desc: "Flexible resourcing without compromising control or accountability." },
  { icon: DollarSign, title: "Cost-Effective Engineering Services", desc: "Optimized delivery model reduces overheads while maintaining quality." },
  { icon: Clock, title: "Predictable & Transparent Delivery", desc: "Clear communication, realistic timelines, reliable outcomes." },
];

const Index = () => {
  const [currentHero, setCurrentHero] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToIndustries = () => {
    const el = document.getElementById("industries-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* HERO */}
      <section className="relative h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: currentHero === i ? 1 : 0 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 h-full flex items-center">
          <div className="section-container">
            <div className="max-w-2xl text-primary-foreground">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-left">
                Engineering the Future, <span className="text-cyan">Together</span>
              </h1>
              <p className="text-primary-foreground/85 text-base md:text-lg leading-relaxed mb-6 text-left">
                Futunir Global Pvt Ltd is a global engineering design company specializing in high-quality, constructible and cost-effective engineering solutions for the Oil & Gas, Life Sciences, Semiconductor Manufacturing and Buildings & Infrastructure sectors worldwide.
              </p>
              <p className="text-primary-foreground/75 text-sm md:text-base leading-relaxed mb-10 text-left">
                We combine strong engineering fundamentals, digital design expertise and a remote first delivery model to support clients with reliable, scalable and future ready engineering solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="gradient-bg text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-primary-foreground/30 text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Hero dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentHero(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                currentHero === i ? "bg-cyan w-8" : "bg-primary-foreground/40"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ENGINEERING EXCELLENCE */}
      <section className="section-padding bg-card">
        <div className="section-container">
          <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2 text-left">About Us</p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6 text-left">
                Engineering Excellence <span className="text-secondary">at the Core</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                Futunir Global Pvt Ltd is built on the belief that strong fundamentals, disciplined execution, and responsible engineering create long-term value.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 text-left">
                Founded by experienced engineering professionals with extensive EPC exposure, we focus on delivering practical, buildable designs that work on site, not over-designed drawings.
              </p>
              <p className="text-muted-foreground leading-relaxed text-left">
                From concept to detailed engineering, every deliverable is developed with accuracy, accountability, and constructability in mind.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden card-shadow">
              <img
                src={engineeringTeam}
                alt="Engineering team discussing plant design"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="mb-12 text-left">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Our Services
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="service-card group h-64 md:h-72"
              >
                <img
                  src={serviceImages[service.image]}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <h3 className="font-display text-lg font-bold text-primary-foreground mb-1 text-left">
                    {service.shortTitle}
                  </h3>
                  <p className="text-primary-foreground/70 text-sm line-clamp-2 text-left">
                    {service.description}
                  </p>
                  <span className="mt-3 text-cyan text-sm font-medium inline-flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries-section" className="section-padding bg-card">
        <div className="section-container">
          <div className="mb-12 text-left flex items-center gap-4 flex-wrap">
            <div>
              <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2">Sectors</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Industries We Serve
              </h2>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.id} className="industry-card">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industryImages[ind.id]}
                      alt={ind.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  </div>
                  <div className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-sm text-foreground text-left">{ind.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY FUTUNIR */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <div className="mb-12 text-left">
            <p className="text-secondary text-sm font-semibold uppercase tracking-widest mb-2">Our Edge</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Why Futunir?
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyFutunir.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-left">{item.title}</h3>
                  <p className="text-muted-foreground text-sm text-left">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-bg py-16">
        <div className="section-container text-left">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let's Engineer the Future Together
          </h2>
          <p className="text-primary-foreground/80 max-w-xl mb-8">
            Looking for a reliable engineering design partner? Let's discuss how Futunir Global Pvt Ltd can support your next project.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-card text-primary px-8 py-3 rounded-lg font-semibold hover:bg-card/90 transition-colors"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Index;
