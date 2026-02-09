import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { serviceImages } from "@/lib/images";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);
  const otherServices = services.filter((s) => s.id !== id);

  if (!service) {
    return (
      <div className="section-padding section-container text-left">
        <h1 className="font-display text-3xl font-bold text-foreground mb-4">Service Not Found</h1>
        <Link to="/services" className="text-secondary hover:underline">
          ← Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src={serviceImages[service.image]}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="relative z-10 h-full flex items-end">
          <div className="section-container pb-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-1 text-primary-foreground/70 hover:text-primary-foreground text-sm mb-3 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Services
            </Link>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground text-left">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8 text-left">{service.description}</p>

          {/* Why Choose Us (for multi-discipline) */}
          {service.highlights.length > 0 && !service.disciplines && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">
                {service.id === "piping-engineering" ? "We Are Specialized in Piping Design" : "Highlights"}
              </h3>
              <div className="space-y-3 mb-10">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-left">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Multi-discipline Why Choose Us */}
          {service.highlights.length > 0 && service.disciplines && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">Why Choose Us?</h3>
              <div className="space-y-3 mb-10">
                {service.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-left">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Disciplines (multi-discipline service) */}
          {service.disciplines && service.disciplines.length > 0 && (
            <div className="mb-10 space-y-8">
              <h3 className="font-display text-xl font-bold text-foreground text-left">Our Services</h3>
              {service.disciplines.map((disc) => (
                <div key={disc.name}>
                  <h4 className="font-display text-lg font-semibold text-foreground mb-3 text-left">{disc.name}</h4>
                  <div className="space-y-2">
                    {disc.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                        <span className="text-sm text-muted-foreground text-left">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Quality Commitment specific sections */}
          {service.id === "quality-commitment" && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">Our Structured Three-Level Review System</h3>
              <div className="space-y-6 mb-10">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="bg-muted rounded-lg p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center shrink-0 text-primary-foreground font-bold text-sm">
                        {idx + 1}
                      </div>
                      <span className="text-foreground text-left">{item}</span>
                    </div>
                  </div>
                ))}
              </div>

              {service.whyChooseUs && (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">Why Our Quality Commitment Matters</h3>
                  <div className="space-y-3 mb-10">
                    {service.whyChooseUs.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground text-left">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </>
          )}

          {/* Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4 text-left">Deliverables</h3>
              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="bg-muted rounded-lg p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground text-left">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Closing statement */}
          {service.closingStatement && (
            <p className="text-muted-foreground leading-relaxed text-left italic border-l-4 border-secondary pl-4">
              {service.closingStatement}
            </p>
          )}
        </div>
      </section>

      {/* Other Services Navigation */}
      <section className="section-padding bg-muted">
        <div className="section-container">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6 text-left">Explore Other Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="service-card group h-48"
              >
                <img
                  src={serviceImages[s.image]}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <h4 className="font-display text-base font-bold text-primary-foreground mb-1 text-left">
                    {s.shortTitle}
                  </h4>
                  <span className="text-cyan text-sm font-medium inline-flex items-center gap-1">
                    View Details <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
