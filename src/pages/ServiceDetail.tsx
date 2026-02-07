import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { serviceImages } from "@/lib/images";

const ServiceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="section-padding section-container text-center">
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
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              {service.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-card">
        <div className="section-container max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">{service.description}</p>

          <h3 className="font-display text-xl font-bold text-foreground mb-4">Highlights</h3>
          <div className="space-y-3 mb-10">
            {service.highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>

          {service.deliverables && service.deliverables.length > 0 && (
            <>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Deliverables</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.deliverables.map((item) => (
                  <div
                    key={item}
                    className="bg-muted rounded-lg p-4 flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
